---
title: About
subtitle: Some words
tags: [books, projects, tutorial]
---
## About this site

Hey, this site doesn't use cookies to track you. This site doesn't track you at all. This won't change, period.

## About me

I'm just some random crazy guy that enjoys random things.

## Thanks to

{% for t in site.data.thanks %}
<h3>{{ t.name }}</h3>
<div class="list-group list-group-horizontal">
{% for v in t.values %}
<a href="{{ v.url }}" target="_blank" class="list-group-item list-group-item-action">{{ v.name }}</a>
{% endfor %}
</div>
{% endfor %}