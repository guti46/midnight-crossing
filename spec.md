# Midnight Crossing

## Purpose

Let students design and test a gravity-powered coaster above a fictionalized Shibuya Crossing at night.

## Inputs

Drag control points on a side-view track. Horizontal position and elevation are in metres. Ride starts the car from rest at the first crest. Reset restores the default route. Point limits and default coordinates are open for review.

## Calculations

Use a smooth curve through the control points. With friction disabled, use v = sqrt(2g(h0 - h)), where g = 9.81 m/s², h0 is the starting elevation in metres, h is current elevation in metres, and v is speed in m/s. Multiply by 2.23694 for mph. At a horizontal valley, the rider load is n = 1 + v²/(gR), where R is the valley radius in metres and n is measured in g. The full-track rider load model and numerical tolerances will be settled in the spec review.

Mark the turnaround when the next rise exhausts the car's kinetic energy and show it rolling back. Flag rider loads above 4 g or below -1 g and mark the first threshold crossing.

## Outputs

Show the animated tuner car, live speed in mph and rider load in g, both quantities plotted against distance along the track in metres, and a visible marker and message for any failure.

## Look and feel

Dark street-racing dashboard with magenta and icy blue accents. The route editor sits above an illustrated crossing with diagonal crosswalks and illuminated signs. On phones, stack the controls, track, readouts, and plots with touch-friendly controls.

## Validation

Add the student-worked first-drop speed and valley rider-load case here, including the exact starting elevation, valley elevation, radius, expected mph and g, and the app's measured results once built.

## Out of scope

Real-world ride certification, traffic simulation, and multiplayer.

## Proposed build stages

1. Mock up the crossing, editor, gauges, ride controls, and plots. Check desktop and phone layouts.
2. Build the editable track. Check the smooth curve and drag behavior.
3. Build ride animation, physics, plots, and failure handling. Test a finished ride, rollback, and both rider-load limits.
4. Validate the required features against the hand-worked case and record the results.
5. Describe and build two additional features individually after validation. At least one idea comes from the student.

## Implementation details

The track uses cosine interpolation between handles with ordered horizontal positions, with horizontal positions of 0, 60, 120, 180, 240, and 300 m. The default heights are 44, 34, 39, 32, 37, and 30 m, allowing a complete ride. Handles move vertically by drag or in 1 m keyboard increments. Reset reloads the currently selected preset. Elevation stays within 5–75 m. The car starts at rest with an infinitesimal downhill displacement approximated by the first sampled interval.

The signed curvature is h'' / (1 + h'²)^(3/2), where derivatives are with respect to horizontal position in metres. The rider-normal load is 1/sqrt(1 + h'²) + v² times signed curvature divided by g. At a handle the curve is horizontal. If curvature differs on either side of the handle, evaluate both sides. The plot uses sampled arc length. Rollback and threshold positions are estimated at intervals of at most 0.15 m horizontally.

### Worked validation case

Use the validation preset with the first three handles at (0, 44), (60, 20), and (120, 44) m. At the first valley the 24 m drop gives v = sqrt(2 × 9.81 × 24) = 21.6998 m/s or 48.54 mph. The cosine segment has valley curvature 24π²/(2 × 60²) = 0.0328987 per metre, giving R = 30.3964 m. Rider load is 1 + (2 × 24)/30.3964 = 2.579 g. Compare within 0.02 mph and 0.02 g. The app reported 48.54 mph and 2.579 g at the arrival side of the first valley. Both checks passed. The test also passed a finished ride, rollback, both load limits, keyboard editing, and reset. Reproduce with node 02_validation/check-ride.cjs. This worked case was prepared with assistant help.

## Features

- Run comparison. Pin the current run's peak speed and rider loads in this browser and compare them to later edits.
- Track name. Give the route a custom name that appears on the dashboard and travels with a pinned run. Both feature ideas were proposed by the assistant.
