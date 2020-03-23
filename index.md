---
title: Home
---
{% include head.md %}

Conteúdo aqui

<nav class="nav-primary" role="navigation" >
    <ul>
        {% for p in site.pages %}
        <li>
        	<a {% if p.url == page.url %}class="active"{% endif %} href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a>
        </li>
        {% endfor %}
    </ul>
</nav>

{% include foot.md %}