---
title: Estampas
subtitle: Meow Atelliê
type: website
---
<br>

<div class="row row-cols-1 row-cols-md-3">
{% for e in site.data.estampas %}
	<div class="col mb-4">
		<div class="card" style="width: 18rem;">
			<img src="/img/ju/{{ e.url }}" class="card-img-top" alt="estampa">
			<div class="card-body">
				<h5 class="card-title">{{ e.title }}</h5>
			</div>
		</div>
	</div>
{% endfor %}
</div>