---
layout: layouts/submissions.njk
title: "0 — A Catalogue Of One Thing"
assignment: false
---


{% assign sorted_submissions = collections.submission | sort: 'data.title' %} 

{% for submission in sorted_submissions%}
	{% if submission.data.assignment == "00" %}

<div class="post centered"> 
	<h1><a href="{{submission.url}}">{{ submission.data.title }}</a>
		{% if submission.data.author %} <br> by {{ submission.data.author }}</h1>
		{% endif %}
		{{ submission.content }}

</div>
	{% endif %}
{% endfor %}
