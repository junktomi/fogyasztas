export default class Fuvar {
    constructor(fuvarosId, fogyasztas, uzemanyagAr, tavolsag) {
        this.fuvarosId = Number(fuvarosId);
        this.fogyasztas = Number(fogyasztas); // l / 100 km
        this.uzemanyagAr = Number(uzemanyagAr); // Ft / liter
        this.tavolsag = Number(tavolsag); // km
    }

    osszFogyasztas() {
        return (this.fogyasztas / 100) * this.tavolsag;
    }
}
