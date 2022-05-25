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
    name: "Early1",
    latitude: "42.460220",
    longitude: "-71.356202",
    text: "",
    image: "",
    visitedBool: false,
  },
  {
    name: "Early2",
    latitude: "42.460815",
    longitude: "-71.356599",
    text: "",
    image: "",
    visitedBool: false,
  },
  {
    name: "Early3",
    latitude: "42.460462",
    longitude: "-71.356939",
    text: "",
    image: "",
    visitedBool: false,
  },
  {
    name: "Early4",
    latitude: "42.46035447",
    longitude: "-71.35558412",
    text: "",
    image: "",
    visitedBool: false,
  },
  {
    name: "Early5",
    latitude: "42.46007839",
    longitude: "-71.35454059",
    text: "",
    image: "",
    visitedBool: false,
  },
  {
    name: "Early6",
    latitude: "42.46009257",
    longitude: "-71.35466274",
    text: "",
    image: "",
    visitedBool: false,
  },
  {
    name: "Early7",
    latitude: "42.45992578",
    longitude: "-71.35466831",
    text: "",
    image: "",
    visitedBool: false,
  },
  {
    name: "Early8",
    latitude: "42.459806",
    longitude: "-71.354937",
    text: "",
    image: "",
    visitedBool: false,
  },
  {
    name: "Early9",
    latitude: "42.459263",
    longitude: "-71.354792",
    text: "",
    image: "",
    visitedBool: false,
  },
  {
    name: "Early10",
    latitude: "42.4593332",
    longitude: "-71.35407445",
    text: "",
    image: "",
    visitedBool: false,
  },
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
    name: "",
    latitude: "",
    longitude: "",
    text: "",
    image: "",
    visitedBool: false,
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
  var markers = [];
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
          area.setAttribute("coords","0,0,"+imgSize+","+imgSize);
          area.setAttribute("href","#");
          area.setAttribute("onclick","load20C(\'"+i+"\')");
          map.appendChild(area);
          image.setAttribute("usemap","#map"+i);
          infoWindowNode.appendChild(textNode);
          infoWindowNode.appendChild(image);
          infoWindowNode.appendChild(node);
          infoWindowNode.appendChild(map);
          infoWindow.setContent(infoWindowNode);
          



          
          infoWindow.open(map, marker_temp);
        };
      })(marker_temp, i)
    );
    markers.push(marker_temp);
  }
  


  const $info = document.getElementById("info");

  let watchId = trackLocation({
    onSuccess: ({ coords: { latitude: lat, longitude: lng } }) => {
      marker_user.setPosition({ lat, lng });
      //map.panTo({ lat, lng });
      sessionStorage.setItem('x', lat);
      sessionStorage.setItem('y', lng);
      
       for (let p = 0; p < points.length; p++) {
        x = points[p].latitude;
        y = points[p].longitude;
        if (!Math.abs(x-sessionStorage.getItem('x'))<=.000015) {
          continue;
        }
        if (!Math.abs(y-sessionStorage.getItem('y'))<=.00002) {
          continue
        } else {
         //do something with p, markers[p]
         let markerTemp = markers[p];
          markerTemp.setIcon("../assets/userlocation.png");
          
          
          break;
        }
      }
      
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
const texts = ["Welcome to Haines House! It was here that the Concord Academy that we know today got its start in 1922. However, Concord Academy began not as a girls\' high school in 1922, but as a co-ed elementary school around the corner on Belknap Street in 1916. Elite Concord families who hoped to have their children attend preparatory schools founded it to offer a more rigorous education than the local public elementary school provided. By 1922, students had started to age out of the school and parents wanted a local option for their daughters to continue a rigorous, if not entirely preparatory, education. While college was not a destination for all elite women at the time, it was an increasingly attractive and available option for young women who saw themselves in the \"New Woman\" movement of the 1920s. Designed primarily to serve a local student population, the fee structure used boarding tuition to subsidize day student attendance. Original day student fees ranged from $125 to $350 while boarding student tuition was $1500. Once the decision was made to open a high school on April 22nd of 1922, plans moved quickly. Haines house was bought on May 19th and Elise Hobson was hired as the new headmistress on May 27th. The high school opened in September of that year. In that first iteration, Haines House was used for classrooms, a dining hall, and teacher residences.",
             "The Chapel is the heart of today\'s CA. Nevertheless, it arrived at the school in a rather serendipitous manner. The story starts with the infamous 1942 Cocoanut Grove fire in Boston which claimed the lives of nearly 500 people. In the wake of that tragedy, more stringent fire regulations were imposed on all commercial and institutional buildings, including those at CA. To make the Assembly Hall--in what is now the lower portion of the Library--safer in the case of a fire, the local Fire Marshall insisted that the loose chairs then in use be attached to the floor. The recommended method for doing that was for the chairs to be attached to poles and the poles to be bolted to the floor. School leaders thought that would be too ugly and so they began a search for benches that could be attractively secured to the floor. CA wasn’t able to find used benches for sale in time and had to order brand new ones. But in the process of searching, a teacher came across an ad about an old Baptist church in New Hampshire that was to be sold along with its benches. Betty Hall drove up to check out the benches. What she found was something that she had been envisioning for the school for a while: a quiet meeting house. Using her own money, Hall bought the building, including its benches. Taking it apart, board by board, took three weeks, but with the help of several faculty members, one 9th grader, and 5 pet dogs, they managed (with the help of a crane) to achieve the onerous task in the summer of 1956. Since finding its place at CA, the chapel has undergone multiple renovations and additions, notable among which was the steeple, built by students during the winter of 1960-1961. The iconic bell was installed a year later. A major reconstruction was led by headmaster Jake Dresden and director of operations Don Kingman in 2004, which nearly doubled the chapel in size. When the renovation was complete, the chapel, now able to seat 420 people, had \"enhanced acoustics, improved light, a higher ceiling, and soaring beams.\"",
             "An iconic part of the chapel is this carved inscription: Paul\'s first letter to the Corinthians. This passage was traditionally read on the opening days of school. CA students carved them here in 1956. This carving is not, in fact, the first iteration. The original version turned out poorly. Molly Gregory, the woodcarving instructor, had assigned individual students their own line of the passage, resulting in visible differences between each line. Scrapping that first iteration, Gregory assigned individual students a single letter which they were responsible for carving throughout the entire piece. The result was consistency and beauty. Woodcarving students in subsequent years created many other items for the Chapel, including the altar of the chapel and this podium where CA faculty and students have been giving talks for decades. The acquisition of the Chapel and decisions about the physical plant of the school were part and parcel of the transformation that Betty Hall's leadership offered to CA. Before her tenure, CA was primarily what its founding families hoped for: a local school that would offer an intellectually stimulating education for daughters who may or may not go on to college educations. Betty Hall transformed the school into a rigorous preparatory school for girls, putting it on par with other nationally-known girls' schools and, in the process, frustrating and angering local parents whose daughters could no longer be assured of admissions. Betty Hall built the heart of the new CA, the Chapel, and put the school on the map.",
             "Mrs. Hall\'s changes to CA campus were not limited to building the Chapel. During her tenure, the Stufac was also transformed. Entering the Stufac, you might assume that it was always a dining hall, but you\'d be wrong. This was Concord Academy’s first gym. Prior to the 1950s, the dining hall was located in Russell Robb, an older building that was demolished to make way for the SHAC, while the current Stufac was instead used as a gymnasium. Primarily used for sports practice and games, the space also served as an auditorium. As you can see on your devices, the stage was set against the north wall. CA\'s first play, Gilbert and Sullivan's The Mikado, was performed here. After 1950, the gym went under major renovations, converting it into a dining hall. A second floor was constructed--now referred to as the upper stufac--as a place for students to be in each other’s company; students could take books from the newly installed bookshelves or hang out on couches with each other. Like the chameleon mascot that represents CA's adaptability, the school in its physical plant and in its national reach, reinvented itself in the second part of the 20th century.",
             "As it reached its fiftieth year, CA faced an existential crisis. If things had gone differently, it\'s entirely possible that the school would not exist today, that the houses along Main Street would be just that, residential houses, and it would have looked as though CA was never here. You may be asking yourself why? Well, in 1969, CA confronted the same quandary as other prep schools: what to do about the swelling wave of co-education that was transforming both university and secondary education? If we had left this campus, it\'s likely that this valuable real estate in the center of town would have become a neighborhood like the adjacent ones. Well, by 1969 the vast majority of all-boys and all-girls schools had gone or were planning to go co-ed; Concord was under pressure to follow suit. Various plans were considered, such as: exchanging students with other nearby schools, sharing nearby school grounds, becoming a co-ed school by itself, staying in an all-girls school, or, most drastically, merging with an all-boys school. Many girls\' schools decided to take the latter option. CA had lots of offers; Groton and Middlesex both pressed their suits hard. After long contemplation, school leaders decided to maintain CA\'s independence and become co-ed on its own. Co-education was a major change. Boys joined CA in 1971. On your device, you can see some photos of the first male students at CA. We thought it would be interesting to recreate these images with current students, in a world in which CA welcomes students of all genders.",
             "Along with co-education, CA experienced some of the social revolution that was rocking the world. Before becoming co-educational, CA had accepted its first students of color in 1963. Twelve years later, CA had dedicated its most famous dance, “Whiteout,” a Concord Academy tradition in which all the students wear white clothing to dance with a blacklight, to an equal rights movement for African Americans. At the time of the dance in 1975, all the junior girls coordinated to wear black to support the protests against racial injustice. CA decided to honor this night by continuing the tradition for junior girls wearing all black to signify CA’s commitment to equality for all its members and bring equality to everybody treated unjustly. This being one of our more famous forms of activism, we see CA continue to support equality worldwide. Later in 1988 CA started its first GSA. With the help of history teacher Kevin Jennings, Concord was able to represent students of the LGBTQ+ community. In comparison Phillips Academy Andover, was inspired by CA, which resulted in the formation of their GSA in 1989. In recent years, CA has supported the black lives movement, marched for climate change, and LGBTQ+ rights. CA has always been a school that values its community, even supporting its students as they help change the world one movement at a time.",
             "This is the site of one of the two original senior houses, one of the first, but failed attempts, at developing co-educational residences at Concord Academy. Ben Stumpf, now the computer science teacher at CA, lived in this Senior house while he was a student here. Today, CA residential life is grappling not just with how to best co-educate the houses, but how to accommodate and welcome boarding students who are trans or gender non-conforming into a boarding program that has traditionally conformed to the gender binary. The process has prompted the community to scrutinize the way that gender informs and shapes how we create and use social spaces on campus and come to new and more flexible approaches that fit the community that we are today and that affirm all of the students who call CA home.",
             "nothing",
             "Concord Academy\'s transition from a local elementary school, to a local girls' high school, to a national girls\' boarding school, to an international boarding and day school is the result of the love and commitment of its students, families, faculty, staff, and school leaders. Its footprint has expanded over time from its origins at 185 Main Street to stretch from the border of downtown at Wheeler House to the shore of the Sudbury River at Toad Hall, and the Moriarty Athletic Campus out at the old Arena Farms. The school continues to reimagine and reinvent itself with each new generation of students and adults. The immediate future will hopefully include a revitalization of West Campus and the building of the new Arts Building on the parking lot you see in front of you. It will be exciting to see how the next generation of Chameleons transforms this landscape and themselves."

             ];

function load20C(i) {
  //document.cookie = "lastClick="+i;
  sessionStorage.setItem('lastClick', i);
  location.href = "../points/PointMoreInfo.html";
  /*
  window.setTimeout(theRest(i),1000);
  */
}
//ideally this could be done with some sort of onload function
function theRest(i){
 var text = document.createElement('p');
    var div = document.createElement('div');
    console.log(i);
    text.innerHTML = texts[i];
    div.appendChild(text); 
}
