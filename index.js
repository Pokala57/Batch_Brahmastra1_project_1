// script.js
function display(id) {
  // Hide all elements
  const allElements = document.querySelectorAll('body > div');
  allElements.forEach(element => {
      element.classList.add('hidden'); // Add the hidden class to hide the elements
  });

  // Show the element with the specified ID
  const elementToShow = document.getElementById(id);
  if (elementToShow) {
      elementToShow.classList.remove('hidden'); // Remove the hidden class to show the element
  }
}

// Initially display the first container
document.addEventListener('DOMContentLoaded', () => {
  display('firstContainer');
});
