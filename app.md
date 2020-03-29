---
title: Apps
subtitle: Some apps made by me
---
<nav class="nav-primary" role="navigation" >
    <ul>
        {% for p in site.categories.apps %}
        <li>
			<a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }} - {{ p.author}}</a>
        </li>
        {% endfor %}
    </ul>
</nav>