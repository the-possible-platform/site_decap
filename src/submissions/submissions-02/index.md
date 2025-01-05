---
layout: layouts/submissions.njk
title: "2 — Play the CSSystem"
assignment: false
---


{% assign sorted_submissions = collections.submission | sort: 'data.author' %} 

{% for submission in sorted_submissions%}
{% if submission.data.assignment == "02" %}

<div class="post"> 
	<h1><a href="{{submission.url}}">{{ submission.data.author }}</a></h1>
		{{ submission.content }}

	</div>
	{% endif %}
	{% endfor %}
