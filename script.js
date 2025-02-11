const button = document.getElementById('Button1');
const button2 = document.getElementById('Button2');

button.addEventListener('click', function() {
    button.classList.remove('fade-in');
    button2.classList.remove('fade-out');
    button.classList.add('fade-out');
    button2.classList.add('fade-in');
  });

button2.addEventListener('click', function() {
    button.classList.remove('fade-out');
    button2.classList.remove('fade-in');
    button2.classList.add('fade-out');
    button.classList.add('fade-in');
  });
