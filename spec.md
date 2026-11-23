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
