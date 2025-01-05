---
layout: layouts/layout.njk
---



{% for post in collections.post %}
<img src="{{ post.data.img }}">



	<h1><a href=" {{post.url}} "><a href=" {{post.url}} "> {{post.data.date}} </a></a></h1>
	<h1><a href=" {{post.url}} "> {{post.data.ort}} </a></h1>
	<h1><a href=" {{post.url}} "> {{post.data.plz}} </a></h1>
	<h1><a href=" {{post.url}} "> {{post.data.date}} {{post.data.ort}} {{post.data.plz}} </a></h1>


{% endfor %}




