import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './componentes/form/form.component';
import { CardComponent } from './componentes/card/card.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { EditarCadastroComponent } from './componentes/editar-cadastro/editar-cadastro.component';
import { ExcluirCadastroComponent } from './componentes/excluir-cadastro/excluir-cadastro.component';
import { ListarCadastroComponent } from './componentes/listar-cadastro/listar-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardComponent,
    CadastroComponent,
    EditarCadastroComponent,
    ExcluirCadastroComponent,
    ListarCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
