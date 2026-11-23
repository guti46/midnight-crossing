# Midnight Crossing prompt log

## Assignment and submission

I asked whether the Roller Coaster Designer was feasible and how to submit it, and asked Codex to wait before starting. Codex explained the staged workflow and identified the three Learning Suite uploads and the live GitHub Pages link. The app build had yet to start.

## Project kickoff and theme revisions

I asked Codex to start building and make the coaster personal. The working folder already contained BeamCheck Pro, so Codex wrote a planning note while we settled on the theme. I first suggested Fast & Furious, narrowed the idea to Tokyo Drift, then chose Shibuya Crossing. The concept went from a general street-racing dashboard to a fictional mountain pass and then to a neon city crossing. The final app uses the Midnight Crossing title, diagonal crosswalks, illuminated signs, a tuner car, and dashboard-style ride readings.

## Separate repository and specification

I asked whether Codex could continue without more guidance. Codex created a separate local repository so the coaster could have its own root files and history. It drafted the seven spec sections and proposed build stages. The draft is in commit `cae3093`.

I then asked Codex to work the validation example, propose the extras, and keep building. Codex refined the physics and added the worked calculation in commit `f7e7826`. The model uses cosine curves between the handles, conservation of energy for speed, and slope and signed curvature for rider load.

## Mockup, track editor, and ride simulation

These commits came from the same build request and record successive stages of the implementation.

| Commit | What changed |
| --- | --- |
| `986e1f0` | Mocked up the Shibuya-themed dashboard, track editor, controls, live readouts, and plot area. |
| `2031605` | Added the crossing scene, smooth editable track, draggable handles, keyboard editing, and presets. |
| `54d8755` | Added animation, live MPH and g-force, telemetry plots, and failure markers. |

## Physics validation and revisions

Codex worked the first-valley example using a 44 m start, a 20 m valley, and a curvature radius of 30.3964 m. The 24 m drop gives an expected speed of **48.54 mph** and rider load of **2.579 g**. The app displayed **48.54 mph** and **2.579 g**, within the documented tolerances of 0.02 mph and 0.02 g.

The automated checks passed a complete ride, rollback with a reversal, stops above 4 g and below −1 g, keyboard edits, and preset reset. Codex also corrected the animation so a completed run holds its final position. The test script and validation results are in commit `5fde888`. Run the checks with `node 02_validation/check-ride.cjs`.

## Additional features

Codex proposed both current extras in response to my request to keep building.

- **Run comparison** pins a baseline run in the browser and compares its peak speed and load range with the current track. Commit `ca48876`.
- **Track naming** lets me name a track and preserves that name with the pinned run. The automated check pinned “Neon Express,” renamed the current track “After Hours,” and verified that the pinned name stayed in place and the reported peak-speed change was +11.5 mph after switching to the validation preset. Commit `a26453c`.

## Documentation and local access

I asked Codex to remove the standalone credit lines from the spec. Codex removed those lines and kept the historical record here. Commit `3ed47ab`.

I asked how to access the project. Codex verified that `index.html`, `spec.md`, and `prompts.md` are present and explained how to open the local app in a browser.

I then asked what a detailed log would look like for the rubric and requested that it replace the existing log. Codex expanded this file with the design revisions, commit IDs, test evidence, and remaining work.

## Remaining at the time of this entry

- Work and record my own hand-validation case and compare it to the app.
- Describe, build, and test a feature idea of my own.
- Verify the layout and interactions in a browser and record what I observe.
- Publish to GitHub Pages and check the live URL.
- Upload `index.html`, `spec.md`, and `prompts.md` to Learning Suite and paste the live URL in the submission comments.

## Submission walkthrough

I asked how to turn in Midnight Crossing. Codex checked GitHub's publishing instructions and explained how to push the existing commit history, enable Pages from main at the repository root, and upload the three files and live URL to Learning Suite. Publication and submission are pending.
