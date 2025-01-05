---
layout: layouts/submissions.njk
title: "3 — Weird Flex but Ok"
assignment: false
---


{% assign sorted_submissions = collections.submission | sort: 'data.author' %} 

{% for submission in sorted_submissions%}
{% if submission.data.assignment == "03" %}

<div class="post"> 
	<h1><a href="{{submission.url}}">{{ submission.data.author }}</a></h1>
		{{ submission.content }}

	</div>
	{% endif %}
	{% endfor %}
