---
title: Projects
subtitle: My Github projects
type: website
---
<br>

<div class="card-columns">
{% for p in site.github.public_repositories %}
	<div class="card mb-3 text-white bg-dark h-100"> <!--  style="max-width: 540px;" -->
		<div class="row no-gutters">
			<div class="card-body">
				<h5 class="card-title">{{ p.name }}</h5>
				<h6 class="card-subtitle mb-2 text-muted">{{ p.language }}</h6>
				<p class="card-text">{{ p.description }}</p>
				<p class="card-text">
					<small class="text-muted" style="color: #aaaaaa;">Since: {{ p.created_at }}</small><br>
					<small class="text-muted" style="color: #aaaaaa;">Last update: {{ p.updated_at }}</small>
				</p>
				<a href="{{ p.html_url }}" class="btn btn-secondary">Repository</a>
				<a href="{{ p.clone_url }}" class="btn btn-secondary">Clone</a>
			</div>
		</div>
	</div>
{% endfor %}
</div>