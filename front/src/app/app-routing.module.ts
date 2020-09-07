import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoChamadoComponent } from './novo-chamado/novo-chamado.component'
import { ChamadoComponent } from './chamado/chamado.component';
import { ChamadoDetalheComponent } from './chamado-detalhe/chamado-detalhe.component';

const routes: Routes = [
  {
    path: 'chamado',
    component: ChamadoComponent,
    data: { title: 'Chamado' }
  },
  {
    path: 'novochamado',
    component: NovoChamadoComponent,
    data: { title: 'Novo Chamado' }
  },
  {
    path: 'chamado-detalhe/:id',
    component: ChamadoDetalheComponent,
    data: { title: 'Detalhe do Chamado' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
