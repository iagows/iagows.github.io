---
title: Books
subtitle: Books written by me or friends
type: book
---
<br>

<div class="card-columns">
{% for p in site.categories.books %}
	{% include util_card.md %}
{% endfor %}
</div>