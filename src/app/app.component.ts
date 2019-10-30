import { Resultado } from './core/model/resultado';


import { Liga } from './core/model/liga';
import { Equipo } from './core/model/equipo';
import { Component, ɵConsole } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  private title = 'futbolLigaSergio';
  private nombresArray: Array<string>;

  private _equipos: Equipo[] = [];
  private _resultados: Resultado[];
  private _jornadas: Resultado[];
  liga: Liga;

  private botonClasificacion: boolean = false;
  private clasificacionGeneral: boolean = false;
  private ocultarBoton: boolean = true;
  private botonJornadas: boolean = false;
  private jornadaAjornada: boolean = false;
  private ganador: boolean = false;

  private idaVuelta: boolean = false;
  private contador: number = 0;
  private seguirAñadiendo: boolean = true;
  private seleccionEquipo;

  constructor() {
    this._resultados = new Array();
    this._jornadas = new Array();
    this.nombresArray = new Array<string>();

  }
  mostrarClasificacion() {
    this.botonClasificacion = true;
    this.ocultarBoton = false;
    this.botonJornadas = true;



  }
  mostrarClasificacionTotal() {
    this.clasificacionGeneral = !this.clasificacionGeneral;

  }
  montarResultados() {
    var resultadosIda = this.liga.playLigaIda();
    var resultadosVuelta = this.liga.playLigaVuelta();
    for (let index = 0; index < resultadosIda.length; index++) {
      this._resultados.push(resultadosIda[index]);
    }
    
    for (let index = 0; index < resultadosVuelta.length; index++) {
      this._resultados.push(resultadosVuelta[index]);

    }
  }

  pasarJornada() {

    if (this.seguirAñadiendo) {
      for (let index = 0; index < this.equipos.length / 2; index++) {
        this._jornadas.push(this._resultados[this.contador]);
        this.obtenerDatosTotales(this.contador);
        this.liga.ordenarLiga();
        this.contador++;
        this.jornadaAjornada = true;
      }


    } else {
      this.jornadaAjornada = true;
    }

    if (this._resultados.length / 2 <= this.contador) {
      this.seguirAñadiendo = false;
      this.botonJornadas = false;
      this.ganador = true;
    
     

    }
  

  }

  private addArrayEquipo(): void {
    this.nombresArray.push(this.seleccionEquipo);
    this.seleccionEquipo = "";
  }
  private obtenerGanador(): string {
    return this._equipos[0].nombre;
  }
  private obtenerDatosTotales(contador: number): void {
    let result =this._jornadas[contador];
      this._equipos.forEach(team => {
        if (result.anfitrion === team) {
          team.annadirGolesAfavor(result.golesAnfitrion);
          team.annadirGolesEnContra(result.golesHuesped);
          team.annadirPuntos(result.puntosAnfitrion);
        } if (result.huesped === team) {
          team.annadirGolesAfavor(result.golesHuesped);
          team.annadirGolesEnContra(result.golesAnfitrion);
          team.annadirPuntos(result.puntosHuesped);

        }


      });
    
  }


  private crearEquipos(): void {
    for (let i = 0; i < this.nombresArray.length; i++) {
      this._equipos[i] = new Equipo(this.nombresArray[i], i);
    }

    this.liga = new Liga(this._equipos);
    this.montarResultados();


  }


  /**
   * Getter equipos
   * @return {Equipo[]}
   */
  public get equipos(): Equipo[] {
    return this._equipos;
  }

  /**
   * Setter equipos
   * @param {Equipo[]} value
   */
  public set equipos(value: Equipo[]) {
    this._equipos = value;
  }

  /**
   * Getter equipos
   * @return {Resultado[]}
   */
  public get resultados(): Resultado[] {
    return this._resultados;
  }

  /**
 * Getter equipos
 * @return {Resultado[]}
 */
  public get jornadas(): Resultado[] {
    return this._jornadas;
  }
  /**
   * Setter equipos
   * @param {Resultado[]} value
   */
  public set resultados(value: Resultado[]) {
    this._resultados = value;
  }
}


