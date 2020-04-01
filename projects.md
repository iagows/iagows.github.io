---
title: Projects
subtitle: My Github projects
type: website
---
<br>

{% for p in site.github.public_repositories %}
	* {{ p }}
	<br>
	<hr>
	<br>
{% endfor %}