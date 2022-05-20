import * as personne from './clients.js'
console.log(`bienvenue dans le garage de Jean`);
console.log("--------------------------------------------------------------------------");
setInterval(() => {
    console.log("Wouaf,Wouaf")
}, 2000);


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

let i=0
for (i; i < salle_attente.personnes.length ; i+2) {
    bureau.personnes.unshift(salle_attente.personnes[i]);
    console.log(`${salle_attente.personnes[i].nom} est rentré dans le bureau.`);
    salle_attente.personnes.splice(0,1);
    console.log(`Après inspection ${garagiste.nom} trouve le problème du véicule et fais un devis pour l'inspection`);
    garagiste.argent += 45;
    bureau.personnes[i].devis = pieces[i];
    bureau.personnes[i].argent -= 45;
    console.log(`${bureau.personnes[0].nom} a payé 45e pour le devis, il a encore un total de ${bureau.personnes[0].argent}e pour faire sa réparation.`)
    console.log(`le garagiste jean a donc gagné pour le moment : ${garagiste.argent}€ sur ce client.`);
    console.log(`Les clients qui attendent leur tour pour réparer leur voiture sont`);
    console.table(salle_attente.personnes);
    caisse.personnes.push(bureau.personnes[0]);
    bureau.personnes.shift();
    i;
}
console.log("----------------------------------------------------------------------------------------------------");

console.log(`les cinqs clients sont entrain d'attendre ${garagiste.nom} à la caisse`);
console.table(caisse.personnes);
console.log(`Après l'inspection de jean voici les problèmes qu'il a diagnostiqué sur les véhicule des clients`)
console.log("----------------------------------------------------------------------------------------------------");
console.table(rouleur);
console.table(pneu);
console.table(feu);
console.table(moteur);
console.table(huile);
console.log("----------------------------------------------------------------------------------------------------");



export {Lieux, caisse, salle_attente, bureau, Devis, pieces};