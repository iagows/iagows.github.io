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
### {{ t.name }}

{% for v in t.values %}
* [{{ v.name }}]({{ v.url}}){:target="_blank"}
{% endfor %}
{% endfor %}