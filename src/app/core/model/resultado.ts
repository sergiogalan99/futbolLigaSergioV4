import { Puntuacion } from './puntuacion';
import { Equipo } from './equipo';

export class Resultado {
    private _id: number;
    private _anfitrion: Equipo;
    private _huesped: Equipo;
    private _golesAnfitrion: number;
    private _golesHuesped: number;
    private _numeroJornada: number;

    constructor(numeroJornada: number, anfitrion: Equipo, huesped: Equipo, golesAnfitrion: number, golesHuesped: number) {
        this._id = anfitrion.id * 10 + huesped.id;
        this._anfitrion = anfitrion;
        this._huesped = huesped;
        this._golesAnfitrion = golesAnfitrion;
        this._golesHuesped = golesHuesped;
        this._numeroJornada=numeroJornada;
    }

    public get puntosAnfitrion() {
        let puntos = Puntuacion.empatado;
        if (this.golesAnfitrion > this.golesHuesped) {
            puntos = Puntuacion.ganado;
        } else if (this.golesAnfitrion < this.golesHuesped) {
            puntos = Puntuacion.perdido;
        }
        return puntos;
    }

    public get puntosHuesped() {
        let puntosHues = Puntuacion.empatado;
        if (this.puntosAnfitrion !== Puntuacion.empatado) {
            puntosHues = Puntuacion.ganado - this.puntosAnfitrion;
        }
        return puntosHues;
    }

    /**
     * Getter id
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter anfitrion
     */
    public get anfitrion(): Equipo {
        return this._anfitrion;
    }

    /**
     * Getter huesped
     */
    public get huesped(): Equipo {
        return this._huesped;
    }

    /**
     * Getter golesAnfitrion
     */
    public get golesAnfitrion(): number {
        return this._golesAnfitrion;
    }

    /**
     * Getter golesHuesped
     */
    public get golesHuesped(): number {
        return this._golesHuesped;
    }
 /**
     * Getter golesHuesped
     */
    public get numeroJornada(): number {
        return this._numeroJornada;
    }
    /**
     * Setter id
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter anfitrion
     */
    public set anfitrion(value: Equipo) {
        this._anfitrion = value;
    }

    /**
     * Setter huesped
     */
    public set huesped(value: Equipo) {
        this._huesped = value;
    }

    /**
     * Setter golesAnfitrion
     */
    public set golesAnfitrion(value: number) {
        this._golesAnfitrion = value;
    }

    /**
     * Setter golesHuesped
     */
    public set golesHuesped(value: number) {
        this._golesHuesped = value;
    }

}
