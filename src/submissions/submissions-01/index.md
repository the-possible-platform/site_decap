---
layout: layouts/submissions.njk
title: "1 — Coding as a Playground"
assignment: false
---


{% assign sorted_submissions = collections.submission %} 

{% for submission in sorted_submissions%}
{% if submission.data.assignment == "01" %}

<div class="post"> 
	<h1><a href="{{submission.url}}">{{ submission.data.author }}</a></h1>
		{{ submission.content }}

	</div>
	{% endif %}
	{% endfor %}
