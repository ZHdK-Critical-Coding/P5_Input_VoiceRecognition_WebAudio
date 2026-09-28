# P5.js: Voice Recognition

[Deutsch](README_DE.md)

Uses the browser's Web Speech API (through the p5.speech library) to
transcribe German speech from the microphone continuously. Interim results
are shown in grey, final results in black. A starting point for voice
commands or sketches that react to spoken words.

## Installation

Requirements: a microphone, a browser that supports the Web Speech API
(e.g. Chrome) and an internet connection – recognition is done by the
browser's online speech service.

To recognise another language, change `'de-DE'` in `sketch.js`
(e.g. `'en-US'`).

Libraries (in `libraries/`): p5.js 1.10.0, p5.speech 0.0.3. p5.sound 1.0.1
is also in the folder but not loaded.

## How to Run

1. Open the folder in Visual Studio Code and start Live Server (click
   **Go Live** in the status bar).
2. Allow microphone access and start speaking (German).

## Coding Help

- **`sketch.js` → top**: creates a `p5.SpeechRec` object with the language
  code and the callback `parseResult`. `continuous = true` keeps listening,
  `interimResults = true` delivers faster, less accurate results while you
  speak. The comments in the code are in German.
- **`setup()`**: creates a full-window canvas and starts recognition with
  `myRec.start()`.
- **`parseResult()`**: stores the full result object `myRec.resultJSON` in
  `recognizedResult`. For just the latest text, use `myRec.resultString`;
  this is also the place to check for keywords.
- **`draw()`**: loops over `recognizedResult.results` and prints each
  transcript, black if `isFinal`, grey otherwise.
