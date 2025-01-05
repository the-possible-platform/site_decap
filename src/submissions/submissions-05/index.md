---
layout: layouts/submissions.njk
title: "5 — online"
assignment: false
---


{% assign sorted_submissions = collections.submission | sort: 'data.author' %} 

{% for submission in sorted_submissions%}
{% if submission.data.assignment == "05" %}

<div class="post"> 
	
		{{ submission.content }}


	{% endif %}
	{% endfor %}
		</div>
