//Map initialization


if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function showPosition(position) {
    var mymap = L.map('mapid').setView([position.coords.latitude, position.coords.longitude], 13);
    var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
    marker.bindPopup("Your actual position!").openPopup();

    L.tileLayer('https://api.mapbox.com/styles/v1/ponoyoshi/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'ckdm2fu982ojs1inz2yisetpn',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicG9ub3lvc2hpIiwiYSI6ImNrZG0xdHR1azE0Nnkyem1yaXh6NWYycmMifQ.zN5LQ3gdujetU6WDIT3CMQ'
    }).addTo(mymap);
}