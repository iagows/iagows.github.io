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
			<div class="col-md-4">
				<img src="/img/{{ p.cover }}" class="card-img" alt="App image"><!-- colocar símbolo do github -->
			</div>
			<div class="col-md-8">
				<div class="card-body">
					<h5 class="card-title">{{ p.name }}</h5>
					<p class="card-text">{{ p.description }}</p>
					<p class="card-text">Clone: {{ p.clone_url }}</p>
					<p class="card-text">Language: {{ p.language }}</p>
					<p class="card-text">
						<small class="text-muted" style="color: #aaaaaa;">Since: {{ p.created_at }} - Last update: {{ p.updated_at }}</small>
					</p>
				</div>
			</div>
		</div>
	</a>
</div>
{% endfor %}
</div>