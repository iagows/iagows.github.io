---
title: Projects
subtitle: My Github projects
type: website
---
<br>

{% for p in site.github.public_repositories %}
<p>Nome: {{ p.name }}</p>
<p>HTML url: {{ p.html_url }}</p>
<p>Description: {{ p.description }}</p>
<p>Created: {{ p.created_at }}</p>
<p>Updated: {{ p.updated_at }}</p>
<p>Clone: {{ p.clone_url }}</p>
<p>Language: {{ p.language }}</p>
<hr>
{% endfor %}