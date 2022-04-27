/**
 * Create google maps Map instance.
 * @param {number} lat
 * @param {number} lng
 * @return {Object}
 */
const createMap = ({ lat, lng }) => {
  return new google.maps.Map(document.getElementById("map"), {
    center: { lat, lng },
    zoom: 18,
    mapTypeId: 'roadmap'

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
/*
const icon = {
    url: "../assets/userlocation.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};
*/
const markerSize = 30;
const imgSize = 100;
const points = [
  {
    name: "20C1",
    latitude: 42.459196,
    longitude: -71.355369,
    text: "Welcome to Haines House! It was here that the Concord Academy that we know today got its start in 1922...",//no more than 344 chars preferably
    image: "assets/20C1_haines.png",
    visitedBool: false,
  },
  {
    name: "20C2",
    latitude: 42.460114,
    longitude: -71.355781,
    text: "The Chapel is the heart of today’s CA. Nevertheless, it arrived at the school in a rather serendipitous manner. The story starts with the infamous 1942 Cocoanut Grove fire in Boston which claimed the lives of nearly 500 people...",
    image: "assets/20C2_chapel.jpg",
    visitedBool: false,
  },
  {
    name: "20C3",
    latitude: 42.460438,
    longitude: -71.355981,
    text: "An iconic part of the chapel is this carved inscription: Paul's first letter to the Corinthians. This passage was traditionally read on the opening days of school...",
    image: "assets/20C3_podium.jpeg",
    visitedBool: false
  },
  {
    name: "20C4",
    latitude: 42.460285,
    longitude: -71.355225,
    text: "Mrs. Hall's changes to CA campus were not limited to building the Chapel. During her tenure, the Stufac was also transformed...",
    image: "assets/20C4_stu.JPG",
    visitedBool: false
  }, 
  {
    name: "20C5",
    latitude: 42.459935,
    longitude: -71.354766,
    text: "As it reached its fiftieth year, CA faced an existential crisis. If things had gone differently, it's entirely possible that the school would not exist today, that the houses along Main Street would be just that, residential houses, and it would have looked as though CA was never here...",
    image: "assets/20C5_lib.JPG",
    visitedBool: false
  },
  {
    name: "20C6",
    latitude: 42.460177,
    longitude: -71.353903,
    text: "Along with co-education, CA experienced some of the social revolution that was rocking the world. Before becoming co-educational, CA had accepted its first students of color in 1963... ",
    image: "assets/20C6_shac.jpg",
    visitedBool: false
  },
  {
    name: "20C7",
    latitude: 42.459497,
    longitude: -71.353718,
    text: " This is the site of one of the two original senior houses, one of the first, but failed attempts, at developing co-educational residences at Concord Academy. Ben Stumpf, now the computer science teacher at CA, lived in this Senior house while he was a student here...",
    image: "assets/20C7_badford.jpg",
    visitedBool: false
  },
 /* {
    name: "20C8",
    latitude: 42.459447,
    longitude: -71.354815,
    text: "This point is in some schrodinger state regarding what it's talking about(work in progress).",
    image: "assets/20c1_test.png",
    "visitedBool": false
  },
  {
    name: "20C9",
    latitude: 42.459499,
    longitude: -71.356065,
    text: "This point gives a recap of this tour.",
    image: "assets/20c1_test.png",
    visitedBool: false
  }*/

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
    icon: {
      url: "../assets/YOUAREHERESTAR.png", // url
      scaledSize: new google.maps.Size(markerSize, markerSize), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point((markerSize/2),(markerSize/2)) // anchor
    }
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
  //console.log(points[0].name);

  for (i = 0; i < points.length; i++) {
    marker_temp = new google.maps.Marker({
      position: new google.maps.LatLng(points[i].latitude, points[i].longitude),
      map: map,
      icon: {
              url: "../assets/newOrangePoint.png", // url
              scaledSize: new google.maps.Size(markerSize, markerSize), // scaled size
              origin: new google.maps.Point(0,0), // origin
              anchor: new google.maps.Point((markerSize/2), markerSize) // anchor
            },
    });
    google.maps.event.addListener(marker_temp, "click", (function (marker_temp, i) {
        return function () {
          //infowindow.setContent(points[i].name);
          var infoWindowNode = document.createElement('div');            
          var node        = document.createElement('div');
          var image = document.createElement('img');
          var textNode = document.createElement('h3');
          var map = document.createElement('map');
          textNode.innerHTML = points[i].name;
          node.innerHTML = points[i].text;
          image.setAttribute("src","../" + points[i].image);
          image.setAttribute("style","width:"+imgSize+"px;height:"+imgSize+"px;margin-left: auto;margin-right: auto;display: block;");
          map.setAttribute("name","map"+i);
          var area = document.createElement('area');
          area.setAttribute("shape","rect");
          area.setAttribute("coords","0,0"+imgSize+","+imgSize);
          area.setAttribute("href","../points/Early1.html");
          map.appendChild(area);
          image.setAttribute("usemap","#map"+i);
          infoWindowNode.appendChild(textNode);
          infoWindowNode.appendChild(image);
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
      //map.panTo({ lat, lng });
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

  const tourCoordinates = [
    {
      lat: 42.459196,
      lng: -71.355369,
      
    },
    
    {
      lat:42.459527,  //point in road to chapel
      lng: -71.355289,

    },
    {
      lat: 42.460053, //point in road to chapel 2
      lng: -71.355501,
    },
    {
     
      lat: 42.460114,
      lng: -71.355781,
      
    },
    {
      
      lat: 42.460438,
      lng: -71.355981,
      
    },
    {
      lat: 42.460285,
      lng: -71.355225,
      
    }, 
    {
      lat: 42.459935,
      lng: -71.354766,
      
    },
    {
      lat: 42.460177,
      lng: -71.353903,
      
    },
    {
      lat: 42.460011, 
      lng: -71.353748,     //point in road to bradford


    },
    {
      lat: 42.459815, 
      lng: -71.354051    //point in road to bradford 2


    },


    {
      lat: 42.459497,
      lng: -71.353718,
      
    },/*
    {
      lat:42.459565, 
      lng:-71.354002,
    },
    {
      lat:42.459565, 
      lng:-71.354002,
    },
    
    
    
    
    {
      lat: 42.459447,
      lng: -71.354815,
      
    },
    {
      lat: 42.459499,
      lng: -71.356065,
      
    }*/
  
  ];

  

  const tourPath = new google.maps.Polyline({
    path: tourCoordinates,
    geodesic: true,
    strokeColor: "#FFBB00",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  tourPath.setMap(map);
  


}
