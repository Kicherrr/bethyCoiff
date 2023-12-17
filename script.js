// Sélectionne l'élément HTML ayant l'ID "monthAndYear"
const monthAndYear = document.querySelector('#monthAndYear');

// Sélectionne l'élément HTML ayant l'ID "prevMonth"
const prevMonth = document.querySelector('#prevMonth');

// Sélectionne l'élément HTML ayant l'ID "nextMonth"
const nextMonth = document.querySelector('#nextMonth');

// Crée une nouvelle instance de la classe Date, représentant la date et l'heure actuelles
let currentDate = new Date();

// Récupère le mois actuel (0-11) à partir de l'objet Date
let currentMonth = currentDate.getMonth();

// Récupère l'année actuelle à partir de l'objet Date
let currentYear = currentDate.getFullYear();

prevMonth.addEventListener('click', function() {
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
  generateCalendar();
});

nextMonth.addEventListener('click', function() {
  currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
  currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
  generateCalendar();
});

function generateCalendar() {
  const calendarBody = document.querySelector('#calendar-body');
  calendarBody.innerHTML = '';
  monthAndYear.innerHTML = `${getMonthName(currentMonth)} ${currentYear}`;
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let dayCount = 1;

for (let i = 0; i < 6; i++) {
  const row = document.createElement('tr');

  for (let j = 0; j < 7; j++) {
    const menuBtn = document.createElement('button'); // créer un bouton au lieu d'une cellule
    const cell = document.createElement('td');
    cell.appendChild(menuBtn); // ajouter le bouton à la cellule

    if (i === 0 && j < firstDay) {
      const textNode = document.createTextNode('');
      menuBtn.appendChild(textNode); // ajouter le contenu de texte au bouton au lieu de la cellule
      menuBtn.disabled = true; // désactiver le bouton pour les cases vides
    }
    else if (dayCount <= daysInMonth) {
      const textNode = document.createTextNode(dayCount);

      if (currentYear === currentDate.getFullYear() && currentMonth === currentDate.getMonth() && dayCount === currentDate.getDate()) {
        cell.classList.add('today');
      }

      menuBtn.appendChild(textNode);
      menuBtn.addEventListener('click', function() {
      var menuBtn = document.getElementById('menu-btn');
      var menu = document.getElementById('menu2'); 
      menu.classList.toggle('is-open');
      });
      dayCount++;
    }

    row.appendChild(cell);
  }

  calendarBody.appendChild(row);
}

}

function getMonthName(monthNumber) {
  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  return monthNames[monthNumber];
}

generateCalendar();




var formulaire = document.getElementById("monFormulaire");
var liste = document.getElementById("maListe");
var button2 = document.getElementById("button2");

formulaire.addEventListener("submit", function(event) {
  event.preventDefault();
});

// Ajouter l'écouteur d'événements "click" sur le bouton en dehors de l'écouteur d'événements "submit"
button2.addEventListener("click", function() {
  var cases = liste.querySelectorAll("input[type=checkbox]");
  var somme = 0; // initialiser la somme à zéro
  var message = ""; // initialiser un message vide

  for (var i = 0; i < cases.length; i++) {
    if (cases[i].checked) {
      // convertir la valeur de la case à un nombre
      var valeur = Number(cases[i].value);
      // vérifier si la valeur est un nombre ou pas
      if (isNaN(valeur)) {
        // si la valeur n'est pas un nombre, ajouter un message d'erreur au message
        message +=" + " +cases[i].value ;
      } else {
        // si la valeur est un nombre, l'ajouter à la somme
        somme += valeur;
      }
    }
  }

  // afficher la somme et le message
  alert("Le prix minimum sera de : " + somme  + "€" + message);
});


