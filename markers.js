import { dataMuertos } from "./dataDeads2024.js";
import { dataHeridos } from "./dataHeridos2024.js";
export const marker = () => {
  var map = L.map("map", {
    center: [2.44497084266567, -76.61667097602667],
    zoom: 13,
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  document.addEventListener("DOMContentLoaded", function () {
    const miCheckbox = document.querySelector("#heridos");
    miCheckbox.addEventListener("change", function () {
      if (miCheckbox.checked) {
        heridos();
      } else {
        removerHeridos();
      }
    });
  });

  muertos();

  function muertos() {
    for (var i = 0; i < dataMuertos.length; i++) {
      var latlng = dataMuertos[i];
      L.marker(latlng, {
        icon: L.icon({
          iconUrl: "./location.png",
          iconSize: [30, 42],
          shadowUrl: "./location.png",
          shadowSize: [30, 42],
        }),
      }).addTo(map);
    }

    map.fitBounds(L.latLngBounds([dataMuertos]));

    //variante sur kilometro 1 +720
    L.circleMarker([2.4381980672540378, -76.6277924907696], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "red",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4381122,-76.6273547,3a,75y,70.55h,80t/data=!3m7!1e1!3m5!1shXvCJnjKJ6vEVAtpJ2cKKQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DhXvCJnjKJ6vEVAtpJ2cKKQ%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D70.54695271489656%26pitch%3D10.001534661096372%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    //KILOMETRO 0 +600 VARIANTE SUR
    L.circleMarker([2.4329398237362403, -76.62081734765023], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "red",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4332845,-76.6208777,3a,75y,155.64h,79.56t/data=!3m7!1e1!3m5!1sQ-DLBFf1O0A1uVejQtWG2A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DQ-DLBFf1O0A1uVejQtWG2A%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D155.63905232232767%26pitch%3D10.440966380026637%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    //KILOMETRO 4+200 CON CRA 48A
    L.circleMarker([2.4591700837365242, -76.63946252034175], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "red",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4594642,-76.6390574,3a,75y,208.07h,69.09t/data=!3m7!1e1!3m5!1sMwpgMquCAl3xq7IFWJG2vw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DMwpgMquCAl3xq7IFWJG2vw%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D208.06647143823858%26pitch%3D20.91452222297859%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    //KILOMETRO 8 + 700 VARIANTE POPAYAN PARCELACION SAN FRANCISCO
    L.circleMarker([2.479978783190739, -76.60748936690592], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "red",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4793394,-76.6083582,3a,75y,54.92h,69.48t/data=!3m7!1e1!3m5!1sJAeXFBwkuVtp2cF2q51Y4A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DJAeXFBwkuVtp2cF2q51Y4A%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D54.91637510027505%26pitch%3D20.523620655034975%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    //CARRERA 9N FRENTE NOMENCLATURA # 65N-40
    L.circleMarker([2.481268794553435, -76.56976688445717], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
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
      radius: 24,
      color: "red",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4292798,-76.6210918,3a,75y,43.93h,72.6t/data=!3m7!1e1!3m5!1soMUeLS65NfO-6YE1oYy6cg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DoMUeLS65NfO-6YE1oYy6cg%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D43.93416389725454%26pitch%3D17.39652913607813%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    //CALLE 5 CON 15
    L.circleMarker([2.4441309919463006, -76.61346803971851], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "red",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.444208,-76.6135447,3a,75y,112.47h,73.12t/data=!3m7!1e1!3m5!1sltRbKobw_RyoiuhVS1U2Pg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DltRbKobw_RyoiuhVS1U2Pg%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D112.46560496578985%26pitch%3D16.88165761274682%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    //CARRERA 9 CON CALLE 35 NORTE
    L.circleMarker([2.4664308202558973, -76.58710612783175], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "red",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4664673,-76.5870022,3a,75y,236.3h,73.37t/data=!3m7!1e1!3m5!1st0jdjtgD6zscoHjvjd3nvA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dt0jdjtgD6zscoHjvjd3nvA%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D236.30441043749298%26pitch%3D16.630986867224266%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    L.circleMarker([2.494852192703368, -76.562247819502691], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "red",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4946172,-76.5616253,3a,75y,268.82h,75.93t/data=!3m7!1e1!3m5!1sVNNr8uhbAq1XUWYyI-sNLg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DVNNr8uhbAq1XUWYyI-sNLg%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D268.81856317018594%26pitch%3D14.067650195701844%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    L.circleMarker([2.481708, -76.5877674], {
      className: "leaflet-circleMarker-icon",
      radius: 25,
      color: "red",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.481708,-76.5877674,3a,75y,15.87h,73.62t/data=!3m7!1e1!3m5!1s0zrrBKEUK-FBxOvx7y94_w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D0zrrBKEUK-FBxOvx7y94_w%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D15.868569218213002%26pitch%3D16.377533038266776%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    L.circleMarker([2.451447151954864, -76.59912092927961], {
      className: "leaflet-circleMarker-icon",
      radius: 25,
      color: "red",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4515311,-76.5991868,3a,75y,79.73h,90.11t/data=!3m7!1e1!3m5!1s9TKxfOHmVup5Ky8X__adZA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.11468682996510893%26panoid%3D9TKxfOHmVup5Ky8X__adZA%26yaw%3D79.7314073679068!7i13312!8i6656?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D";
      })
      .addTo(map);

      L.circleMarker([2.4515478226234566, -76.60541913270515], {
        className: "leaflet-circleMarker-icon",
        radius: 24,
        color: "red",
        fillColor: "#f03",
      })
        .on("click", () => {
          window.location.href =
            "https://www.google.com/maps/@2.4515063,-76.6055251,3a,75y,45.94h,91.07t/data=!3m7!1e1!3m5!1shG_Rm0kAW7IcBciAgeTzEw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-1.0704221462605545%26panoid%3DhG_Rm0kAW7IcBciAgeTzEw%26yaw%3D45.94164538484794!7i13312!8i6656?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D";
        })
        .addTo(map);
  }

  function heridos() {
    for (var i = 0; i < dataHeridos.length; i++) {
      var latlng = dataHeridos[i];
      L.marker(latlng).addTo(map).bindPopup(`dataa ${latlng}`).openPopup();
    }

    //HERIDOS
    L.circleMarker([2.481388889, -76.57416667], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "blue",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4813319,-76.5742647,3a,75y,236.03h,82.7t/data=!3m7!1e1!3m5!1s7CdJ5Vu7xBPX6TuFRy5mBg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D7CdJ5Vu7xBPX6TuFRy5mBg%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D236.03249117185618%26pitch%3D7.296091938462595%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    L.circleMarker([2.441944444, -76.60861111], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "blue",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4421751,-76.608679,3a,90y,77.69h,72.36t/data=!3m7!1e1!3m5!1soqmo6h0I616qBtRV_VipEw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Doqmo6h0I616qBtRV_VipEw%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D77.68923509500516%26pitch%3D17.640228808782652%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    L.circleMarker([2.494722222, -76.57527778], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "blue",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4952516,-76.574868,3a,75y,238.02h,79.63t/data=!3m7!1e1!3m5!1sQUbRoR9X6SGoRviwC3c55Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DQUbRoR9X6SGoRviwC3c55Q%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D238.0151633868253%26pitch%3D10.372894396825131%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    L.circleMarker([2.479166667, -76.59055556], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "blue",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4793136,-76.5905314,3a,75y,263.96h,81.29t/data=!3m7!1e1!3m5!1sO9dkK88-tbNxz4Dn0u1rlw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DO9dkK88-tbNxz4Dn0u1rlw%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D263.9571993308959%26pitch%3D8.71352208349333%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    L.circleMarker([2.438055556, -76.62916667], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "blue",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4382786,-76.6290994,3a,75y,88.46h,78.09t/data=!3m7!1e1!3m5!1sbVh5CAmMD2a14whGvW5e8Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DbVh5CAmMD2a14whGvW5e8Q%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D88.46379742330922%26pitch%3D11.912691347156084%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    L.circleMarker([2.475, -76.57972222], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "blue",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4750613,-76.5799628,3a,90y,40.86h,71.73t/data=!3m7!1e1!3m5!1snK2k0mqi_qhJkzSAbU7Gbw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DnK2k0mqi_qhJkzSAbU7Gbw%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D40.86354083120442%26pitch%3D18.267613857652606%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    L.circleMarker([2.492672471974319, -76.58010759863058], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "blue",
      fillColor: "#f03",
    }).on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4927179,-76.5800808,3a,75y,245.89h,88.99t/data=!3m7!1e1!3m5!1s9MAVmjF4_dEufJELjXGd5g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D9MAVmjF4_dEufJELjXGd5g%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D245.89334770443642%26pitch%3D1.0132803951416633%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    });

    L.circleMarker([2.492672471974319, -76.58010759863058], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "blue",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4927179,-76.5800808,3a,75y,245.89h,88.99t/data=!3m7!1e1!3m5!1s9MAVmjF4_dEufJELjXGd5g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D9MAVmjF4_dEufJELjXGd5g%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D245.89334770443642%26pitch%3D1.0132803951416633%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    L.circleMarker([2.4422782789902295, -76.60893859325604], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "blue",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4422046,-76.6087646,3a,75y,110.78h,77.15t/data=!3m7!1e1!3m5!1sbuWNPveZWQbPi_IRZsziag!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DbuWNPveZWQbPi_IRZsziag%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D110.78210772541524%26pitch%3D12.85464300879707%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);

    L.circleMarker([2.449888411906566, -76.63678368265776], {
      className: "leaflet-circleMarker-icon",
      radius: 24,
      color: "blue",
      fillColor: "#f03",
    })
      .on("click", () => {
        window.location.href =
          "https://www.google.com/maps/@2.4422046,-76.6087646,3a,75y,110.78h,77.15t/data=!3m7!1e1!3m5!1sbuWNPveZWQbPi_IRZsziag!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DbuWNPveZWQbPi_IRZsziag%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D110.78210772541524%26pitch%3D12.85464300879707%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
      })
      .addTo(map);
  }

  function removerHeridos() {
    map.eachLayer(function (layer) {
      if (
        layer instanceof L.Marker &&
        layer.getPopup() &&
        layer.getPopup().getContent().includes("dataa")
      ) {
        map.removeLayer(layer);
      }
    });
  }
};
