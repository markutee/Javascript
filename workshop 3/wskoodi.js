//Tehtävä 1
// Funktio nappi1
function handleNappi1Click() {
    const currentDate = new Date();
    alert('You clicked me!\nCurrent date: '+ currentDate);
    
}

// Funktio nappi2
function handleNappi2Click() {
    const table=
    document.getElementById("example"); // Hakee taulukon elementin
    if (table.style.display === "none") {
        table.style.display = "table"; // Näyttää taulukon
    } else {
        table.style.display = "none"; // Piilottaa taulukon, jos se on näkyvissä
    }
}

// Funktio nappi3
function handleNappi3Click() {
   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
   } else {
    alert('Selain ei tue geolokaatiota')
   }
}
// Function to handle successful retrieval of location
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    alert(`Your location:\nLatitude: ${latitude}\nLongitude: ${longitude}`);
}

// Function to handle errors in retrieving location
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('User denied the request for Geolocation.');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable.');
            break;
        case error.TIMEOUT:
            alert('The request to get user location timed out.');
            break;
        case error.UNKNOWN_ERROR:
            alert('An unknown error occurred.');
            break;
    }
}


// Add event listeners to each button
document.getElementById('nappi1').onclick = handleNappi1Click;
document.getElementById('nappi2').onclick = handleNappi2Click;
document.getElementById('nappi3').onclick = handleNappi3Click;

//Tehtävä 2

// Funktion hiiren siirtoon otsikon päälle
function handleMouseOver() {
    console.log("Stepped over by a mouse!");
}

// Funktion hiiren siirtoon otsikon ulkopuolelle
function handleMouseOut() {
    alert("Bye bye mouse!");
}

// Hakee "Exercise 2" -otsikon ja lisää tapahtumakuuntelijat
const exercise2Heading = document.querySelector("h2:nth-of-type(2)");
exercise2Heading.onmouseover = handleMouseOver;
exercise2Heading.onmouseout = handleMouseOut;


//Tehtävä 3


