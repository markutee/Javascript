//Tehtävä 1

// Funktio Button 1:lle
function changeHeading() {
    const heading = document.querySelector('h1');
    heading.textContent = 'Modified Heading';
  }
  
  // Funktio Button 2:lle
  function secondButton() {
    const exerciseHeading = document.querySelectorAll('h2')[1]; // Select the second <h2> element
    exerciseHeading.style.fontSize = '40px';       // Change font size
    exerciseHeading.style.fontStyle = 'italic';    // Change font style
    exerciseHeading.style.color = 'purple';          // Change text color
    exerciseHeading.style.backgroundColor = 'Black'; // Change background color
}
  

  
  
  // Funktio Button 3:lle
 
  // Button 3: Appends a paragraph and a logo, and changes the background color of the page
function thirdButton() {
    // Find the 4th <p> tag
    const fourthParagraph = document.querySelectorAll('p')[3];
  
    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = '<em>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</em>'; // Italicized text
  
    // Append the new paragraph after the 4th <p> tag
    fourthParagraph.after(newParagraph);
  
    // Create an image element for the logo
    const logoImage = document.createElement('img');
    logoImage.src = 'https://via.placeholder.com/100'; // Example logo image URL
    logoImage.alt = 'Logo';
    logoImage.style.display = 'block';  // Ensure the logo appears on a new line
  
    // Append the logo image after the new paragraph
    newParagraph.after(logoImage);
  
    // Change the background color of the entire page
    document.body.style.backgroundColor = 'lightblue';
  }

// Tehtävä 2

// Function to hide the element with id 'me' when the first checkbox is checked
function hide() {
    const element = document.getElementById('me');
    if (element) {
      element.style.display = 'none';  // Hide the element by setting display to 'none'
    }
  }
  
  // Function to show the element with id 'me' when the second checkbox is checked
  function show() {
    const element = document.getElementById('me');
    if (element) {
      element.style.display = 'block';  // Show the element by setting display to 'block'
    }
  }
  
  // Function to change the font size of elements with class 'surprise' when the third checkbox is checked
  function changeSurpriseFontSize() {
    const surpriseElements = document.querySelectorAll('.surprise');
    
    surpriseElements.forEach((element) => {
      element.style.fontSize = '20px';  // Change font size to 20px
    });
  }

  
//Tehtävä 3



