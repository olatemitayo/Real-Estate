// hamburger menu 
const menu_bar = document.querySelector(".hamburger"); const mobile_menu = document.querySelector(".mobile-nav"); menu_bar.addEventListener("click", function () { menu_bar.classList.toggle("is-active"); mobile_menu.classList.toggle("is-active"); });


const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slider > div');

let currentIndex = 0;

// Function to navigate to the previous slide
const goToPrevSlide = () => {
  if (currentIndex > 0) {
    currentIndex--;
    slider.scrollTo({
      left: slides[currentIndex].offsetLeft,
      behavior: 'smooth'
    });
  }
  updateButtonState();
};

// Function to navigate to the next slide
const goToNextSlide = () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    slider.scrollTo({
      left: slides[currentIndex].offsetLeft,
      behavior: 'smooth'
    });
  }
  updateButtonState();
};

// Function to update the state of the previous and next buttons
const updateButtonState = () => {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === slides.length - 1;
};

// Add event listeners to the previous and next buttons
prevBtn.addEventListener('click', goToPrevSlide);
nextBtn.addEventListener('click', goToNextSlide);

// Set initial button state
updateButtonState();


// form validation 

const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const messageInput = document.querySelector('textarea[name="message"]');
const submitButton = document.querySelector('.contactBtn');

form.addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();
  resetValidation();

  let isValid = true;

  if (!nameInput.value.trim()) {
    isValid = false;
    showError(nameInput, 'Please enter your name');
  }

  if (!emailInput.value.trim()) {
    isValid = false;
    showError(emailInput, 'Please enter your email');
  } else if (!isValidEmail(emailInput.value.trim())) {
    isValid = false;
    showError(emailInput, 'Please enter a valid email');
  }

  if (!phoneInput.value.trim()) {
    isValid = false;
    showError(phoneInput, 'Please enter your phone number');
  }

  if (!messageInput.value.trim()) {
    isValid = false;
    showError(messageInput, 'Please enter your message');
  }

  if (isValid) {
    // Submit the form or perform any other action
    form.submit();
  }
}

function resetValidation() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach((errorMessage) => {
    errorMessage.remove();
  });

  nameInput.classList.remove('error');
  emailInput.classList.remove('error');
  phoneInput.classList.remove('error');
  messageInput.classList.remove('error');
}

function showError(input, message) {
  input.classList.add('error');
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = message;
  input.parentNode.appendChild(errorMessage);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
