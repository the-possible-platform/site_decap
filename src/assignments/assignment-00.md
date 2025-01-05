---
title: "0 — A Catalogue Of One Thing"
# eleventyExcludeFromCollections: true
blur: false
---



1. Think of something. One thing. A thing of which there might be many versions, many instances, many models, many sizes, many somethings. For example.
2. Find a website, where this thing is a category.
3. Think of a Title for that category. Maybe a new one. Maybe not.

or

1. Find a website, where a thing is a category.
2. Think about it. The thing. A thing of which there might be many versions, many instances, many models, many sizes, many somethings. For example.
3. Think of a Title for that category. Maybe a new one. Maybe not.

or

1. Think of a Title for a category. Maybe a new one. Maybe not.
2. Find a website, with this category.
3. Think about it. The things in the category. Things of which there might be many versions, many instances, many models, many sizes, many somethings. For example. 

or alike.

And then: Scrape it →<a href="https://drive.google.com/open?id=1-1YRv9_Kn5_7nmtuApsjC5nSxWtEqyuk&usp=drive_fs" target="_blank">Tutorial</a>  
And then: Upload your catalog →<a href="https://drive.google.com/drive/folders/1-u24n30wJnyUadIt_wt-7R5pMeeygREi?usp=drive_link" target="_blank">here</a>.  
And then: Good luck.  

Thank you for engaging!

---


{% assign submission_00 = collections.submission | where: "data.assignment", "00" | sort: 'data.title' %}
→ [See all {{ submission_00.length }} Submissions](../submissions/submissions-00)


{% for submission in submission_00 %}
	{% if submission.data.assignment == "00" %}
<div class="post"> 
	<a href='{{submission.url}}'>{{ submission.data.title }} </a><span class="added_by">{% if submission.data.author %} by {{submission.data.author}}</span>
		{% endif %}

</div>
	{% endif %}
{% endfor %}
