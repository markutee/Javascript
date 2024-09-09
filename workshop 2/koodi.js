// tehtävä 1
document.write("<p><cite><strong>If I had nine hours to chop down a tree, I'd spend the first six sharpening my ax.</strong> -- Abraham Lincoln</cite></p>");

// tehtävä 2
function repeatingText(text) {
    for (let i = 0; i < 50; i++) {
        document.write(text + "<br>");
    }
}

repeatingText("Tämä on toistuva lause.");

//tehtävä 3
window.onload = function() {
    if (navigator.userAgent.indexOf("Firefox") > -1) {
        window.location.href = "http://www.mozilla.org";
    } else {
        window.location.href = "http://www.google.com";
    }

    
};