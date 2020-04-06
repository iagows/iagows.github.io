---
title: Paintings
subtitle: Paintings made by me
type: website
tags: [paintings, brazil painter]
---
<br>

<div class="card-columns">
{% for p in site.categories.paintings %}
	{% include util_card.md %}
{% endfor %}
</div>