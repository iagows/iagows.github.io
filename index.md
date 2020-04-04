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
	<div class="card-columns">
		{% for p in site.categories.news limit:10 %}
		<div class="card h-100 border-dark mb-3" style="max-width: 18rem;">
			<div class="card-header">{{ p.title }}</div>
			<div class="card-body text-dark">
				<p class="card-text">{{ p.content }}</p>
				<p class="card-text"><small class="text-muted">{{ p.author }} - {{ p.date | date: "%d/%m/%Y" }}</small></p>
			</div>
		</div>
		{% endfor %}
	</div>
</div>