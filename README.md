# Expo Camera Preview Rendering Bug in Custom Component

This repository demonstrates a bug and its solution related to the Expo Camera API. When integrating the Expo Camera into a custom component, the preview might fail to render correctly, resulting in a black screen or a distorted image.  This issue often stems from improper prop handling or lifecycle mishaps within the custom component.

The `bug.js` file showcases the buggy implementation, while `bugSolution.js` provides the corrected version.  The core problem lies in how the `onCameraReady` async callback is handled; the solution ensures the camera is ready before accessing its properties.  This example is crucial for developers facing similar camera rendering problems within their Expo projects.