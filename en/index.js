$(function() {
  const $gallery = $('.gallery a').simpleLightbox();
});

document.getElementById('typeSelect').addEventListener('change', function() {
  var selectedValue = this.value;
  var imageElement = document.getElementById('tariffeImage');
  var textElement = document.getElementById('text-info');
  var textElement1 = document.getElementById('text-info1');
  
  imageElement.style.animation = 'none'; 
  void imageElement.offsetWidth; 
  imageElement.style.display = 'block';
  textElement.style.display = 'none';

  if (selectedValue === 'Standard') {
    imageElement.src = '../src/economic.png';
    textElement1.textContent = 'Toyota Camry Hybrid';
  } else if (selectedValue === 'Berlin') {
    imageElement.src = '../src/mer.jpg';
    textElement1.textContent = 'Mercedes E Class';
  } else if (selectedValue === 'Vip') {
    imageElement.src = '../src/rr2.png';
    textElement1.textContent = 'Rolls Royce';
  } else if (selectedValue === 'Van') {
    imageElement.src = '../src/van.png';
    textElement1.textContent = 'Mercedes-Benz Van';
  } else if (selectedValue === 'Lux') {
    imageElement.src = '../src/msds2.jpg';
    textElement1.textContent = 'Mercedes-Benz S Class';
  } else {
    imageElement.style.display = 'none';
    textElement1.style.display = 'block';
    return;
  }

  imageElement.style.animation = 'scroll 1s linear forwards';
  textElement1.style.display = 'block';
});



document.addEventListener('DOMContentLoaded', function() {
const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('click', function() {
        let rating = this.getAttribute('data-value');

        resetStars();
        highlightStars(rating);
    });
});

function resetStars() {
    stars.forEach(star => {
        star.classList.remove('selected');
    });
}

function highlightStars(rating) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
        }
    });
}
});

const stars = document.querySelectorAll('.star');
      const starValue = document.getElementById('starValue');

      stars.forEach(star => {
          star.addEventListener('click', function() {
              stars.forEach(s => s.classList.remove('selected'));
              this.classList.add('selected');
              starValue.value = this.getAttribute('data-value');
          });
});

toastr.options = {
progressBar: true,
preventDuplicates: true,
positionClass: 'toast-top-right',
timeOut: 2000 
};
    
$(document).ready(function() {
  $('#feedbackForm').submit(function(event) {
    event.preventDefault();
    
    var formValid = true; 

    if (formValid) {
      $.ajax({
        type: 'POST',
        url: 'gmail_contact.php',
        data: $(this).serialize(),
        success: function(response) {
          toastr.success('Commentaires soumis avec succès!', 'Notification');
          $('#feedbackForm')[0].reset();
          setTimeout(function() {
              window.location.reload();
          }, 2000); 
        },
        error: function() {
          toastr.error('Form submission failed!', 'Error');
        }
      });
    } else {
      toastr.error('La validation du formulaire a échoué!', 'Error');
    }
  });
});



$(document).ready(function() {
  $('#contact_form').submit(function(event) {
    event.preventDefault();
    
    var formValid = true; 

    if (formValid) {
      $.ajax({
        type: 'POST',
        url: 'gmail_reserve.php',
        data: $(this).serialize(),
        success: function(response) {
          toastr.success('Réservation exécutée!', 'Notification');
          $('#contact_form')[0].reset();
          setTimeout(function() {
              window.location.reload();
          }, 2000); 
        },
        error: function() {
          toastr.error('Réservation failed!', 'Error');
        }
      });
    } else {
      toastr.error('La validation du formulaire a échoué!', 'Error');
    }
  });
});

const images = [
'../src/1.PNG',
'../src/2.png',
'../src/3.png',
'../src/4.png'
];
let currentIndex = 0;

function showImage(index) {
const img = document.getElementById('sliderImage');
img.src = images[index];
}

function nextImage() {
currentIndex = (currentIndex + 1) % images.length;
showImage(currentIndex);
}

function prevImage() {
currentIndex = (currentIndex - 1 + images.length) % images.length;
showImage(currentIndex);
}
