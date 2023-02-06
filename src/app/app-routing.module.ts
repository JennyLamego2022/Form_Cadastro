import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { CardComponent } from './componentes/card/card.component';
import { FormComponent } from './componentes/form/form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCadastroComponent } from './componentes/editar-cadastro/editar-cadastro.component';
import { ExcluirCadastroComponent } from './componentes/excluir-cadastro/excluir-cadastro.component';
import { ListarCadastroComponent } from './componentes/listar-cadastro/listar-cadastro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'listarCadastro',
    component: ListarCadastroComponent
  },
  {
    path: 'editarCadastro',
    component: EditarCadastroComponent
  },
  {
    path: 'excluirCadastro/id',
    component: ExcluirCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
