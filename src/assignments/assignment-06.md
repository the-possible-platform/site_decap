---
title: "6 — Let’s Platform!"
---

Hier ein [neues zip-Bundle](/assets/vorlagen/11ty_bundle.zip) mit der 11ty-Grundstruktur inklusive der berüchtigten `.eleventy.js`-Datei. Und der [einstündige Walkthrough](https://drive.google.com/open?id=13cZnqExJ9wONvOFb89-ysCXAPENNi6AL&usp=drive_fs) durchs eigentlich nur 6-minütige [Tutorial](https://www.youtube.com/watch?v=kzf9A9tkkl4).  
  
<u>Hinweis</u>: Wenn ihr ein neues Repository für euer Semesterprojekt erstellt, muss es wie folgt heißen: `[username].github.io`, euer lokaler Order (also der auf eurer Festplatte) muss `_site` heißen und in eurer 11ty-Struktur liegen. Wenn alles richtig konfiguriert ist, baut 11ty euch eure Seite direkt ins Repository, sodass über _Commit und Push_ veröffentlicht werden kann.

<u>Außerdem</u>: Hier noch ein [sehr ausführliches Tutorial](https://www.youtube.com/watch?v=4wD00RT6d-g&list=PLwhCq3ZFGOGgZDg_pnVh15gUfYqWnlWRs) in dem noch langsamer als in meinem vorgeturnt und am Ende auch noch ein richtiges CMS (Content-Management-System – ab Minute 59, alles davor haben wir schon mehr oder weniger gemacht) eingebunden wird. (Damit können andere dann so richtig uploaden) Ich bin damit noch nicht ganz durch, aber wer will, kann sich das ja über die Feiertage anschauen.

---

{% assign submission_06 = collections.submission | where: "data.assignment", "06" %}

→Alle {{ submission_06.length }} Ergebnisse:

{% for submission in submission_06 %}
	{% if submission.data.assignment == "06" %}
		<div class="post"> 
			<!-- <a href='{{submission.url}}'>{{ submission.data.author }} </a> -->
			{{ submission.content | remove: '<p>' | remove: '</p>' }}
			

		</div>
	{% endif %}
{% endfor %}