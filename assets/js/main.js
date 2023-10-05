---
---

var map = L.map("map").setView([{{ site.data.location.center | default: '47.79064, 18.95647' }}], {{ site.data.location.zoom | default: 13 }});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

{% if site.data.location.markers %}
{% assign reverse = site.data.location.markers | reverse %}
{% for item in reverse %}
L.marker([{{ item.coord }}])
  .addTo(map)
  .bindPopup("{{ item.text }}")
  .openPopup();
{% endfor %}
{% endif %}