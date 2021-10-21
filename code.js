// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let latitude = 51.507351
let longitude = -0.127758
let currentCoordinate = {}
// Step One - Get the location
// Read through the Geolocation documentation and the Geolocation API documentation.
  latitude = latitude
  longitude = longitude
let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {

    let crd = pos.coords;
    latitude = crd.latitude
    longitude = crd.longitude
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    fetchRequest(latitude, longitude)
  }
    
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    fetchRequest(latitude, longitude)
  }
  navigator.geolocation.getCurrentPosition(success, error, options);

  let secret = "26e1b67e2817117639fe8225c4f94da3"
  function fetchRequest(latitude, longitude) {
  fetch(`https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=${secret}&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=${latitude}&lon=${longitude}&text=zoo animals`)
    .then(response => response.json())
    // .then(LouisvilleSluggerFactory => console.log(constructImageURL(LouisvilleSluggerFactory.photos.photo[0])))
    .then(displayImage)
    //const imageURL = constructImageURL()
   // console.log(imageURL)
  }
  
  


  // Step Two - Construct the query URL
  // Step Three - Send the request to Flickr and process the response data
  // Look at the "Flickr Request.http" file for more information
  
  
  // Step Four - Construct an image source URL

  function constructImageURL (photoObject) {
    console.log(`https://farm${photoObject.farm}.staticflickr.com/${photoObject.server}/${photoObject.id}_${photoObject.secret}.jpg`)
    return `https://farm${photoObject.farm}.staticflickr.com/${photoObject.server}/${photoObject.id}_${photoObject.secret}.jpg`
  }

  // Step Five - Display the first image.
  let index = 0
  let nextButton = document.querySelector('#Next')
  function displayImage (response) {
    let imageURL
    if (index >= response.photos.photo.length) {
      index = 0
      imageURL = constructImageURL(response.photos.photo[index])
    }
    else {
      imageURL = constructImageURL(response.photos.photo[index])
    }
    let firstPicture = document.querySelector('#Picture')
    firstPicture.innerHTML = ""
    let image = document.createElement('img')
    image.src = imageURL
    console.log(imageURL)
    firstPicture.append(image, nextButton)
  }

  function displayNextImage () {
    index += 1
    fetchRequest(latitude, longitude)
  }

  nextButton.addEventListener('click', displayNextImage)