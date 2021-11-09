import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunicadosListaComponent } from './comunicados/comunicados-lista/comunicados-lista.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        component: ComunicadosListaComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
