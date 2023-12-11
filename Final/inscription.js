// Fonction principale pour valider le formulaire
function validerFormulaire() {
    // Récupérer l'élément du formulaire
    var formulaire = document.getElementById('coordonnees');

    // Vérifier si tous les champs requis sont remplis
    if (!verifierChampsRequis(formulaire)) {
        alert('Veuillez remplir tous les champs requis.');
        return false;
    }

    // Récupérer la valeur du champ de mot de passe
    var motDePasse = document.getElementById('mot_de_passe').value;

    // Vérifier la longueur du mot de passe
    if (!verifierLongueurMotDePasse(motDePasse)) {
        alert('Le mot de passe doit être exactement de 8 caractères.');
        return false;
    }

    // Vérifier le choix du genre
    if (!verifierChoixGenre()) {
        alert('Veuillez choisir un genre.');
        return false;
    }

    // Si toutes les validations réussissent, soumettre le formulaire
    soumettreFormulaire(formulaire);
}

// Fonction pour vérifier si tous les champs requis sont remplis
function verifierChampsRequis(formulaire) {
    var champsRequis = formulaire.querySelectorAll('[required]');
    // Utiliser la méthode every pour vérifier chaque champ requis
    return Array.from(champsRequis).every(function(champ) {
        return champ.value.trim() !== '';
    });
}

// Fonction pour vérifier la longueur du mot de passe
function verifierLongueurMotDePasse(motDePasse) {
    return motDePasse.length === 8;
}

// Fonction pour vérifier le choix du genre
function verifierChoixGenre() {
    var genreSelectionne = document.querySelector('#genre input[name="genre"]:checked');
    return genreSelectionne !== null;
}

// Fonction pour soumettre effectivement le formulaire
function soumettreFormulaire(formulaire) {
    formulaire.submit();
}




  