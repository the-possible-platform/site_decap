---
layout: layouts/posts.njk
title: Minutes
---

# {{ date }}

{% for minutes in collections.minutes | remove: "<p>" | remove: "</p>" %}
<div class="post minutes"> 
	
    	<a href="{{ minutes.url }}" 
       	class="hover-link" 
       	style="--background-image: url('{{ minutes.data.image }}');">
       	{{ minutes.data.date | date: "%B %d, %Y" }}
    	</a>
    	{% if minutes.data.author  %}
      <span class="added_by">von {{ minutes.data.author | remove: "<p>" | remove: "</p>" }}</span>
    {% else %}
      <span class="added_by">hinzugefügt von Unbekannt</span>
    {% endif %}
	
    {% endfor %}
</div>



