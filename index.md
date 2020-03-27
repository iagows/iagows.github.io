---
title: Home
tags: [books, projects, tutorial]
---
{% include head.md %}

{% for pagedata in site.data.pages %}<a href="{{ pagedata.url }}"><img src="img/{{ pagedata.img }}"/>{{ pagedata.title }}</a>{% endfor%}

___

## News

{% for p in site.categories.news %}
### {{ p.date }}

#### By {{ p.author }}

<a href="{{ site.baseurl }}/{{ p.url }}">{{ p.title }}</a>{% endfor %}

{% include foot.md %}