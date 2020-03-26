---
title: Books
---
{% include head.md %}

<nav class="nav-primary" role="navigation" >
    <ul>
        {% for p in site.posts %}
        <li>
        	<a {% if p.url == page.url %}class="active"{% endif %} href="{{ site.baseurl }}{{ p.url }}">{{ p.title }} - {{ p.author}}</a>
        </li>
        {% endfor %}
    </ul>
</nav>

{% include foot.md %}