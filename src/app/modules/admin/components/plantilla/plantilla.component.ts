import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/jugador.model';
import { PlantillaService } from 'src/app/services/plantilla.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {
  plantilla = this.plantillaService.getInscripciones();

  constructor(private plantillaService: PlantillaService, private route: Router) { }

  ngOnInit(): void {
  }

  onDelete(jugador: number) {
    this.plantillaService.delete(jugador);
  }

  onEdit(number: number) {
    this.route.navigate(['admin/editar'], { queryParams: { number: number } });
  }
}
