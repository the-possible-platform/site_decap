---
title: 3 — Weird Flex but Ok
blur: false
---

1. Schau dir zunächst dieses →[Tutorial](https://www.youtube.com/watch?v=phWxA89Dy94) an und spiele ein paar Level →[Flexbox Froggy](https://flexboxfroggy.com/#de). 
2. Probiere dann CSS Flex im neuen →[Codepen](https://codepen.io/jdhaw/pen/abQXBBQ?editors=0100) aus. Der ganze Text ist in einer div-box mit der Klasse `.ganzertext` und jeweils in Abschnitten mit Headline und dazugehörigem Abschnitt `.textblock` zusammengefasst. Teste die verschiedenen Möglichkeiten der Positionierung mit CSS Flex. Speichere verschiedene Varianten bei Codepen und lade die Screenshots hier hoch.
3. Sammle deine Ergebnisse per Screenshot (JPG oder PNG) und lade sie [hier](https://drive.google.com/open?id=12G4fD6hEMAPaOk8dfA85r5BHsn6xxKJQ&usp=drive_fs) hoch.
4. Erstellt Markdown-Dateien von euren Entwürfen wie in `2 — Play the CSSystem` und ladet die Dateien →[hier](https://drive.google.com/open?id=12TE4Luwe6xKglxErodhgXmXEN4oAM2kJ&usp=drive_fs) hoch.

---

{% assign submission_03 = collections.submission | where: "data.assignment", "03" %}

→[Alle {{ submission_03.length }} Ergebnisse](../submissions/submissions-03):

{% for submission in submission_03 %}
	{% if submission.data.assignment == "03" %}
		<div class="post"> 
			<a href='{{submission.url}}'>{{ submission.data.author }} </a>
			

</div>
	{% endif %}
{% endfor %}