import { readCSV, appendCSV } from "./csvService.js";
import Fuvar from "../models/Fuvar.js";

const FUVAR_PATH = "./data/fuvarok.csv";

export function getFuvarok() {
    return readCSV(FUVAR_PATH).map(
        f => new Fuvar(f.fuvarosId, f.fogyasztas, f.uzemanyagAr, f.tavolsag)
    );
}

export function addFuvar(fuvar) {
    appendCSV(FUVAR_PATH, fuvar);
}

export function legrovidebbUt() {
    const fuvarok = getFuvarok();
    if (fuvarok.length === 0) return null;
    return Math.min(...fuvarok.map(f => f.tavolsag));
}

export function legnagyobbFogyasztas() {
    const fuvarok = getFuvarok();
    if (fuvarok.length === 0) return null;
    return Math.max(...fuvarok.map(f => f.osszFogyasztas()));
}
