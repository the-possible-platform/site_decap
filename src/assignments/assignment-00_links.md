---
title: 0.5 — Links
eleventyExcludeFromCollections: false
---

1. Absolviere alle 10 Schritte → [dieses Tutorials](https://commonmark.org/help/tutorial/), um dich mit Markdown vertraut zu machen. 

2. Erstelle eine Markdown-Datei die einen Link zu einer Website enthält, die du gut gestaltet (gute Typo/gutes Layout) findest. Die Datei soll folgendes [Frontmatter](https://daily-dev-tips.com/posts/what-exactly-is-frontmatter/) enthalten:

```yaml
---
category: "reference"
added_by: "[dein Name]"
---
```

3. Lade die Datei → [hier](https://drive.google.com/open?id=1-5eIkLHpwcskwcCID-ooVpZbVrUMlF81&usp=drive_fs) hoch.


---

{% assign links_reference = collections.link | where: "data.category", "reference" %}

Eure {{ links_reference.length }} Recherche-Ergebnisse:  

{% for link in links_reference %}
  <div class="post">
    {{ link.content | addTargetBlank | remove: "<p>" | remove: "</p>" }}
    {% if link.data.added_by %}
      <span class="added_by">von {{ link.data.added_by }}</span>
    {% else %}
      <span class="added_by">hinzugefügt von Unbekannt</span>
    {% endif %}
  </div>
{% endfor %}



