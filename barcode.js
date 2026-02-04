// ========================================
// BARCODE SCANNER VERWALTUNG
// ========================================
// Verhindert mehrfaches Springen zum gleichen Kapitel
// wenn der Scanner kontinuierlich scannt

let lastScannedChapter = null;  // Speichert die zuletzt gescannte Kapitelzahl


/**
 * Verarbeitet gescannte Barcode-Eingaben
 * Springt nur zum Kapitel, wenn eine andere Zahl als zuvor gescannt wurde
 * @param {number} chapterNumber - Die gescannte Kapitelzahl (1-5)
 */
function handleBarcodeInput(chapterNumber) {
  // Prüfen ob die Eingabe gültig ist (1-5)
  if (chapterNumber < 1 || chapterNumber > 5) {
    console.warn("Ungültige Kapitelzahl:", chapterNumber);
    return;
  }

  // Nur zum Kapitel springen, wenn es eine ANDERE Zahl ist
  if (chapterNumber !== lastScannedChapter) {
    console.log(`📖 Barcode erkannt: Kapitel ${chapterNumber} (vorher: ${lastScannedChapter || 'keins'})`);
    
    lastScannedChapter = chapterNumber;
    goToChapter(chapterNumber);  // Funktion aus input.js
    
    // Medien entsperren falls noch nicht geschehen
    if (!mediaUnlocked) {
      mediaUnlocked = true;
      console.log("媒体解锁 ✅");
    }
  } else {
    // Gleiche Zahl wie vorher - ignorieren
    console.log(`🔄 Gleiche Kapitelzahl erneut gescannt (${chapterNumber}) - ignoriert`);
  }
}


/**
 * Reset der letzten gescannten Kapitelzahl
 * Nützlich wenn manuell navigiert wird
 */
function resetBarcodeTracking() {
  lastScannedChapter = null;
  console.log("🔓 Barcode-Tracking zurückgesetzt");
}


/**
 * Gibt die aktuelle zuletzt gescannte Kapitelzahl zurück
 * @returns {number|null}
 */
function getLastScannedChapter() {
  return lastScannedChapter;
}
