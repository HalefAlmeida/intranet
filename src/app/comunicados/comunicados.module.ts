import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { ComunicadosListaComponent } from './comunicados-lista/comunicados-lista.component';

@NgModule({
  declarations: [ComunicadosListaComponent],
  imports: [CommonModule, MaterialModule],
})
export class ComunicadosModule {}
