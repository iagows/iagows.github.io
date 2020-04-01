---
title: Projects
subtitle: My Github projects
type: website
---
<br>

<div class="card-columns">
{% for p in site.github.public_repositories %}
	* {{ p }}
	
{% endfor %}
</div>