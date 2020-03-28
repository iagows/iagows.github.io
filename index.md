---
title: Home
tags: [books, projects, tutorial]
layout: padrao
---
{% for pagedata in site.data.pages %}<a href="{{ pagedata.url }}"><img src="img/{{ pagedata.img }}"/>{{ pagedata.title }}</a>{% endfor %}

## News

{% for p in site.categories.news %}
___

### {{ p.date | date: "%d/%m/%Y" }} - {{ p.author }}

#### {{ p.title }}

{{ p.content }}

{% endfor %}