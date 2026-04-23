---
layout: default
title: Guides & Resources Sitemap
permalink: /guides-sitemap/
---

<div class="page-container">
  <article>
    <h2>Guides & Resources Sitemap</h2>
    
    <!-- Debug: Check if data loads -->
    <p>Total categories: {{ site.data.guides.categories | size }}</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 2rem;">
      {% for category in site.data.guides.categories %}
        <div style="background: #F0FDFA; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #0D9488;">
          <h3 style="color: #0D9488; margin-top: 0;">{{ category.icon }} {{ category.name }}</h3>
          <p>Guides in this category: {{ category.guides | size }}</p>
          <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.95rem;">
            {% for guide in category.guides %}
              <li style="margin-bottom: 0.5rem;">
                <a href="{{ site.baseurl }}{{ guide.url }}">{{ guide.title }}</a>
              </li>
            {% endfor %}
          </ul>
        </div>
      {% endfor %}
    </div>
  </article>
</div>
