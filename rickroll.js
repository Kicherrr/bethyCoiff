 var boutonnnnn = document.getElementById("rick-roll");
  var musique = document.getElementById("musique");
  boutonnnnn.onclick = function() {
    musique.play();
  };

// Définir un tableau pour stocker les identifiants des boutons
var buttonIds = ["b1", "b2", "b3", "b4", "b5"];

// Définir une variable pour suivre la progression du joueur
var progress = 0;

// Récupérer l'élément audio pour le son
var audio = document.getElementById("dingo");
var win = document.getElementById("OhYeah");

// Ajouter des écouteurs d'événements à chaque bouton
buttonIds.forEach(function(buttonId) {
  var button = document.getElementById(buttonId);
  button.addEventListener("click", function() {
    // Vérifier si le bouton cliqué est le bon
    if (buttonId === buttonIds[progress]) {
      // Augmenter le score du joueur
      progress++;
      // Jouer le son
      audio.play();
      // Vérifier si le joueur a cliqué sur tous les boutons dans le bon ordre
      if (progress === buttonIds.length) {
        // Afficher une alerte si le joueur a réussi
        alert("Bravo, vous avez cliqué sur tous les boutons dans le bon ordre ! ");
        alert("Vous avez donc gagner une remise imédiate de 1Centime à votre porchaine visite! ");
        win.play();

        // Réinitialiser le score du joueur
        progress = 0;
      }
    } else {
      // Réinitialiser le score du joueur si le bouton cliqué est incorrect
      progress = 0;
    }
  });
});

