---
title: 1 — Coding As A Playground
eleventyExcludeFromCollections: false
blur: false
---



In der ersten Aufgabe starten wir mit einem Plakat im Format A2. 
1. Lade dafür diese →[Vorlage](https://the-possible-platform.github.io/assets/vorlagen/241024_caap_text_a2%20Folder.zip) herunter und öffne Sie in Indesign. Der gesamte Text liegt hier in einem Rahmen, welcher nicht verändert werden darf. 
2. Öffne das Fenster _Absatzformate_, ziehe es groß und öffne alle Gruppen, sodass du alle Formate sehen kannst. Die Formate sind zunächst in die Schriftgrößen S M L und XL gruppiert und jeweils in 1-, 2- oder 4-spaltig eingeteilt. Möglich ist außerdem das Strukturieren des Textes durch Spaltenumbrüche _Schrift → Umbruchzeichen einfügen → Spaltenumbruch_.

Ziel der Übung ist, den Text ausschließlich über das Zuweisen von Absatzformaten zu gestalten — Viel Spaß!

3. Lade deine Ergebnisse als pdf [hier](https://drive.google.com/open?id=11zGp1AxggcMfUyyypoFPNFBfRmWKI48X&usp=drive_fs) hoch.

---

{% assign submission_01 = collections.submission | where: "data.assignment", "01" %}

→ [Alle {{ submission_01.length }} Ergebnisse](../submissions/submissions-01):

{% for submission in submission_01 %}
	{% if submission.data.assignment == "01" %}
		<div class="post"> 
			<a href='{{submission.url}}'>{{ submission.data.author }} </a>
			

</div>
	{% endif %}
{% endfor %}
