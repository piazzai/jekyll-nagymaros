---
---

var map = L.map("map").setView([{{ site.data.locations.center | default: '47.79064, 18.95647' }}], {{ site.data.locations.zoom | default: 13 }});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

{% if site.data.locations.markers %}
{% for marker in site.data.locations.markers %}
{% assign content = false %}
{% if marker.title %}
{% assign content = marker.title | prepend: '<strong>' | append: '</strong>' %}
{% endif %}
{% for line in marker.text %}
{% if content %}
{% assign content = content | append: '<br>' | append: line %}
{% else %}
{% assign content = line %}
{% endif %}
{% endfor %}
L.marker([{{ marker.latlng }}])
    {% if content %}
    .addTo(map)
    .bindTooltip("{{ content }}");
    {% else %}
    .addTo(map);
    {% endif %}
{% endfor %}
{% endif %}
