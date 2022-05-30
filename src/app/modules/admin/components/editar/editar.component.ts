import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/jugador.model';
import { PlantillaService } from 'src/app/services/plantilla.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  jugador!: Jugador;
  form!: FormGroup;

  constructor(private plantillaService: PlantillaService, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    var url = new URL(window.location.href);
    this.jugador = this.plantillaService.getJugador(Number(url.searchParams.get("number")));

    this.form = this.fb.group({
      numero: [this.jugador.numero, Validators.required],
      nombre: [this.jugador.nombre, Validators.required],
      apellidos: [this.jugador.apellidos, Validators.required],
      posicion: [this.jugador.posicion, Validators.required],
      imagen: [this.jugador.imagen, Validators.required],
    })
  }

  editar(jugador: Jugador) {
    const newJug: Jugador = {
      numero: this.form.value.numero,
      nombre: this.form.value.nombre,
      apellidos: this.form.value.apellidos,
      posicion: this.form.value.posicion,
      imagen: this.form.value.imagen
    };

    this.plantillaService.edit(jugador, newJug);

    this.route.navigate(['admin/plantilla']);
  }

}
