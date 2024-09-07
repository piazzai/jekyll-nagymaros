---
---

{% assign center = site.data.map.center | default: '47.788542883494856, 18.961139141737842' %}
{% assign zoom = site.data.map.zoom | default: 13 %}

var map = L.map("map").setView([{{ center }}], {{ zoom }});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

{% if site.data.map.markers %}
{% for marker in site.data.map.markers %}
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

{% if site.data.map.polygons %}
{% for polygon in site.data.map.polygons %}
{% assign latlng = polygon.latlng | join: '],[' | prepend: '[' | append: ']' %}
{% assign color = polygon.color | default: '#ff6b6b' %}
{% assign offset = polygon.offset | default: '0, 0' %}
{% assign x = offset | split: ', ' | first %}
{% assign y = offset | split: ', ' | last %}
{% assign content = false %}
{% if polygon.title %}
{% assign content = polygon.title | prepend: '<strong>' | append: '</strong>' %}
{% endif %}
{% for line in polygon.text %}
{% if content %}
{% assign content = content | append: '<br>' | append: line %}
{% else %}
{% assign content = line %}
{% endif %}
{% endfor %}
L.polygon([{{ latlng }}], {color: '{{ color }}'})
    {% if content %}
    .addTo(map)
    .bindTooltip("{{ content }}", {direction: 'center', offset: L.point({x: {{ x }}, y: {{ y }}})});
    {% else %}
    .addTo(map);
    {% endif %}
{% endfor %}
{% endif %}
