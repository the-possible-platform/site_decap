---
title: "5 — Online"
eleventyExcludeFromCollections: false
---

In dieser Aufgabe wollen wir (endlich) online gehen. 
1. Lade dir dafür dieses →[Bundle](/assets/vorlagen/index_bundle.zip) herunter und entpacke die Zip-Datei.  

2. Folge dieser →[Anleitung](https://pages.github.com/), um dein Repository über Github zu hosten.  

3. Lege das Bundle in euren lokalen Ordner, der mit Github Desktop verknüpft ist.  

4. Verlinke deine Ergebnisse aus den ersten vier Aufgaben mit dem `<img>`Tag in den `<div>`Boxen mit der Klasse `.item` und nutze CSS Flex und Grid, um ein passendes Layout zu entwickeln.  

5. Erstelle eine Markdown Datei mit dem Link zu deiner Website `https://[username].github.io/[ggf-hier-euer-Repository]` und lade die Datei →[hier](https://drive.google.com/open?id=13Rb70PBrJ0q4Ra5fnUMd5Zr2sWz3qBaT&usp=drive_fs) hoch.  

---

{% assign submission_05 = collections.submission | where: "data.assignment", "05" %}

→[Alle {{ submission_05.length }} Ergebnisse](../submissions/submissions-05):

{% for submission in submission_05 %}
	{% if submission.data.assignment == "05" %}
		<div class="post"> 
			<!-- <a href='{{submission.url}}'>{{ submission.data.author }} </a> -->
			{{submission.content | remove: '<p>' | remove: '</p>'}}
			

</div>
	{% endif %}
{% endfor %}

