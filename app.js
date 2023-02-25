// Get the form and the name input element
const form = document.querySelector('form');
const nameInput = document.getElementById('name');

// Get the birthday card and the name placeholder element
const birthdayCard = document.getElementById('birthday-card');
const namePlaceholder = document.getElementById('name-placeholder');

// Add an event listener to the form submit event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the name input
  const name = nameInput.value;

  // Set the name placeholder text to the input value
  namePlaceholder.textContent = name;

  // Hide the form
  form.style.display = 'none';

  // Show the birthday card
  birthdayCard.style.display = 'block';
});

const hoverElement = document.getElementById('hover-card');

// Get the birthday message element
const birthdayMessage = document.getElementById('birthday-message');

// Array of birthday messages
const messages = [
  'Wishing you a happy birthday and a year filled with joy and blessings!',
  'Hope your birthday is as special as you are!',
  'May your day be filled with love, laughter, and cake!',
  'Sending you warm wishes on your birthday!',
  'Wishing you a year filled with new adventures and happy memories!'
];

// Function to generate a random message and set the text in the HTML element
function generateMessage() {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  birthdayMessage.textContent = randomMessage;
}

// Add event listeners to the element
hoverElement.addEventListener('mouseenter', generateMessage);
hoverElement.addEventListener('mouseleave', generateMessage);