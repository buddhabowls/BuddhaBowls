---
layout: default
title: Debug
permalink: /debug/
---

<h1>Debug Info</h1>

<p><strong>site.data exists:</strong> {% if site.data %}YES{% else %}NO{% endif %}</p>

<p><strong>site.data.guides exists:</strong> {% if site.data.guides %}YES{% else %}NO{% endif %}</p>

<p><strong>All data keys:</strong></p>
<ul>
  {% for item in site.data %}
    <li>{{ item[0] }}</li>
  {% endfor %}
</ul>

<p><strong>Guides data:</strong></p>
<pre>{{ site.data.guides | jsonify }}</pre>
