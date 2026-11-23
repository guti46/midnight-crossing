# Roller Coaster Designer planning notes

Personal direction to settle with the designer: pick a place, hobby, or ride name that can shape the course and visual style. Describe one original feature in terms of what a rider or track designer should be able to do.

## First spec draft

Fill in Purpose, Inputs, Calculations, Outputs, Look and feel, Validation, and Out of scope. For the hand-worked validation case, choose a starting height, the height at the bottom of the first drop, and the valley radius. Calculate the frictionless speed in mph and the rider load in g at the valley. Record the app's readings beside those values after the simulation is built.

## Proposed build stages

1. Mock up the track editor, ride controls, live readouts, and plots. Check desktop and phone layouts.
2. Implement the draggable track and smooth curve. Check that dragging a point updates the track.
3. Animate the car and add the physics, readouts, plots, and failure markers. Test a completed run, a rollback, and both g-force limits.
4. Compare the app against the hand calculation and record both results in the spec. After validation, describe and implement each of the two additional features individually.

Commit the real spec drafts, each tested build stage, the validated version, and each added feature as they are completed.

## Theme direction

Working title: Midnight Crossing. Set the coaster above a fictionalized Shibuya Crossing at night, with diagonal zebra stripes, illuminated billboards, and magenta and icy blue reflections on wet pavement. Show the crossing below the editable side-view track. Keep the tuner-style car and dashboard gauges for live MPH and g-force. Mark rollbacks and g-force failures with dashboard warnings and a marker on the track.

Possible extra feature to discuss: save a previous run and compare its peak speed and g-force with the current run. The designer still needs to choose an original feature for the assignment.
