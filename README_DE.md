# P5.js: Voice Recognition

[English](readme.md)

Verwendet die Web-Speech-API des Browsers (über die Bibliothek p5.speech),
um deutsche Sprache vom Mikrofon laufend zu transkribieren.
Zwischenresultate erscheinen grau, endgültige Resultate schwarz. Ein
Ausgangspunkt für Sprachbefehle oder Sketches, die auf gesprochene Wörter
reagieren.

## Installation

Voraussetzungen: ein Mikrofon, ein Browser mit Unterstützung für die
Web-Speech-API (z. B. Chrome) und eine Internetverbindung – die Erkennung
läuft über den Online-Sprachdienst des Browsers.

Um eine andere Sprache zu erkennen, `'de-DE'` in `sketch.js` ändern
(z. B. `'en-US'`).

Bibliotheken (in `libraries/`): p5.js 1.10.0, p5.speech 0.0.3. p5.sound
1.0.1 liegt ebenfalls im Ordner, wird aber nicht geladen.

## Ausführen

1. Den Ordner in Visual Studio Code öffnen und Live Server starten (in der
   Statusleiste auf **Go Live** klicken).
2. Den Zugriff auf das Mikrofon erlauben und (auf Deutsch) sprechen.

## Coding-Hilfe

- **`sketch.js` → oben**: erstellt ein `p5.SpeechRec`-Objekt mit dem
  Sprachcode und dem Callback `parseResult`. `continuous = true` hört
  dauernd zu, `interimResults = true` liefert schon während des Sprechens
  schnellere, aber ungenauere Resultate.
- **`setup()`**: erstellt eine fensterfüllende Zeichenfläche und startet
  die Erkennung mit `myRec.start()`.
- **`parseResult()`**: speichert das ganze Resultat-Objekt
  `myRec.resultJSON` in `recognizedResult`. Nur den neuesten Text liefert
  `myRec.resultString`; hier ist auch der Ort, um nach Stichwörtern zu
  suchen.
- **`draw()`**: geht durch `recognizedResult.results` und schreibt jedes
  Transkript hin, schwarz wenn `isFinal`, sonst grau.
