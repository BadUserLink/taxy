$(function() {
    const $gallery = $('.gallery a').simpleLightbox();
  });

  document.getElementById('typeSelect').addEventListener('change', function() {
    var selectedValue = this.value;
    var imageElement = document.getElementById('tariffeImage');
    var textElement = document.getElementById('text-info');
    var textElement1 = document.getElementById('text-info1');
    
    imageElement.style.animation = 'none'; // Reset animation
    void imageElement.offsetWidth; // Trigger reflow
    imageElement.style.display = 'block';
    textElement.style.display = 'none';

    if (selectedValue === 'Standard') {
        imageElement.src = 'src/economic.png';
        textElement1.textContent = 'Toyota Camry Hybrid';
    } else if (selectedValue === 'Berlin') {
        imageElement.src = 'src/mer.jpg';
        textElement1.textContent = 'Mercedes E Class';
    } else if (selectedValue === 'Vip') {
        imageElement.src = 'src/rr2.png';
        textElement1.textContent = 'Rolls Royce';
    } else if (selectedValue === 'Van') {
        imageElement.src = 'src/van.png';
        textElement1.textContent = 'Mercedes-Benz Van';
    } else if (selectedValue === 'Lux') {
        imageElement.src = 'src/msds2.jpg';
        textElement1.textContent = 'Mercedes-Benz S Class';
    }  else {
        imageElement.style.display = 'none';
        textElement1.style.display = 'block';
        return;
    }

    imageElement.style.animation = 'scroll 1s linear forwards';
    textElement1.style.display = 'block';
});


// script.js

