---
layout: default
title: Projets
permalink: ./projects/
---

<section class="projects-feed">
  {% for project in site.projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</section>