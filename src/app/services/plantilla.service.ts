import { Injectable } from '@angular/core';
import { Jugador } from '../jugador.model';

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {

  plantilla: Array<Jugador> = [
    {
      numero: 1, nombre: "Raúl", apellidos: "Fernández-Cavada Mateos", posicion: "Portero", imagen: "https://files.proyectoclubes.com/las-palmas/202108/250x250_1210292301-rau--l-f.jpg",
    },
    {
      numero: 2, nombre: "Alejandro", apellidos: "Díez Salomón", posicion: "Defensa", imagen: "https://files.proyectoclubes.com/las-palmas/202108/250x250_1210292102-ale-di--ez.jpg",
    },
    {
      numero: 3, nombre: "Hernâni", apellidos: "Santos Fortes", posicion: "Delantero", imagen: "https://files.proyectoclubes.com/las-palmas/202201/250x250_0713072825-hernani-web.png.jpg",
    },
    {
      numero: 4, nombre: "José Alexander", apellidos: "Suárez Suárez", posicion: "Defensa", imagen: "https://files.proyectoclubes.com/las-palmas/202108/250x250_1210292004-a--lex-sua--rez.jpg",
    },
    {
      numero: 5, nombre: "Erick", apellidos: "Ferigra", posicion: "Defensa", imagen: "https://files.proyectoclubes.com/las-palmas/202108/250x250_1210292505-ferigra.jpg",
    },
    {
      numero: 6, nombre: "Eric", apellidos: "Curbelo de la Fe", posicion: "Defensa", imagen: "https://files.proyectoclubes.com/las-palmas/202108/250x250_1210293606-e.-curbelo.jpg",
    },
    {
      numero: 7, nombre: "Adalberto", apellidos: "Peñaranda", posicion: "Delantero", imagen: "https://files.proyectoclubes.com/las-palmas/202108/250x250_1210292807-pen--aranda.jpg",
    },
    {
      numero: 8, nombre: "Maikel", apellidos: "Mesa Piñero", posicion: "Centrocampista", imagen: "https://files.proyectoclubes.com/las-palmas/202108/250x250_1210292208-maikel-m.jpg",
    },
    {
      numero: 9, nombre: "Rafael Sebastián", apellidos: "Mujica García", posicion: "Delantero", imagen: "https://files.proyectoclubes.com/las-palmas/202109/250x250_0115113109-r-mujica.jpg",
    },
    {
      numero: 10, nombre: "Jesé", apellidos: "Rodríguez Ruiz", posicion: "Delantero", imagen: "https://files.proyectoclubes.com/las-palmas/202108/250x250_1210293610-jese--.jpg",
    },
    {
      numero: 11, nombre: "Benito", apellidos: "Ramírez del Toro", posicion: "Delantero", imagen: "https://files.proyectoclubes.com/las-palmas/202108/250x250_1210292411-benito-j.jpg",
    },
    {
      numero: 12, nombre: "Enzo", apellidos: "Loiodice", posicion: "Centrocampista", imagen: "https://files.proyectoclubes.com/las-palmas/202108/250x250_1210292512-loiodice.jpg",
    },
  ]

  getInscripciones(): Array<Jugador> {
    return this.plantilla;
  }

  
  getJugador(numero: number): Jugador {
    let jug!: Jugador;

    this.plantilla.forEach((element,index)=>{
      if(numero == element.numero) 
      jug = this.plantilla[index];
   });
   return jug;
  }

  addJugador(jugador: Jugador) {
    this.plantilla.push(jugador);
  }

  delete(numero: number) {
    this.plantilla.forEach((element,index)=>{
      if(numero == element.numero) this.plantilla.splice(index,1);
   });
  }

  edit(jugador: Jugador, newJugador: Jugador) {
    this.plantilla.forEach((element,index)=>{
      if(element.numero == jugador.numero) this.plantilla[index] = newJugador;
   });
  }

  constructor() { }
}
