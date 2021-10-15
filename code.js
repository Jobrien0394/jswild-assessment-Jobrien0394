// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let defaultLatitude = 38.2537106518
let defaultLongitude = -85.7401220395
let currentCoordinate = {}
// Step One - Get the location
// Read through the Geolocation documentation and the Geolocation API documentation.

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    let crd = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    fetch(`https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=26e1b67e2817117639fe8225c4f94da3&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=38.2537106518&lon=-85.7401220395&text=LouisvilleSluggerFactory`)
    .then(response => response.json())
    // .then(LouisvilleSluggerFactory => console.log(constructImageURL(LouisvilleSluggerFactory.photos.photo[0])))
    .then(displayFirstImage)
    //const imageURL = constructImageURL()
   // console.log(imageURL)
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);


  // Step Two - Construct the query URL
  // Step Three - Send the request to Flickr and process the response data
  
  
  
  // Step Four - Construct an image source URL

  function constructImageURL (photoObject) {
    console.log(`https://farm${photoObject.farm}.staticflickr.com/${photoObject.server}/${photoObject.id}_${photoObject.secret}.jpg`)
    return `https://farm${photoObject.farm}.staticflickr.com/${photoObject.server}/${photoObject.id}_${photoObject.secret}.jpg`
  }

  // Step Five - Display the first image.
  function displayFirstImage (response) {
    let imageURL = constructImageURL(response.photos.photo[1])
    console.log(imageURL)
  }

  document.main.append(`https://farm${photoObject.farm}.staticflickr.com/${photoObject.server}/${photoObject.id}_${photoObject.secret}.jpg`)

