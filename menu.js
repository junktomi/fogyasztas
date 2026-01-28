import readline from "readline";
import { readCSV } from "./services/csvService.js";
import {
    getFuvarok,
    addFuvar,
    legrovidebbUt,
    legnagyobbFogyasztas
} from "./services/fuvarService.js";
import Fuvar from "./models/Fuvar.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log(`
1 - Új fuvar felvitele
2 - Fuvarosok listája
3 - Fuvarok listája
4 - Legrövidebb út
5 - Legnagyobb fogyasztás
0 - Kilépés
    `);

    rl.question("Választás: ", handleMenu);
}

function handleMenu(choice) {
    switch (choice) {
        case "1": ujFuvar(); break;
        case "2": fuvarosok(); break;
        case "3": fuvarok(); break;
        case "4": shortest(); break;
        case "5": biggest(); break;
        case "0": rl.close(); break;
        default: menu();
    }
}

function fuvarosok() {
    const list = readCSV("./data/fuvarosok.csv");
    
    console.log("DEBUG:", list);
    list.forEach(f => console.log(`${f.id} - ${f.nev}`));
    menu();
}

function ujFuvar() {
    rl.question("Fuvaros ID: ", id => {
        rl.question("Fogyasztás (l/100km): ", fogy => {
            rl.question("Üzemanyag ár (Ft/l): ", ar => {
                rl.question("Távolság (km): ", t => {
                    addFuvar(new Fuvar(id, fogy, ar, t));
                    console.log("Fuvar sikeresen rögzítve ✅");
                    menu();
                });
            });
        });
    });
}

function fuvarok() {
    const list = getFuvarok();
    if (list.length === 0) {
        console.log("Nincs még felvett fuvar.");
    } else {
        list.forEach((f, i) => {
            console.log(
                `${i + 1}. ${f.tavolsag} km | ${f.osszFogyasztas().toFixed(2)} liter`
            );
        });
    }
    menu();
}

function shortest() {
    const res = legrovidebbUt();
    console.log(res ? `Legrövidebb: ${res} km` : "Nincs adat");
    menu();
}

function biggest() {
    const res = legnagyobbFogyasztas();
    console.log(
        res ? `Legnagyobb fogyasztás: ${res.toFixed(2)} liter` : "Nincs adat"
    );
    menu();
}

export default menu;
