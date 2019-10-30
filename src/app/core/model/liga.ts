import { Resultado } from './resultado';
import { Equipo } from './equipo';


export class Liga {

    private _totales: Array<Resultado>;
    private _equipos: Equipo[];

    constructor(equipos: Equipo[]) {
        this._totales = new Array<Resultado>();
        this._equipos = equipos;

    }

    public playLigaIda(): Array<Resultado> {
        for (let i = 0; i < this._equipos.length - 1; i++) {
            this.mostrarIda(i);
            this.combinar();
        }
               return this._totales;
    }

    public playLigaVuelta(): Array<Resultado> {
        let tamano: number = (this._equipos.length - 1);
        for (let i = 0; i < this._equipos.length - 1; i++) {

            this.mostrarVuelta(tamano);
            this.combinar();
            tamano++;
        }
        return this._totales;


    }

    public combinar(): void {
        let buffer = this._equipos[this._equipos.length - 1];

        for (let i = this._equipos.length - 1; i > 1; i--) {
            this._equipos[i] = this._equipos[i - 1];
        }
        this._equipos[1] = buffer;
    }

    public mostrarIda(jornada: number): void {
        for (let i = 0, j = this._equipos.length - 1; i < j; i++ , j--) {
            this._totales.push(new Resultado(jornada, this._equipos[i], this._equipos[j], this.getRandom(0, 10), this.getRandom(0, 10)));

        }


    }
    public mostrarVuelta(jornada: number): void {
        for (let i = 0, j = this._equipos.length - 1; i < j; i++ , j--) {

            this._totales.push(new Resultado(jornada, this._equipos[j], this._equipos[i], this.getRandom(0, 10), this.getRandom(0, 10)));
        }
    }

    private getRandom(min: number, max: number) {
        return Math.round(Math.random() * (max - min) + min);
    }

    public ordenarLiga() {
        this._equipos.sort(function (a, b) {
            return (b.puntuacion - a.puntuacion);
        });
    }

}
