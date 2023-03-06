import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  // console.log("From init()");
  // console.log("http://3.6.124.156:8082/cities");
  let cities = await fetchCities();
  // console.log(cities);
  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}
//${config.backendEndpoint}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try{
    let res=await fetch(`${config.backendEndpoint}/cities`);
    let data=await res.json();
    return data;
  }catch(err){
    return null;
  }
  

}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
 
  let element=document.createElement("div");
  element.className='col-sm-3 p-3';
  element.innerHTML=`<a href="pages/adventures/?city=${id}" id=${id}>
  <div class='tile'>
  <img src=${image} class="img-fluid rounded">
  <div class='tile-text'>
  <h5>${city}</h5>
  <p>${description}</p>
  </div>
  </div>
  </a>`
  document.getElementById('data').appendChild(element);
}

export {init, fetchCities, addCityToDOM};
