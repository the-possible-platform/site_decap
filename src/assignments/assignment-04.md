---
title: 4 — Oups I GRID it again
blur: false
---

1. In dieser Aufgabe lernen wir CSS Grid kennen. Ähnlich wie in der letzten Runde gibt es ein →[Tutorial](https://www.youtube.com/watch?v=EiNiSFIPIQE), ein →[Spiel](https://cssgridgarden.com/#de) und ein →[Codepen](https://codepen.io/jdhaw/pen/oNKPVNj).
	
	_Ab hier Hausaufgabe:_
2. Schau dieses →[Tutorial](https://www.youtube.com/watch?v=8Dd7KRpKeaE), erstelle dir einen Account auf →[Github](https://github.com/), lade →[Github Desktop](https://desktop.github.com/download/) herunter und verbinde es mit deinem Account.

3. Lade deine Ergebnisse aus Aufgabe 4 und auch alle anderen Ergebnisse auf Github hoch. Am besten legst du dafür einen Ordner an, der `submissions` oder ähnlich heißt.  
<u>Wichtig</u>: Das Repository muss **öffentlich** sein!

4. Erstelle einen direkten Link zum Bild auf Github per _Rechtsclick aufs Bild → Grafikadresse kopieren_  und schreibe eine Markdown-Datei, in der du das Bild einbindest. Kein iFrame – ein Bild in Markdown geht so: `![alternativer Text](Link zum Bild)`

5. Lade die Markdown-Datei →[hier](https://drive.google.com/open?id=136jx0SN4SqW_gHIAANOT6Se5Si2To9Sy&usp=drive_fs) hoch.

---

{% assign submission_04 = collections.submission | where: "data.assignment", "04" %}

→[Alle {{ submission_04.length }} Ergebnisse](../submissions/submissions-04):

{% for submission in submission_04 %}
	{% if submission.data.assignment == "04" %}
		<div class="post"> 
			<a href='{{submission.url}}'>{{ submission.data.author }} </a>
			

</div>
	{% endif %}
{% endfor %}