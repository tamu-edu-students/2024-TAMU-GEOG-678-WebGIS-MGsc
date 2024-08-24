function main() {
    var mymap = L.map('mapid').setView([30.61313, -96.34467], 13);
    L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);
    var marker = L.marker([30.61699, -96.33629]).addTo(mymap);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
    getStuff();
}

