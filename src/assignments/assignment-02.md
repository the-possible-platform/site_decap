---
title: 2 — Play the CSSystem
eleventyExcludeFromCollections: false
blur: false
---

1. Erstellt euch auf →[Codepen](https://codepen.io) einen eigenen Account. In dieser Aufgabe erwartet euch ein ähnliches Setup wie in der letzten Aufgabe. Neu ist, dass wir nicht mehr in InDesign und einem festen Format, sondern mit HTML und CSS für ein (bewegliches) Browserfenster gestalten. 
2. Macht euch in der [Codepen-Vorlage](https://codepen.io/jdhaw/pen/zYgPdwq) mit der neuen Struktur aus HTML-Tags, CSS-Klassen, Elementen usw vertraut, probiert rum, baut eure Ergebnisse aus der letzten Aufgabe mach (oder versucht es) und zieht am Browserfenster.
3. Sammelt eure Ergebnisse per Screenshot _Shift+Command+4_ und lade sie [hier](https://drive.google.com/open?id=12D5ksO5AwPWGz9CHg3QDiWklZi3XglCE&usp=drive_fs) hoch.
4. Wenn ihr ein PDF hochgeladen habt:
	Klickt oben rechts auf den Button _Freigeben_ und kopiert den Link. Der Link wird auf `/view?usp=share` enden. Ändert das in `/preview` . Kopiert diesen Link in eine Markdown-Datei (endet immer mit `.md`) mit dem Frontmatter: 

    ```yaml
	---
	author: "[dein Name]"
	---
	```
	und folgendem iFrame-Tag:
	```yaml
	<iframe class="pdf" src="[euer Link aus GoogleDrive]"></iframe>
	```
	
	wenn ihr ein PNG oder JPEG hochgeladen habt, geht ihr genauso vor jedoch hat euer iFrame-Element eine andere Klasse:

	```yaml
	<iframe class="image" src="[euer Link aus GoogleDrive]"></iframe>
	```
	und ihr nutzt möglicherweise mehrere iFrame-Elemente, weil ihr pro Bild ein Element und nicht wie beim PDF mehrere Seiten in einem Element habt.

5. Vergesst nicht, euer Codepen zu speichern und den Link der Markdown-Datei (nach oben, aber nicht übers _Frontmatter_) hinzuzufügen! 	

6. Bitte ladet die Markdown-Datei →[hier](https://drive.google.com/drive/folders/12H8FJrU0iEzli8GLH_jySxBfbDRVXJOf?usp=drive_link) hoch.


---

{% assign submission_02 = collections.submission | where: "data.assignment", "02" %}

→[Alle {{ submission_02.length }} Ergebnisse](../submissions/submissions-02):

{% for submission in submission_02 %}
	{% if submission.data.assignment == "02" %}
		<div class="post"> 
			<a href='{{submission.url}}'>{{ submission.data.author }} </a>
			

</div>
	{% endif %}
{% endfor %}