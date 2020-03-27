---
title: Home
tags: [books, projects, tutorial]
---
{% include head.md %}

{% for pagedata in site.data.pages %}<a href="{{ pagedata.url }}"><img src="img/{{ pagedata.img }}"/>{{ pagedata.title }}</a>{% endfor%}

___

## News

{% for p in site.categories.news %}
### {{ page.date | date: "%-d %B %Y" }}

#### By {{ p.author }}

{{ p.title }}

{{ p.content }}

{% endfor %}

{% include foot.md %}