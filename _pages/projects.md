---
layout: page
title: Projects
permalink: /projects/
description: Research code, scientific ML, and systems projects.
nav: true
nav_order: 3
horizontal: false
---

<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}
{% if sorted_projects.size > 0 %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% else %}
  <p>Projects will be added here.</p>
{% endif %}
</div>
