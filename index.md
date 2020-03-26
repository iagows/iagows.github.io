---
title: Home
tags: [books, projects, tutorial]
---
{% include head.md %}

{% for pagedata in site.data.pages %}<a href="{{ pagedata.url }}"><img src="img/{{ pagedata.img }}"/>{{ pagedata.title }}</a>{% endfor%}

___

## News

### Date xx-xx-xxxx

### By lol

Bla bla bla

{% include foot.md %}