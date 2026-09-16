// Erstelle ein neues p5.SpeechRec Objekt für Spracherkennung
// 'de-DE' → Sprache Deutsch, parseResult → Callback-Funktion bei Ergebnissen
var myRec = new p5.SpeechRec('de-DE', parseResult); 

// kontinuierliche Erkennung aktivieren → Mikrofon wird permanent überwacht
myRec.continuous = true;

// Zwischenresultate zulassen → schnellere Anzeige, evtl. weniger genau
myRec.interimResults = true;

var recognizedResult = null;  // Speicher für die aktuellen Erkennungsresultate

// p5.js Setup-Funktion
function setup() {
  // Canvas erstellen
  createCanvas(windowWidth, windowHeight);
  textSize(20);          // Schriftgröße
  textAlign(LEFT);       // Textausrichtung links
  myRec.start();         // Spracherkennung starten
}

// p5.js Draw-Funktion (läuft kontinuierlich)
function draw() {
  background(200);       // Hintergrundfarbe

  let yOffset = 25;      // Start-Y-Position für Text

  if (recognizedResult) {
    // Für jedes Ergebnis der Spracherkennung
    for (let result of recognizedResult.results) {
      // Farbe je nach Status: final → schwarz, interim → grau
      fill(result.isFinal ? 0 : 160);

      // Text anzeigen, getrimmt (Leerzeichen entfernen)
      text(trim(result[0].transcript), 20, yOffset);

      // Zeilenabstand erhöhen
      yOffset += 25;
    }
  }
}

// Callback-Funktion, die ausgeführt wird, wenn die Spracherkennung ein Ergebnis liefert
function parseResult() {
  recognizedResult = myRec.resultJSON; // JSON-Ergebnis speichern
}