// tehtävä 1
document.write("<p><cite><strong>If I had nine hours to chop down a tree, I'd spend the first six sharpening my ax.</strong> -- Abraham Lincoln</cite></p>");

// tehtävä 2
function repeatingText(text) {
    for (let i = 0; i < 50; i++) {
        document.write(text + "<br>");
    } // for
} // function

repeatingText("Tämä on toistuva lause.");

//tehtävä 3
window.onload = function() {
    if (navigator.userAgent.indexOf("Firefox") > -1) {
        window.location.href = "http://www.mozilla.org";
    } else {
        window.location.href = "http://www.google.com";
    }

    
};

//tehtävä 4

let isStudent = confirm("Are you a student?");
        

if (isStudent) {
    document.write("Welcome student");
} else {
    document.write("Sorry, this page is for students only");
}

//tehtävä 5

//kuvat 
var images = [
    "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
];


function displayRandomImage() {
    
    var randomIndex = Math.floor(Math.random() * images.length);

    
    document.write('<img src="' + images[randomIndex] + '" alt="Random Image">');
}


displayRandomImage();