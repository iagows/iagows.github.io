---
title: Home
tags: [books, projects, tutorial]
last_updated: 2020 03 26
---
{% include head.md %}

{% for pagedata in site.data.pages %}

<a href="{{ pagedata.title }}"><img src="img/{{ pagedata.img }}"/></a>

{% endfor%}

{% include foot.md %}