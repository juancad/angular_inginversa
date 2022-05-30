import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/jugador.model';
import { PlantillaService } from 'src/app/services/plantilla.service';

@Component({
  selector: 'app-addjugador',
  templateUrl: './addjugador.component.html',
  styleUrls: ['./addjugador.component.scss']
})
export class AddjugadorComponent implements OnInit {
  form!: FormGroup;

  constructor(private plantillaService: PlantillaService, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      numero: ["", Validators.required],
      nombre: ["", Validators.required],
      apellidos: ["", Validators.required],
      posicion: ["", Validators.required],
      imagen: ["", Validators.required],
    })
  }

  onAdd() {
    const newJug: Jugador = {
      numero: this.form.value.numero,
      nombre: this.form.value.nombre,
      apellidos: this.form.value.apellidos,
      posicion: this.form.value.posicion,
      imagen: this.form.value.imagen
    };

    this.plantillaService.addJugador(newJug);
  }

}
