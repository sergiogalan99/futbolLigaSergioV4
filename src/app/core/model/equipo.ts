export class Equipo {
    // lo primero es crear las propiedades
    private _nombre: string;
    private _id: number;
    private _puntuacion = 0;
    private _golesAfavor = 0;
    private _golesEnContra = 0;


    // Tras crear las propiedades con el guion bajo se crea el constructor

    constructor(nombre: string, id: number) {
        this._nombre = nombre;
        this._id = id;
    }
    public annadirPuntos(points: number): void {
        this._puntuacion += points;
    }
    public annadirGolesAfavor(numberGoles: number): void {
        this._golesAfavor += numberGoles;
    }
    public annadirGolesEnContra(numberGoles: number): void {
       this._golesEnContra += numberGoles;
    }
    // Lo siguiente son los g&s

    /*
     * Getter nombre
     */
    public get nombre(): string {
        return this._nombre;
    }

    /*
     * Getter id
     */
    public get id(): number {
        return this._id;
    }

    /*
     * Setter nombre
     */
    public set nombre(value: string) {
        this._nombre = value;
    }

    /*
     * Setter id
     */
    public set id(value: number) {
        this._id = value;
    }
    /*
    * Getter puntuacion
    */
    public get puntuacion(): number {
        return this._puntuacion;
    }

    /*
     * Setter puntuacion
     */
    public set puntuacion(value: number) {
        this._puntuacion = value;
    }

    public get golesAfavor (): number {
        return this._golesAfavor;
    }

    public get golesEnContra(): number {
        return this._golesEnContra;
    }
}
