class Clients {
    constructor(nom, vehicule, argent, probleme, facture,devis) {
        this.nom = nom;
        this.vehicule = vehicule;
        this.argent = argent;
        this.probleme = probleme;
        this.facture = facture;
       this.devis = devis;
    }
}

let client_1 = new Clients("Marcus", "BMW", 200, "rouleur");
let client_2 = new Clients("Julien", "Peugeot", 100, "pneu crevé");
let client_3 = new Clients("Léa", "Renault", 300, "feu avant cassé");
let client_4 = new Clients("Serge", "Mercedes", 500, "moteur en panne");
let client_5 = new Clients("Léo", "Audi", 600, "huile à moteur vide");

let clients = [client_1,client_2,client_3,client_4,client_5];
export {Clients, clients, client_1,client_2,client_3,client_4,client_5}