import { latlngs } from "./dataDeads.js";
export const marker = () => {
  var map = L.map("map", {
    center: [2.44497084266567, -76.61667097602667],
    zoom: 13,
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  for (var i = 0; i < latlngs.length; i++) {
    var latlng = latlngs[i];
    L.marker(latlng).addTo(map);
  }
  map.fitBounds(L.latLngBounds([latlngs]));

  //variante sur kilometro 1 +720
  L.circleMarker([2.4381980672540378, -76.6277924907696], {
    className: "leaflet-circleMarker-icon",
    radius: 60,
    color: "red",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4381646,-76.6280119,3a,75y,127.6h,66.82t/data=!3m7!1e1!3m5!1sY5EMUnGANbsgEwakE66P3g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DY5EMUnGANbsgEwakE66P3g%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D127.59839977246124%26pitch%3D23.181502654289716%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);

  //KILOMETRO 0 +600 VARIANTE SUR
  L.circleMarker([2.4329398237362403, -76.62081734765023], {
    className: "leaflet-circleMarker-icon",
    radius: 60,
    color: "red",
    fillColor: "#f03",
  }).addTo(map);

  //KILOMETRO 4+200 CON CRA 48A
  L.circleMarker([2.4591700837365242, -76.63946252034175], {
    className: "leaflet-circleMarker-icon",
    radius: 60,
    color: "red",
    fillColor: "#f03",
  }).addTo(map);

  //KILOMETRO 8 + 700 VARIANTE POPAYAN PARCELACION SAN FRANCISCO
  L.circleMarker([2.479978783190739, -76.60748936690592], {
    className: "leaflet-circleMarker-icon",
    radius: 60,
    color: "red",
    fillColor: "#f03",
  }).addTo(map);

  //CARRERA 9N FRENTE NOMENCLATURA # 65N-40
  L.circleMarker([2.481268794553435, -76.56976688445717], {
    className: "leaflet-circleMarker-icon",
    radius: 60,
    color: "red",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4812438,-76.5692888,3a,75y,140.92h,72.34t/data=!3m7!1e1!3m5!1sSBnkJ9ExJI4ItyMNSFC7Kw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DSBnkJ9ExJI4ItyMNSFC7Kw%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D140.92288006201335%26pitch%3D17.662799841101076%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);

  //KILOMETRO 0
  L.circleMarker([2.4286767983171846, -76.6211551843291], {
    className: "leaflet-circleMarker-icon",
    radius: 60,
    color: "red",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4812438,-76.5692888,3a,75y,140.92h,72.34t/data=!3m7!1e1!3m5!1sSBnkJ9ExJI4ItyMNSFC7Kw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DSBnkJ9ExJI4ItyMNSFC7Kw%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D140.92288006201335%26pitch%3D17.662799841101076%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);

  //CALLE 5 CON 15
  L.circleMarker([2.4441309919463006, -76.61346803971851], {
    className: "leaflet-circleMarker-icon",
    radius: 60,
    color: "red",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4812438,-76.5692888,3a,75y,140.92h,72.34t/data=!3m7!1e1!3m5!1sSBnkJ9ExJI4ItyMNSFC7Kw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DSBnkJ9ExJI4ItyMNSFC7Kw%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D140.92288006201335%26pitch%3D17.662799841101076%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);

  L.circleMarker([2.4664308202558973, -76.58710612783175], {
    className: "leaflet-circleMarker-icon",
    radius: 60,
    color: "red",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4812438,-76.5692888,3a,75y,140.92h,72.34t/data=!3m7!1e1!3m5!1sSBnkJ9ExJI4ItyMNSFC7Kw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DSBnkJ9ExJI4ItyMNSFC7Kw%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D140.92288006201335%26pitch%3D17.662799841101076%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);

  L.circleMarker([2.494852192703368, -76.562247819502691], {
    className: "leaflet-circleMarker-icon",
    radius: 60,
    color: "red",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4812438,-76.5692888,3a,75y,140.92h,72.34t/data=!3m7!1e1!3m5!1sSBnkJ9ExJI4ItyMNSFC7Kw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DSBnkJ9ExJI4ItyMNSFC7Kw%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D140.92288006201335%26pitch%3D17.662799841101076%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);
};
