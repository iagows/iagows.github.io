---
title: Projects
subtitle: My Github projects
type: website
---
<br>

<div class="card-columns">
{% for p in site.github.public_repositories %}
	<div class="card mb-3 text-white bg-dark h-100"> <!--  style="max-width: 540px;" -->
	<a href="{{ p.html_url }}" class="text-reset stretched-link text-decoration-none">
		<div class="row no-gutters">
			<div class="card-body">
				<h5 class="card-title">{{ p.name }}</h5>
				<h6 class="card-subtitle mb-2 text-muted">{{ p.language }}</h6>
				<p class="card-text">{{ p.description }}</p>
				<p class="card-text">
					<small class="text-muted" style="color: #aaaaaa;">Since: {{ p.created_at }} - Last update: {{ p.updated_at }}</small>
				</p>
				<a href="p.clone_url" class="btn btn-primary">Clone</a>
			</div>
		</div>
	</a>
</div>
{% endfor %}
</div>