---
title: Home
tags: [books, projects, tutorial]
last_updated: 2020 03 26
---
{% include head.md %}

{% for pageData in site.data.pages %}

<a href="{{ pageData.title }}"><img src="img/{{ pageData.img }}"/></a>

{% endfor%}

{% include foot.md %}