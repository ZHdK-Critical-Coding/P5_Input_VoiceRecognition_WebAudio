# P5 -> Voice Recognition

A p5.js sketch that uses the browser's Web Speech API to transcribe German
speech from the microphone continuously. Interim results are shown in grey,
final results in black.

## How to Use

1. Use a browser that supports the Web Speech API (e.g. Chrome). Recognition
   is done by the browser's speech service, so an internet connection is
   required.
2. Start Live Server (click **Go Live** in the VS Code status bar).
3. Allow microphone access and start speaking (German).
4. To recognise another language, change `'de-DE'` in `sketch.js`.

## Libraries

- p5.js 1.10.0
- p5.sound 1.0.1
- p5.speech 0.0.3
