


var map = L.map("map").setView([47.788542883494856, 18.961139141737842], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);






L.marker([47.789169035641905, 18.961446798474288])
    
    .addTo(map)
    .bindTooltip("<strong>This is a tooltip</strong><br>It is easily customizable with title and text");
    




L.marker([47.78691841448565, 18.967277537789023])
    
    .addTo(map)
    .bindTooltip("<strong>This is a tooltip with no text</strong>");
    













L.polygon([[47.81025552661079, 19.02201563177881],[47.80993848992647, 19.024740756084967],[47.812863800415236, 19.026607573523037],[47.811667757419514, 19.038366377615738],[47.804750341957295, 19.035233557547244],[47.80770476752536, 19.021672309031583]], {color: '#ff6b6b'})
    
    .addTo(map)
    .bindTooltip("This is a tooltip with no title...<br>...and with multiple lines of text", {direction: 'center', offset: L.point({x: 0, y: 0})});
    


