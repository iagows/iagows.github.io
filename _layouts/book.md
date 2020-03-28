---
layout: default
---
<img src="/img/livros/{{ page.cover }}" alt="capa do livro" width="500px" />

{{ content }}

## Info:

{% if page.release %} Release: {{ page.release }}{% endif %}

{% if page.pages %} Pages: {{ page.pages }}{% endif %}

{% if page.isbn %} ISBN: {{ page.isbn }}{% endif %}

{% if page.email %} [e-mail]({{ page.email }}){% endif %}

{% if page.skoob %} [Skoob]({{ page.skoob }}){% endif %}

{% if page.amazon %} [Amazon]({{ page.amazon }}){% endif %}

{% if page.clubeautores %} [Clube de Autores]({{ page.clubeautores }}){% endif %}

{% if page.saraiva %} [Saraiva]({{ page.saraiva }}){% endif %}

{% if page.cialivros %} [Cia dos Livros]({{ page.cialivros }}){% endif %}

{% if page.editora-multifoco %} [Editora Multifoco]({{ page.editora-multifoco }}){% endif %}