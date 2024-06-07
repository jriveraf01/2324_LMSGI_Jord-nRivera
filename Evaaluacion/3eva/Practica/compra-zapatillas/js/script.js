document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
  
    logo.addEventListener('mouseover', function() {
      logo.style.color = '#2980b9';
    });
  
    logo.addEventListener('mouseout', function() {
      logo.style.color = 'white';
    });
  });
  