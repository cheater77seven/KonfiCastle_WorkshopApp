# 🏰 KonfiCastle WorkshopApp
🔗 Live App: https://konfi-castle-workshops.web.app

Eine Workshop-App für das Konfi Castle.
Diese Web-App ermöglicht es Konfirmanden, sich selbstständig für Workshops und Sportangebote einzutragen, und bietet Mitarbeitern eine einfache Verwaltungsoberfläche.

---

### 🚀 Features
- Workshop-Anmeldung: Konfirmanden können sich live für Workshops (Samstag/Sonntag) anmelden.
- Sport-Verwaltung: Separate Listen für Sportangebote.
- Echtzeit-Daten: Dank Google Firebase sehen alle Teilnehmer sofort, wie viele Plätze noch frei sind.
- Admin-Dashboard: Mitarbeiter können Angebote erstellen, bearbeiten, löschen und Teilnehmerlisten einsehen.
- Mobile First & PWA: Die App ist für Smartphones optimiert und kann (dank Manifest) wie eine echte App auf dem Homescreen installiert werden.
- Dark Mode: Modernes UI Design (basierend auf Tailwind CSS).

### 🛠️ Tech Stack
- Das Projekt ist bewusst schlank gehalten ("Vanilla" Web Technologies).
- Frontend: HTML5, JavaScript (ES6+).
- Styling: Tailwind CSS (via CDN) & Lucide Icons.
- Backend / DB: Google Firebase Realtime Database & Firestore.
- Hosting: Firebase Hosting.

### 📂 Projektstruktur
So ist das Projekt aufgebaut:
```
KonfiCastle-WorkshopApp/
├── .firebase/           # Temporäre Cache-Dateien von Firebase (werden von Git ignoriert)
├── public/              # Der eigentliche Quellcode der Webseite
│   ├── index.html       # Die Hauptlogik der App (Single Page App)
│   ├── KonfiCastleLogo.jpg  # Assets & Bilder
│   └── ...
├── .gitignore           # Liste der Dateien, die Git ignorieren soll
├── firebase.json        # Konfiguration für das Hosting
├── manifest.webmanifest # PWA-Einstellungen (Name, Icons für Installation)
├── sw.js                # Service Worker (für Offline-Funktionalität)
└── README.md            # Diese Dokumentation
```



## 🚀 Workflow für Entwickler (Schritt-für-Schritt)
Du möchtest etwas an der App ändern?

### 1. Vorbereitung (Einmalig)
Du brauchst folgende Tools installiert:
  1. Git
  2. Node.js (wird für die Firebase Tools benötigt).
  3. Firebase CLI: Öffne dein Terminal und installiere es mit:
  ```
    npm install -g firebase-tools
  ```
  4. Repo klonen:
  ```
    git clone [https://github.com/cheater77seven/KonfiCastle_WorkshopApp.git](https://github.com/cheater77seven/KonfiCastle_WorkshopApp.git)
    cd KonfiCastle_WorkshopApp
  ```

### 2. Änderungen machen (Der tägliche Workflow)
**Schritt A: Code bearbeiten**
Öffne den Ordner in VS Code. Der Hauptcode liegt in public/index.html.

**Schritt B: Lokal testen**
Da wir mit Datenbanken arbeiten, öffne nicht einfach die HTML-Datei. Starte einen lokalen Server:
```
  firebase login   # (Nur beim ersten Mal nötig)
  firebase serve
```

Die App läuft jetzt unter `http://localhost:5000`. Änderungen im Code siehst du nach einem Refresh sofort.

**Schritt C: App Live stellen (Deployment)**
Bist du zufrieden? Dann lade die neue Version auf den Google-Server:
```
  firebase deploy
```
⚠️ *Achtung: Das aktualisiert sofort die öffentliche Webseite! Sei vorsichtig.*

### 3. Änderungen im Code sichern (Git & GitHub)
Wenn dein Code fertig und deployt ist, lade ihn ins Repository hoch, damit andere (und du selbst) den aktuellen Stand haben. <br>
  **1. Änderungen speichern:**
```
  git add .
  git commit -m "Beschreibung was ich geändert habe"
```

  **2. Hochladen (Push):**
```
  git push
```
(Falls du im Team arbeitest, nutze bitte Branches und Pull Requests, statt direkt auf main zu pushen).


## 👤 Kontakt
Developer: Tom (@cheater77seven)
