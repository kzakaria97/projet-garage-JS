console.log(`bienvenue dans le garage de Jean`);
console.log("--------------------------------------------------------------------------");

let garagiste = {
    nom : "jean", 
    argent : 0,
}

class Lieux {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}

let caisse = new Lieux("Caisse", []);

let bureau = new Lieux("Bureau", []);
bureau.personnes = [garagiste];
console.table(`${garagiste.nom} est assis dans son ${bureau.nom}. cinqs clients entrent dans le garage et se dirigent vers la salle d'attente`);

let salle_attente = new Lieux("Salle d'attente",[]);
salle_attente.personnes = [personne.client_1, personne.client_2, personne.client_3, personne.client_4, personne.client_5];
console.log(`les clients dans la salle d'attente sont :`);
console.table(salle_attente.personnes);
console.log("------------------------------------------------------------------------------------------------");

class Devis {
    constructor(probleme, pieces, prix) {
        this.probleme = probleme;
        this.pieces = pieces;
        this.prix = prix;
    }
}

let rouleur = new Devis("rouleur", "rouleur neuf", 45);
let pneu = new Devis("pneu crevé", "pneu neuf", 50);
let feu = new Devis("feu avant cassé", "feu neuf", 60);
let moteur = new Devis("moteur en panne", "moteur neuf", 800);
let huile = new Devis("huile à moteur vide", "huile neuf", 100);

let pieces = [rouleur, pneu, feu, moteur, huile];