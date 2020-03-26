---
title: Home
tags: [books, projects, tutorial]
---
{% include head.md %}

{% for pagedata in site.data.pages %}<a href="{{ pagedata.url }}"><img src="img/{{ pagedata.img }}"/>{{ pagedata.title }}</a>{% endfor%}

___

## News

### Date xx-xx-xxxx

### By lol

Bla bla bla

___

Paginator: {{ paginator }} - total pages: {{ paginator.total_pages }}

{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}">&laquo; Prev</a>
  {% else %}
    <span>&laquo; Prev</span>
  {% endif %}

  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <em>{{ page }}</em>
    {% elsif page == 1 %}
      <a href="{{ paginator.previous_page_path | relative_url }}">{{ page }}</a>
    {% else %}
      <a href="{{ site.paginate_path | relative_url | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}">Next &raquo;</a>
  {% else %}
    <span>Next &raquo;</span>
  {% endif %}
</div>
{% endif %}

{% include foot.md %}