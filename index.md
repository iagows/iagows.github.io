---
title: Home
subtitle: Iagows' Site
tags: [books, projects, tutorial]
layout: default
---
# INTRO

some text here

## News

<div class="container">
	<div class="row">
{% for p in site.categories.news %}
		<div class="col-sm-6 col-lg-3 py-2">
			<div class="card h-100 border-dark mb-3" style="max-width: 18rem;">
				<div class="card-header">{{ p.title }}</div>
				<div class="card-body text-dark">
					<h5 class="card-title">{{ p.author }}</h5>
					<p class="card-text">{{ p.content }}</p>
				</div>
				<div class="card-footer bg-transparent border-dark"><small class="text-muted">{{ p.date | date: "%d/%m/%Y" }}</small></div>
			</div>
		</div>
{% endfor %}
	</div>
</div>