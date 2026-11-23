const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

const noop = () => {};
const ctx = new Proxy({createLinearGradient: () => ({addColorStop: noop})}, {
  get: (object, key) => object[key] ?? noop
});
const elements = new Map();
function element(id) {
  if (!elements.has(id)) {
    elements.set(id, {
      value: id === "preset" ? "cruise" : "",
      textContent: "",
      handlers: {},
      getContext: () => ctx,
      addEventListener(type, handler) { this.handlers[type] = handler; }
    });
  }
  return elements.get(id);
}
let tick;
const memory = new Map();
const sandbox = vm.createContext({
  document: {getElementById: element},
  cancelAnimationFrame: noop,
  requestAnimationFrame: fn => { tick = fn; return 1; },
  performance: {now: () => 0},
  localStorage: {
    getItem: key => memory.get(key) ?? null,
    setItem: (key, value) => memory.set(key, value)
  }
});
const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const execute = code => vm.runInContext(code, sandbox);
execute(html.match(/<script>([\s\S]*?)<\/script>/)[1]);

function select(preset) {
  element("preset").value = preset;
  element("preset").handlers.change();
}
assert.equal(execute("profile.failure"), undefined);
element("ride").handlers.click();
tick(execute("profile.end.time") * 1000 + 10);
assert.equal(element("status").textContent, "Ride complete");
assert.equal(execute("current.x"), 300);

select("validation");
const radius = 2 * 60 ** 2 / (24 * Math.PI ** 2);
const speed = Math.sqrt(2 * 9.81 * 24) * 2.23694;
const load = 1 + 48 / radius;
const valley = execute("profile.points.find(point => point.x === 60)");
assert.ok(Math.abs(valley.speed * 2.23694 - speed) < 0.02);
assert.ok(Math.abs(valley.load - load) < 0.02);
console.log("Valley:", element("valley").textContent, "| R =", radius.toFixed(4), "m");

for (const [preset, expected] of [
  ["rollback", "Rollback"],
  ["high", "above 4 g"],
  ["low", "below −1 g"]
]) {
  select(preset);
  assert.ok(execute("profile.failure").includes(expected));
  element("ride").handlers.click();
  const end = execute("profile.end.time") * 1000;
  tick(end + 10);
  assert.ok(element("status").textContent.includes(expected));
  if (preset === "rollback") {
    const turnaround = execute("profile.end.x");
    assert.ok(Math.abs(execute("profile.end.speed")) < 0.001);
    tick(end + 1500);
    assert.ok(execute("current.x") < turnaround);
  }
}

select("cruise");
element("track").handlers.keydown({key: "2"});
element("track").handlers.keydown({key: "ArrowUp", preventDefault: noop});
assert.equal(execute("heights[1]"), 35);
element("reset").handlers.click();
assert.equal(execute("heights[1]"), 34);
console.log("Completion, rollback, both load limits, keyboard edits and reset passed.");
