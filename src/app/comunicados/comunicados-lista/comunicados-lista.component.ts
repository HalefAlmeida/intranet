import { Component, OnInit } from '@angular/core';
import { Comunicado } from 'src/app/shared/models/comunicado';
import { ComunicadoService } from '../comunicado.service';

@Component({
  selector: 'intranet-comunicados-lista',
  templateUrl: './comunicados-lista.component.html',
  styleUrls: ['./comunicados-lista.component.css'],
})
export class ComunicadosListaComponent implements OnInit {
  comunicados: Array<Comunicado> = [];
  constructor(private comunicadoService: ComunicadoService) {}

  ngOnInit(): void {
    this.comunicadoService.readAll().subscribe((comunicados) => {
      this.comunicados = comunicados;
    });
  }
}
