---
title: Books
---
<nav class="nav-primary" role="navigation" >
    <ul>
        {% for p in site.categories.books %}
        <li>
        	<a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }} - {{ p.author}}</a>
        </li>
        {% endfor %}
    </ul>
</nav>