document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star');
  // const ratingValue = document.getElementById('rating-value');
  
  stars.forEach(star => {
      star.addEventListener('click', function() {
          let rating = this.getAttribute('data-value');
          // ratingValue.textContent = `Rating: ${rating}`;
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
  'src/1.PNG',
  'src/2.PNG',
  'src/3.PNG'
];

const titles = [
  "Guide Touristique Côte D'azur",
  "Nos deux formules de visite à Nice:",
  "Nos deux formules de visite à Cannes:"
];

const texts = [
  `                     
                  <div style="height:300px; overflow:auto">   
                        <b> Explorez la Côte d’Azur autrement – avec un guide touristique privé, passionné et multilingue.</b> </br>
                        La French Riviera est bien plus qu’une destination de rêve : c’est un mélange unique de glamour, d’histoire, de nature et d’art de vivre méditerranéen. Que vous soyez à la recherche d’une balade élégante dans les ruelles de Monaco, d’une journée à flâner entre les marchés provençaux et les plages de sable fin, ou d’une escapade dans les villages perchés de l’arrière-pays, nous sommes là pour transformer votre séjour en une expérience authentique et inoubliable. 
                            </br> </br>

                        Nous proposons des visites guidées <b> personnalisées et privées</b>, conçues selon vos intérêts : patrimoine, culture, gastronomie, paysages, lieux emblématiques ou trésors cachés. Chaque itinéraire est soigneusement préparé pour vous offrir bien plus qu’une simple excursion : un véritable voyage à travers l’âme de la Côte d’Azur.
                            </br> </br>

                        <b>Nos guides professionnels sont disponibles en plusieurs langues</b> : français, anglais, italien, roumain, russe et plus encore, afin de répondre aux besoins de nos visiteurs du monde entier. Vous bénéficiez d’un accompagnement chaleureux, de qualité, avec des explications claires et enrichissantes dans la langue de votre choix.
                            </br> </br>

                        Qu’il s’agisse d’une première visite ou d’un retour amoureux sur la Riviera, laissez-nous vous faire découvrir ce que les circuits classiques ne montrent pas.
                        <b>Contactez-nous dès maintenant</b> pour organiser votre tour idéal – en solo, en couple, en famille ou entre amis.
                        Avec nous, <b>chaque visite devient une histoire à vivre </b>.
                  <div>
`,

  `                 <div style="height:300px; overflow:auto">
                        <h3>1. Tour avec Chauffeur Privé (sans guide)</h3>
                        <p>Une balade confortable pour découvrir Nice à votre rythme</p>
                        <ul style="list-style-type: circle; padding-left: 20px;">
                            <li>Transport en véhicule privé (berline ou van haut de gamme)</li>
                            <li>Prise en charge à votre hôtel, résidence ou port</li>
                            <li>Circuit flexible selon vos envies</li>
                            <li>Arrêts photos, promenades, shopping ou détente</li>
                            <li>Recommandations de lieux et restaurants par votre chauffeur</li>
                        </ul>

                        <p><strong>Durée au choix :</strong></p>
                        <ul style="list-style-type: circle; padding-left: 20px;">

                            <li>Demi-journée</li>
                            <li>Journée complète</li>
                            <li>Possibilité de combiner avec d’autres villes (ex : Cannes, Eze, Monaco)</li>
                        </ul>

                        <h3>2. Tour avec Chauffeur Privé + Guide Touristique Professionnel</h3>
                        <p>Une visite guidée riche en histoire, culture et anecdotes locales</p>
                        <ul style="list-style-type: circle; padding-left: 20px;">

                            <li>Tout ce qui est inclus dans la formule 1</li>
                            <li>Guide professionnel certifié à vos côtés</li>
                            <li>Explications détaillées des monuments, quartiers, traditions</li>
                            <li>Balade à pied dans le vieux Nice, visite de musées ou marchés</li>
                            <li>Possibilité d’organiser une visite thématique (histoire, art, gastronomie…)</li>
                        </ul>

                        <p><strong>Langues disponibles :</strong></p>
                        <ul style="list-style-type: circle; padding-left: 20px;">

                            <li>Français</li>
                            <li>Anglais</li>
                            <li>Russe</li>
                            <li>Roumain</li>
                            <li>Autres sur demande</li>
                        </ul>

                        <h4>Sites incontournables à Nice :</h4>
                        <ul style="list-style-type: circle; padding-left: 20px;">

                            <li>Vieux Nice et ses ruelles colorées</li>
                            <li>Promenade des Anglais</li>
                            <li>Colline du Château (vue panoramique)</li>
                            <li>Marché aux fleurs du Cours Saleya</li>
                            <li>Place Masséna et jardins</li>
                            <li>Cathédrales, musées et galeries d’art</li>
                        </ul>

                        <h4>Réservez votre visite :</h4>
                        <ul style="list-style-type: circle; padding-left: 20px;">

                            <li>Service privé, confortable et sur mesure</li>
                            <li>Disponible 7j/7 sur réservation</li>
                            <li>Devis personnalisé sur demande</li>
                        </ul>
                    </div>

`,

`                 <div style="height:300px; overflow:auto">
                      <h3>1. Tour avec Chauffeur Privé (sans guide)</h3>
                      <p>Une balade confortable et flexible pour explorer Cannes à votre rythme</p>
                      <ul style="list-style-type: circle; padding-left: 20px;">
                        <li>Véhicule privé haut de gamme (berline ou van)</li>
                        <li>Prise en charge à votre hôtel, résidence, port ou aéroport</li>
                        <li>Itinéraire libre ou suggéré, selon vos envies</li>
                        <li>Arrêts pour découvrir, faire des photos, marcher, boire un verre</li>
                        <li>Conseils du chauffeur pour les meilleurs coins à visiter</li>
                      </ul>

                      <p><strong>Durée au choix :</strong></p>
                      <ul style="list-style-type: circle; padding-left: 20px;">
                        <li>Demi-journée</li>
                        <li>Journée complète</li>
                        <li>Possibilité de combiner avec Antibes, Grasse, Saint-Paul de Vence, etc.</li>
                      </ul>

                      <h3>2. Tour avec Chauffeur Privé + Guide Touristique Professionnel</h3>
                      <p>Une visite guidée complète, riche en histoire et en culture</p>
                      <ul style="list-style-type: circle; padding-left: 20px;">
                        <li>Tout ce qui est inclus dans la Formule 1</li>
                        <li>Guide certifié spécialisé dans l’histoire locale, le cinéma, l’architecture</li>
                        <li>Visite commentée du vieux Cannes (Le Suquet), du Palais des Festivals, du marché Forville</li>
                        <li>Possibilité de visiter des lieux insolites et typiques</li>
                        <li>Balade à pied, explications en direct, anecdotes du Festival de Cannes</li>
                      </ul>

                      <p><strong>Langues proposées :</strong></p>
                      <ul style="list-style-type: circle; padding-left: 20px;">
                        <li>Français</li>
                        <li>Anglais</li>
                        <li>Russe</li>
                        <li>Roumain</li>
                        <li>Autres langues sur demande</li>
                      </ul>

                  <h4>Sites incontournables à Cannes :</h4>
                  <ul style="list-style-type: circle; padding-left: 20px;">
                    <li>Le Suquet (vieille ville et point de vue panoramique)</li>
                    <li>La Croisette (plages, palaces, boutiques de luxe)</li>
                    <li>Palais des Festivals (tapis rouge et événements)</li>
                    <li>Port de Cannes</li>
                    <li>Marché Forville (selon les jours)</li>
                    <li>Îles de Lérins (en option, avec organisation de traversée)</li>
                  </ul>

                  <h4>Pourquoi choisir notre service ?</h4>
                  <ul style="list-style-type: circle; padding-left: 20px;">
                    <li>Flexibilité totale selon vos envies</li>
                    <li>Transport haut de gamme, chauffeur professionnel</li>
                    <li>Guide spécialisé possible pour une visite complète</li>
                    <li>Service discret, ponctuel et multilingue</li>
                    <li>Réservation facile, devis sur mesure</li>
                  </ul>
                </div>
`
];

let currentIndex = 0;

function showImage(index) {
  const img = document.getElementById('sliderImage');
  const title = document.getElementById('sliderTitle');
  const text = document.getElementById('sliderText');

  img.src = images[index];
  title.innerText = titles[index];
  text.innerHTML = texts[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
