---
---

{% assign center = site.data.locations.center | default: '47.788542883494856, 18.961139141737842' %}
{% assign zoom = site.data.locations.zoom | default: 13 %}

var map = L.map("map").setView([{{ center }}], {{ zoom }});

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

{% if site.data.locations.areas %}
{% for area in site.data.locations.areas %}
{% assign latlng = area.latlng | join: '],[' | prepend: '[' | append: ']' %}
{% assign color = area.color | default: '#ff6b6b' %}
{% assign offset = area.offset | default: '0, 0' %}
{% assign x = offset | split: ', ' | first %}
{% assign y = offset | split: ', ' | last %}
{% assign content = false %}
{% if area.title %}
{% assign content = area.title | prepend: '<strong>' | append: '</strong>' %}
{% endif %}
{% for line in area.text %}
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
