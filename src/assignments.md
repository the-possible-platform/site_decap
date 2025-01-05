---
layout: layouts/posts.njk
title: Assignments
---


{% assign sorted_assignments = collections.assignment | sort: 'data.title' | reverse %}

{% for assignment in sorted_assignments%}

<div class="post assignment {% if assignment.data.blur == true %}blur{% endif %}">
 	<h2>{{ assignment.data.title }}</h2>
	<p>{{ assignment.content }}</p>
</div>
{% endfor %}
