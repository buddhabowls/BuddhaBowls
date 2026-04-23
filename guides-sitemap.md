---
layout: default
title: Guides & Resources Sitemap
permalink: /guides-sitemap/
---

<div class="page-container">
  <article>
    <h2>Guides & Resources Sitemap</h2>
    <p style="text-align: center; color: #666; margin-bottom: 2rem;">Browse all guides, how-tos, DIY recipes, and more</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 2rem;">
      {% for category in site.data.guides.categories %}
        <div style="background: #F0FDFA; padding: 1.5rem; border-radius: 8px; border-left: 4px solid {{ category.color }};">
          <h3 style="color: {{ category.color }}; margin-top: 0;">{{ category.icon }} {{ category.name }}</h3>
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
