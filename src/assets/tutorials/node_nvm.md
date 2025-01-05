---
layout: layouts/layout.njk
---


Das Problem, dass `Node.js` und `nvm` in einem neuen Terminal-Fenster "vergessen" werden, liegt oft daran, dass die Umgebungsvariablen oder Konfigurationen in deinem Shell-Startup-Skript (`.bashrc`, `.zshrc`, etc.) nicht richtig gesetzt oder geladen werden.

Hier sind die Schritte, um das Problem zu beheben:

---

### 1. **Überprüfe, ob `nvm` richtig installiert ist**
Nach der Installation von `nvm` wird normalerweise eine Zeile zu deiner Shell-Startup-Datei (`~/.bashrc`, `~/.zshrc`, oder `~/.bash_profile`) hinzugefügt. Überprüfe, ob das der Fall ist:

#### Beispiel für `.bashrc` oder `.zshrc`:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # NVM
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # Optional
```

- Wenn diese Zeilen fehlen, füge sie manuell hinzu.
- Danach: **Lade die Shell-Konfiguration neu**:
  ```bash
  source ~/.bashrc   # Für Bash
  source ~/.zshrc    # Für Zsh
  ```

---

### 2. **Überprüfe, ob `nvm` in einem neuen Terminal verfügbar ist**
Schließe das Terminal und öffne ein neues. Gib dann Folgendes ein:
```bash
command -v nvm
```
- Wenn `nvm` nicht gefunden wird, ist die Konfiguration nicht richtig geladen.
- Wenn `nvm` gefunden wird, fahre mit Schritt 3 fort.

---

### 3. **Stelle sicher, dass `Node.js` über `nvm` installiert ist**
Installiere `Node.js` erneut mit `nvm`:
```bash
nvm install node   # Installiert die neueste Node.js-Version
nvm use node       # Nutzt die neueste Version in der aktuellen Session
nvm alias default node # Setzt die neueste Version als Standard
```

Das `nvm alias default node` sorgt dafür, dass die Version beim Start neuer Terminals automatisch genutzt wird.

---

### 4. **Überprüfe, ob `node` in einem neuen Terminal verfügbar ist**
Schließe das Terminal, öffne es erneut, und prüfe:
```bash
node -v
nvm ls
```

- Wenn Node.js verfügbar ist, funktioniert die Installation korrekt.
- Wenn nicht, überprüfe, ob du eine andere Shell oder eine spezielle Konfiguration verwendest (z. B. `fish` oder ein Terminal-Plugin wie `Oh My Zsh`).

---

### 5. **Spezialfälle und Workarounds**

#### a. **Oh My Zsh**
Wenn du `Oh My Zsh` verwendest, stelle sicher, dass die NVM-Konfiguration in deiner `.zshrc` korrekt ist (siehe Schritt 1). Außerdem kannst du ein Plugin wie `zsh-nvm` verwenden:
```bash
git clone https://github.com/lukechilds/zsh-nvm.git ~/.oh-my-zsh/custom/plugins/zsh-nvm
```
Dann füge `zsh-nvm` zu deinen Plugins in der `.zshrc` hinzu:
```bash
plugins=(git zsh-nvm)
```
Danach:
```bash
source ~/.zshrc
```

#### b. **Persistente Node.js-Installation ohne nvm**
Wenn du keine Lust auf `nvm` hast, installiere `Node.js` global über einen Paketmanager wie `apt` (Ubuntu) oder `brew` (MacOS):
```bash
# Ubuntu
sudo apt update
sudo apt install nodejs npm

# MacOS
brew install node
```

---

### 6. **Debugging**
Falls es immer noch nicht funktioniert, prüfe, ob ein Konflikt mit Pfaden besteht:
```bash
echo $PATH
```
Stelle sicher, dass der Pfad zu `nvm` oder Node.js korrekt in deinem `PATH` enthalten ist (z. B. `$HOME/.nvm`).

Falls es immer noch nicht funktioniert, lass mich wissen, welches Betriebssystem und welche Shell du verwendest, und wir können das genauer untersuchen. 😊