// Tehtävä 1

function parseData() {
    // Hae kaikki upotetut XML-lainaukset ja kirjoittajat HTML-sivulta
    const quotes = document.getElementsByTagName("quote");
    const authors = document.getElementsByTagName("author");

    // Alusta tyhjä merkkijono tuloksen tallentamista varten
    let output = "";

    // Käy läpi kaikki lainaukset ja kirjoittajat, olettaen että ne ovat pareittain
    for (let i = 0; i < quotes.length; i++) {
        // Käytetään takaiskuja ja lisätään HTML-elementit oikein lainausmerkeissä
        output += `<p><strong>Quote:</strong> ${quotes[i].textContent}</p>`;
        output += `<p><strong>Author:</strong> ${authors[i].textContent}</p><br>`;
    }

    // Näytä tulokset 'quotes'-divissä
    document.getElementById("quotes").innerHTML = output;
}



// Tehtävä 2

function loadXMLFile() {
    // Luodaan XMLHttpRequest-objekti
    var xmlhttp = new XMLHttpRequest();

    // Määritetään URL (käytetään toista vaihtoehtoa tehtävänannosta)
    xmlhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://quotes.rest/qod.xml", true);
    
    // Lähetetään pyyntö
    xmlhttp.send();

    // Kun pyyntö on valmis ja onnistunut, käsitellään vastaus
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // Näytetään raaka XML-sisältö 'quotes'-divissä
            document.getElementById("quotes").innerHTML = xmlhttp.responseText;
        } else if (xmlhttp.readyState == 4) {
            // Jos jokin menee pieleen, tulostetaan virhe konsoliin
            console.error('Virhe: ' + xmlhttp.status);
        }
    }
}


// Tehtävä 3

function loadXMLFile() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://quotes.rest/qod.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("quotes").innerHTML = xmlhttp.responseText;
        } else if (xmlhttp.readyState == 4) {
            console.error('Virhe: ' + xmlhttp.status);
        }
    }
}

function loadAndParseXML() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://quotes.rest/qod.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // Puretaan XML-datan sisältö
            const xmlDoc = xmlhttp.responseXML;
            const quotes = xmlDoc.getElementsByTagName("quote");
            const authors = xmlDoc.getElementsByTagName("author");

            // Tyhjennetään taulukon sisältö ennen uuden datan lisäämistä
            const tableBody = document.querySelector("#tabledata tbody");
            tableBody.innerHTML = "<tr><td><strong>Quote</strong></td><td><strong>Author</strong></td></tr>";

            // Lisätään jokainen lainaus ja sen kirjoittaja taulukkoon
            for (let i = 0; i < quotes.length; i++) {
                const newRow = document.createElement("tr");
                const quoteCell = document.createElement("td");
                const authorCell = document.createElement("td");

                quoteCell.textContent = quotes[i].textContent; // Lainaus
                authorCell.textContent = authors[i].textContent; // Kirjoittaja

                newRow.appendChild(quoteCell);
                newRow.appendChild(authorCell);
                tableBody.appendChild(newRow);
            }
        } else if (xmlhttp.readyState == 4) {
            console.error('Virhe: ' + xmlhttp.status);
        }
    }
}


// Tehtävä 4

function loadAndParseNews(url) {
    var xmlhttp = new XMLHttpRequest();
    // Jos käytämme CORS-proxyä
    if (url.includes("iltalehti")) {
        url = "https://cors-anywhere.herokuapp.com/" + url; // Lisää CORS-proxy Iltalehti-URL:iin
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // Puretaan XML-datan sisältö
            const xmlDoc = xmlhttp.responseXML;
            const items = xmlDoc.getElementsByTagName("item"); // Haetaan kaikki uutisotsikot

            // Tyhjennetään uutislista ennen uuden datan lisäämistä
            const newsList = document.getElementById("newsList");
            newsList.innerHTML = "";

            // Lisätään jokainen uutisotsikko listaan
            for (let i = 0; i < items.length; i++) {
                const newItem = document.createElement("li");
                const title = items[i].getElementsByTagName("title")[0].textContent; // Otsikko
                const link = items[i].getElementsByTagName("link")[0].textContent; // Linkki uutiseen

                // Luodaan hyperlinkki uutisotsikosta
                const linkElement = document.createElement("a");
                linkElement.href = link;
                linkElement.textContent = title;
                linkElement.target = "_blank"; // Avaa linkin uuteen välilehteen

                newItem.appendChild(linkElement);
                newsList.appendChild(newItem);
            }
        } else if (xmlhttp.readyState == 4) {
            console.error('Virhe: ' + xmlhttp.status); // Tulostetaan virhe konsoliin
        }
    }
}
