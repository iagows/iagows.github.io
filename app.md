---
title: Apps
---
{% include head.md %}

<nav class="nav-primary" role="navigation" >
    <ul>
        {% for p in site.categories.apps %}
        <li>
			<a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }} - {{ p.author}}</a>
        </li>
        {% endfor %}
    </ul>
</nav>

{% include foot.md %}