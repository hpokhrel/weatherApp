const place_name = document.getElementById("place_name");
const lat_long = document.getElementById("lat_long");
const submit_btn = document.getElementById("submit_btn");

async function getData(lat, long) {
  lat_long.innerText = `${lat} , ${long}`;
  const awaitData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key={Replace your API KEY HERE}&q=${lat},${long}&aqi=yes`
  );
  return await awaitData.json();
}

async function gotData(position) {
  const myPos = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  place_name.innerText = `${myPos.location.name}, ${myPos.location.country}`;
  console.log(myPos);
}

function gotErrorData() {
  console.log("There was an error while accessing the data");
}

submit_btn.addEventListener("click", () => {
  const currLoc = navigator.geolocation.getCurrentPosition(
    gotData,
    gotErrorData
  );
});
