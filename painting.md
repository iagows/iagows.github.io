---
title: Paintings
subtitle: Paintings made by me
type: website
tags: [paintings, brazil painter]
---
<br>

{% for p in site.data.paintings %}
<h3>{{ p.name }} - {{ p.year }}</h3>
{% for f in p.files %}
<img src="/img/paintings/{{ f.file }}">
{% endfor %}
{% if p.ref %}
<p>Ref: </p><img src="/img/paintings/{{ f.ref }}">
{% endif %}

{% endfor %}