const button = document.getElementById('Button1');
const button2 = document.getElementById('Button2');
const headerbox = document.getElementById('header-box')




button.addEventListener('click', function() {
    button.classList.remove('fade-in');
    button2.classList.remove('fade-out');

    button.classList.add('fade-out');
    button2.classList.add('fade-in');
    document.body.style.backgroundColor = "rgb(49, 49, 49)";
    headerbox.style.backgroundColor = "rgb(140, 58, 58)";
    
  });


button2.addEventListener('click', function() {
    button.classList.remove('fade-out');
    button2.classList.remove('fade-in');
    button2.classList.add('fade-out');
    button.classList.add('fade-in');
    document.body.style.backgroundColor = "rgb(189, 189, 189)";
    headerbox.style.backgroundColor = "rgb(255, 154, 154)";
  });
