const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const currentDate = new Date();

    // Convert the date to a JSON-serializable format (ISO string)
const jsonDate = currentDate.toISOString();

    // Display the result on the HTML page
document.write('<p>' + jsonDate + '</p>');

const browserLanguage = navigator.language;
document.querySelector('.selainkieli').textContent = browserLanguage;

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const screenDimensions = `${screenWidth} x ${screenHeight}`;
document.querySelector('.ikkunankoko').textContent = screenDimensions;

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const windowSize = `${windowWidth} x ${windowHeight}`;
document.querySelector('.selainikkuna').textContent = windowSize;

const currentDateTime = new Date().toLocaleString('fi-FI', options);
document.querySelector('.pvm').textContent = currentDateTime;
