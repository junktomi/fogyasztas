import fs from 'node:fs'
import * as csv from 'csv/sync'

export default class Fuvar {
    constructor(fuvarosId, fogyasztas, uzemanyagAr, tavolsag) {
        this.fuvarosId = Number(fuvarosId);
        this.fogyasztas = Number(fogyasztas);
        this.uzemanyagAr = Number(uzemanyagAr);
        this.tavolsag = Number(tavolsag);
    }

    osszFogyasztas() {
        return (this.fogyasztas / 100) * this.tavolsag;
    }
}
