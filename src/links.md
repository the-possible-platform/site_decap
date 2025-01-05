---
layout: layouts/posts.njk
title: Links
---

<div class="list links">





{% assign categories = collections.link | group_by: "data.category" %}
{% assign sorted_categories = categories | sort: "items.size" %}

{% for category in sorted_categories %}
{% assign category_name = category.name | default: "Uncategorized" %}
<div class="{{ category_name | slugify }}-category category">
    <h3>{{ category_name | capitalize }}</h3>
    {% if category.items.size > 0 %}
    <div class="post">
    {% for link in category.items | remove:"<p>" | remove:"</p>" %}

    
        <div class="content link">{{ link.templateContent | addTargetBlank }}
        </div>{% endfor %}{% else %}
        </div>
        <p>Keine Beiträge in dieser Kategorie.</p>
        {% endif %}
</div></div>{% endfor %}

</div>