---
title: Home
tags: [books, projects, tutorial]
layout: default
---
# INTRO

some text here

## News

{% for p in site.categories.news %}
___

### {{ p.date | date: "%d/%m/%Y" }} - {{ p.author }}

#### {{ p.title }}

{{ p.content }}

{% endfor %}