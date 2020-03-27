---
title: Home
tags: [books, projects, tutorial]
---
{% include head.md %}

{% for pagedata in site.data.pages %}<a href="{{ pagedata.url }}"><img src="img/{{ pagedata.img }}"/>{{ pagedata.title }}</a>{% endfor%}
.
___

## News

### Date xx-xx-xxxx

### By lol

Bla bla bla

___

News

{% for p in site.categories.news %}<a {% if href="{{ site.baseurl }}{{ p.url }}">{{ p.date }} - {{ p.title }}</a>{% endfor %}

{% include foot.md %}
