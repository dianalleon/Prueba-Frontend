import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AvisosComponent } from './components/avisos/avisos.component';
import { MapaComponent } from './components/mapa/mapa.component';

const routes: Routes = [
  {
    path: 'avisos',
    component: AvisosComponent,
    pathMatch: 'full'
  },
  {
    path: 'mapa',
    component: MapaComponent
  },
  {

      path: '**',
      redirectTo: 'avisos',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
