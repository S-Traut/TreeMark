var tmap;
var geolocationActive;

if ('geolocation' in navigator) {
    geolocationActive = true;
    navigator.geolocation.getCurrentPosition(setup);
} else {
    geolocationActive = false;
    console.log("Geolocation is not supported by this browser.");
}

function setup(position) {
    tmap = L.map('mapid').setView([position.coords.latitude, position.coords.longitude], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/ponoyoshi/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'ckdm2fu982ojs1inz2yisetpn',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicG9ub3lvc2hpIiwiYSI6ImNrZG0xdHR1azE0Nnkyem1yaXh6NWYycmMifQ.zN5LQ3gdujetU6WDIT3CMQ'
    }).addTo(tmap);

    addMarker(position);
}

function addMarker(position) {
    var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(tmap);
    marker.bindPopup("Your actual position!").openPopup();
};

var button = document.getElementById("ButtonPlus");
button.onclick = function() {
    if (geolocationActive) {
        var position = navigator.geolocation.getCurrentPosition(addMarker);
    } else {
        console.log("Geolocation not activated!")
    }

};