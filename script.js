const srcBtn = document.getElementById("srcBtn");
const srcInput = document.getElementById("srcInput");
const city_Name = document.getElementById("city_Name");
const city_Time = document.getElementById("city_Time");
const city_Temp = document.getElementById("city_Temp");

// `` this is use to make any changes or string interpolation

async function getData(cityInputVal) {
  const fetch_data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key={Replace your API KEY HERE}&q=${cityInputVal}&aqi=yes`
  );
  return await fetch_data.json();
}

srcBtn.addEventListener("click", async () => {
  const cityInput = srcInput.value;
  const finalData = await getData(cityInput);
  console.log(finalData);
  city_Name.innerText = `${finalData.location.name}, ${finalData.location.country} , ${finalData.location.tz_id}`;
  city_Time.innerText = finalData.location.localtime;
  city_Temp.innerText = finalData.current.temp_c;
});
