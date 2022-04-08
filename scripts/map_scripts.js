/**
 * Create google maps Map instance.
 * @param {number} lat
 * @param {number} lng
 * @return {Object}
 */
const createMap = ({ lat, lng }) => {
  return new google.maps.Map(document.getElementById("map"), {
    center: { lat, lng },
    zoom: 19,
  });
};

/**
 * Create google maps Marker instance.
 * @param {Object} map
 * @param {Object} position
 * @return {Object}
 */
const createMarker = ({ map, position }) => {
  return new google.maps.Marker({ map, position});
};

/**
 * Track the user location.
 * @param {Object} onSuccess
 * @param {Object} [onError]
 * @return {number}
 */
const trackLocation = ({ onSuccess, onError = () => {} }) => {
  if ("geolocation" in navigator === false) {
    return onError(new Error("Geolocation is not supported by your browser."));
  }

  return navigator.geolocation.watchPosition(onSuccess, onError, {
    enableHighAccuracy: true,
    timeout: 100,
    maximumAge: 0,
  });
};

/**
 * Get position error message from the given error code.
 * @param {number} code
 * @return {String}
 */
const getPositionErrorMessage = (code) => {
  switch (code) {
    case 1:
      return "Permission denied.";
    case 2:
      return "Position unavailable.";
    case 3:
      return "Timeout reached.";
  }
};

const points = [
  {
    name: "20C1",
    latitude: 42.459196,
    longitude: -71.355369,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in ullamcorper nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in ullamcorper nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in ullamcorper nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in ullamcorper nunc. ",
    image: "assets/20c1_test.png",
    visitedBool: false,
  },
  {
    name: "20C2",
    latitude: 42.460114,
    longitude: -71.355781,
    text: "Chapel do be a good chapel.",
    image: "assets/20c1_test.png",
    visitedBool: false,
  },
  {
    name: "20C3",
    latitude: 42.460438,
    longitude: -71.355981,
    text: "script",
    image: "assets/20c1_test.png",
    visitedBool: false
  },
  {
    name: "20C4",
    latitude: 42.460285,
    longitude: -71.355225,
    text: "script",
    image: "assets/20c1_test.png",
    visitedBool: false
  }, 
  {
    name: "20C5",
    latitude: 42.459935,
    longitude: -71.354766,
    text: "script",
    image: "assets/20c1_test.png",
    visitedBool: false
  },
  {
    name: "20C6",
    latitude: 42.460177,
    longitude: -71.353903,
    text: "script",
    image: "assets/20c1_test.png",
    visitedBool: false
  },
  {
    name: "20C7",
    latitude: 42.459497,
    longitude: -71.353718,
    text: "script",
    image: "assets/20c1_test.png",
    visitedBool: false
  },
  {
    name: "20C8",
    latitude: 42.459447,
    longitude: -71.354815,
    text: "script",
    image: "assets/20c1_test.png",
    "visitedBool": false
  },
  {
    name: "20C9",
    latitude: 42.459499,
    longitude: -71.356065,
    text: "script",
    image: "assets/20c1_test.png",
    visitedBool: false
  }

];

/**
 * Initialize the application.
 * Automatically called by the google maps API once it's loaded.
 */
function init() {
  const initialPosition = { lat: 42.45965, lng: -71.35513 };
  const map = createMap(initialPosition);
  const marker_user = new google.maps.Marker({
    position: initialPosition,
    map: map,
    icon: "../assets/YOUAREHERESTAR.png",
  });



  //const marker_user = createMarker({ map, position: initialPosition, fillColor: "blue"});
  const contentString ="";
    /*'<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<p><center><h1 id="firstHeading" class="firstHeading">Amol shah</h1></center></p>' +
    '<p><center><h3>12324 - TM</h3></center></p>' +
    '<div id="bodyContent">' +
    '<p><center><b>Reporting : </b></center>' +
    '<center><b>ABM</b>: Jignesh Mehta </center>' +
    '<center><b>RBM</b>: Sunil boricha </center>' +
    '<center><b>ZM</b>: sachin pawar </center> </p>' +
    '<p><center><b>KPI : </b></center>' +
    '</div>' +
    '</div>';*/
  var infoWindow = new google.maps.InfoWindow();
  
  var marker_temp, i;
  console.log(points[0].name);

  for (i = 0; i < points.length; i++) {
    marker_temp = new google.maps.Marker({
      position: new google.maps.LatLng(points[i].latitude, points[i].longitude),
      map: map,
    });
    google.maps.event.addListener(marker_temp, "click", (function (marker_temp, i) {
        return function () {
          //infowindow.setContent(points[i].name);
          var infoWindowNode = document.createElement('div');            
          var node        = document.createElement('div');
          var textNode = document.createElement('h3');
          textNode.innerHTML = points[i].name;
          node.innerHTML = points[i].text;
          infoWindowNode.appendChild(textNode);
          infoWindowNode.appendChild(node);
          infoWindow.setContent(infoWindowNode);




          
          infoWindow.open(map, marker_temp);
        };
      })(marker_temp, i)
    );

  }


  const $info = document.getElementById("info");

  let watchId = trackLocation({
    onSuccess: ({ coords: { latitude: lat, longitude: lng } }) => {
      marker_user.setPosition({ lat, lng });
      map.panTo({ lat, lng });
      $info.textContent = `Lat: ${lat.toFixed(5)} Lng: ${lng.toFixed(5)}`;
      $info.classList.remove("error");
    },
    onError: (err) => {
      console.log($info);
      $info.textContent = `Error: ${
        err.message || getPositionErrorMessage(err.code)
      }`;
      $info.classList.add("error");
    },
  });
}
