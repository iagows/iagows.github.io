---
title: Home
tags: [books, projects, tutorial]
---
{% include head.md %}

{% for pagedata in site.data.pages %}<a href="{{ pagedata.url }}"><img src="img/{{ pagedata.img }}"/>{{ pagedata.title }}</a>{% endfor%}

## News
___

{% for p in site.categories.news %}

<div class="news">

### {{ p.date | date: "%d/%m/%Y" }} - {{ p.author }}

{{ p.title }}

{{ p.content }}

</div>

{% endfor %}

{% include foot.md %}