---
title: Apps
subtitle: Some apps made by me
type: website
---
<div class="row row-cols-1 row-cols-md-3">
{% for p in site.categories.apps %}
	<div class="col mb-4">
		<div class="card mb-3 text-white bg-dark"> <!--  style="max-width: 540px;" -->
			<a href="{{ site.baseurl }}{{ p.url }}">
				<div class="row no-gutters">
					<div class="col-md-4">
						<img src="/img/{{ p.cover }}" class="card-img" alt="App image">
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<h5 class="card-title">{{ p.title }}</h5>
							<p class="card-text">{{ p.short-desc }}</p>
							<p class="card-text">
								<small class="text-muted" style="color: #aaaaaa;">{{ page.release }} - By {{ p.author }}</small>
							</p>
						</div>
					</div>
				</div>
			</a>
		</div>
	</div>
{% endfor %}
</div>