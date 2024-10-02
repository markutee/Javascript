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


// Function to handle pulldown change
function changeCarImage() {
  var select = document.querySelector('#mySelect');
  var selectedValue = select.value;
  alert("You selected: " + selectedValue);

  // Change the car image based on selection
  var carImage = document.querySelector('#carimage');
  if (selectedValue === 'BMW') {
    carImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png';  // Public domain BMW image
  } else if (selectedValue === 'Audi') {
    carImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThPWP7oTduERaO7f85OnVP8lyc_QlRZtMfog&s';  // Public domain Audi image
  } else if (selectedValue === 'Mercedes') {
    carImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png';  // Public domain Mercedes image
  } else if (selectedValue === 'Volvo') {
    carImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35us_ksL5vl8fthBpRck9W5iflDd94DAENg&s';  // Public domain Volvo image
  }
}

// Function to add a border on mouse over
function addBorder() {
  var carImage = document.querySelector('#carimage');
  carImage.style.border = '5px solid red';
}

// Function to remove the border on mouse out
function removeBorder() {
  var carImage = document.querySelector('#carimage');
  carImage.style.border = 'none';
}

// Event listeners for pulldown change, mouseover, and mouseout
document.querySelector('#mySelect').addEventListener('change', changeCarImage);
document.querySelector('#carimage').addEventListener('mouseover', addBorder);
document.querySelector('#carimage').addEventListener('mouseout', removeBorder);

// Tehtävä 4

// Move the image 200px left and 500px down
function changePosition() {
  var carImage = document.querySelector('#carimage');
  carImage.style.position = 'relative';
  carImage.style.left = '200px';
  carImage.style.top = '500px';
}

// Animate the image back and forth
let moveRight = true;
function doMove() {
  var carImage = document.querySelector('#carimage');
  var currentLeft = parseInt(carImage.style.left) || 0;

  if (moveRight) {
    currentLeft += 10;  // Move right
    if (currentLeft >= 300) moveRight = false;  // Reverse direction at 300px
  } else {
    currentLeft -= 10;  // Move left
    if (currentLeft <= 0) moveRight = true;  // Reverse direction at 0px
  }

  carImage.style.left = currentLeft + 'px';
}

// Slowly fade out the image
let opacity = 1;
function fadeOut() {
  var carImage = document.querySelector('#carimage');
  if (opacity > 0) {
    opacity -= 0.05;
    carImage.style.opacity = opacity;
  }
}

// Remove the image from the page
function removeImage() {
  var carImage = document.querySelector('#carimage');
  carImage.remove();
}

// Tehtävä 5

// Function to insert new rows into the table
function insertRows() {
  var name = document.querySelector('#textfield').value;
  var position = document.querySelector('#textfield2').value;
  var salary = document.querySelector('#textfield3').value;

  // Get the table body
  var table = document.querySelector('#data tbody');
  
  // Create a new row
  var newRow = document.createElement('tr');

  // Create new cells for Name, Position, and Salary
  var nameCell = document.createElement('td');
  var positionCell = document.createElement('td');
  var salaryCell = document.createElement('td');

  // Set the cell content
  nameCell.textContent = name;
  positionCell.textContent = position;
  salaryCell.textContent = salary;

  // Append the cells to the row
  newRow.appendChild(nameCell);
  newRow.appendChild(positionCell);
  newRow.appendChild(salaryCell);

  // Append the row to the table body
  table.appendChild(newRow);

  // Clear the input fields after insertion
  document.querySelector('#textfield').value = '';
  document.querySelector('#textfield2').value = '';
  document.querySelector('#textfield3').value = '';
}

// Bonus Exercise 1: Replace all <li> tags with a <strong> tag saying "Replaced"
function replaceLiTags() {
  var listItems = document.querySelectorAll('li');
  listItems.forEach(function(item) {
    item.innerHTML = '<strong style="color: red;">Replaced</strong>';
  });
}

// Bonus Exercise 2: Replace <li> tags containing the word "Select" with "Replaced"
function replaceSelectLiTags() {
  var listItems = document.querySelectorAll('li');
  listItems.forEach(function(item) {
    if (item.textContent.includes('Select')) {
      item.innerHTML = '<strong style="color: red;">Replaced</strong>';
    }
  });
}
