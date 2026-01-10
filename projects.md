---
layout: default
title: Projets
permalink: /projects/
---

<p>Nombre de projets détectés : {{ site.projects | size }}</p>

<section class="projects-feed">
  {% for project in site.projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</section>