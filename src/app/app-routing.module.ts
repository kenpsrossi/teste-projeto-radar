import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';

import { InserirClienteComponent } from './cliente/inserir-cliente/inserir-cliente.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';

const routes: Routes = [
  //rota lista cliente
  { path: '',
  redirectTo: 'clientes/listar',
  pathMatch: 'full'},
  { path: 'clientes',
  redirectTo: 'clientes/listar' },
  { path: 'clientes/listar',
  component: ListarClienteComponent },
  //rota  inserir cliente
  { path: 'clientes/novo',
  component: InserirClienteComponent},
  //rota editar cliente
  { path: 'clientes/editar/:id',
   component: EditarClienteComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
