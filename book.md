---
title: Books
subtitle: Books written by me or friends
type: book
---
<br>

<div class="row row-cols-1 row-cols-md-3">
{% for p in site.categories.books %}
	{% include util_card.md %}
{% endfor %}
</div>