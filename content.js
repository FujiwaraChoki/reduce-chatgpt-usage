// content.js
console.log("Extension by @FujiwaraChoki on GitHub.");
const popup = document.createElement('div');
popup.style.position = 'fixed';
popup.style.backgroundColor = '#ffffff';
popup.style.border = '2px solid #ddd';
popup.style.borderRadius = '10px';
popup.style.padding = '20px';
popup.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
popup.style.zIndex = '9999';
popup.style.textAlign = 'center';
popup.style.fontFamily = 'Arial, sans-serif';
popup.style.color = '#333';

// Center
popup.style.top = '50%';
popup.style.left = '50%';
popup.style.transform = 'translate(-50%, -50%)';

// Dim the background
document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
document.body.style.overflow = 'hidden';

const question = document.createElement('p');
question.textContent = "Are you sure this is for the right reasons?";
question.style.fontSize = '18px';
question.style.marginBottom = '20px';

const option1 = document.createElement('button');
option1.textContent = "YES!!11!";
option1.style.backgroundColor = '#e63946';
option1.style.color = '#ffffff';
option1.style.border = 'none';
option1.style.borderRadius = '5px';
option1.style.padding = '10px 20px';
option1.style.cursor = 'pointer';
option1.style.fontSize = '16px';
option1.style.margin = '10px';
option1.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
option1.addEventListener('mouseover', () => (option1.style.backgroundColor = '#d62839'));
option1.addEventListener('mouseout', () => (option1.style.backgroundColor = '#e63946'));

const option2 = document.createElement('button');
option2.textContent = "Listen to Qur'an";
option2.style.backgroundColor = '#457b9d';
option2.style.color = '#ffffff';
option2.style.border = 'none';
option2.style.borderRadius = '5px';
option2.style.padding = '10px 20px';
option2.style.cursor = 'pointer';
option2.style.fontSize = '16px';
option2.style.margin = '10px';
option2.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
option2.addEventListener('mouseover', () => (option2.style.backgroundColor = '#1d3557'));
option2.addEventListener('mouseout', () => (option2.style.backgroundColor = '#457b9d'));

option1.addEventListener('click', function () {
  closePopup();
});

option2.addEventListener('click', function () {
  window.location.href = 'https://youtu.be/KvK_d9edjPM?si=45eAEFowvcAOfJ6y';
  closePopup();
});

popup.appendChild(question);
popup.appendChild(option1);
popup.appendChild(option2);

document.body.appendChild(popup);

function closePopup() {
  popup.remove();
  document.body.style.backgroundColor = '';
  document.body.style.overflow = '';
}
