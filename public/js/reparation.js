import * as personne from './clients.js'

import {Lieux,caisse, Devis, pieces} from './garage.js'


for(let i=0;i<caisse.personnes.length;i++){
    if(caisse.personnes[i].argent>=pieces[i].prix){
        caisse.personnes[i].argent -= pieces[i].prix;
        console.table(`merci de votre visite mr/mme ${caisse.personnes[i].nom},vous avez payé ${pieces[i].prix} pour le prix de la pièce neuve (${pieces[i].pieces})`);
        console.log(`votre véhicule est prêt à prendre la route`);
        console.log(`${caisse.personnes[i].nom} repare chez lui avec ${caisse.personnes[i].argent}e en poche`);
        console.log(`-----------------------------------------------------`);
    }
    else{
        console.log(`désolé vous n'avez pas assez d'argent, ${caisse.personnes[i].nom}. Malheuresement votre véhicule ira à la casse`);
        console.log(`votre véhicule ne peut pas être réparé repartez en bus`);
        console.log(`-----------------------------------------------------`);
    }
}