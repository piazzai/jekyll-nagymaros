---
---

function rnd() {
  "use strict";
  return Math.floor(Math.random() * 9) + 1;
}

var t = 25, i = 0;

{% for n in (1..3) %}
{% if n == 1 %}
{% assign max = 80 %}
{% assign out = 4 %}
{% elsif n == 2 %}
{% assign max = 90 %}
{% assign out = 0 %}
{% else %}
{% assign max = 100 %}
{% assign out = 4 %}
{% endif %}
var l{{ n }}, s{{ n }} = document.querySelector("#n{{ n }}");

l{{ n }} = setInterval(function () {
  "use strict";
  if (i > {{ max }}) {
    clearInterval(l{{ n }});
    s{{ n }}.textContent = {{ out }};
  } else {
    s{{ n }}.textContent = rnd(); i++;
  }}, t)
{% endfor %}

function showIt() {
    document.getElementById("reveal").style.visibility = "visible";
}

setTimeout("showIt()", 1500);

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
