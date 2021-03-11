import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteComponent } from './componentes/views/cliente/cliente.component';
import { ClienteReadComponent } from './componentes/cliente-crud/cliente-read/cliente-read.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClienteCreateComponent } from './componentes/cliente-crud/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './componentes/cliente-crud/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './componentes/cliente-crud/cliente-delete/cliente-delete.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProdutoReadComponent } from './componentes/produto-crud/produto-read/produto-read.component';
import { ProdutoComponent } from './componentes/views/produto/produto.component';
import { ProdutoCreateComponent } from './componentes/produto-crud/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './componentes/produto-crud/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './componentes/produto-crud/produto-delete/produto-delete.component';
import { FornecedorReadComponent } from './componentes/fornecedor-crud/fornecedor-read/fornecedor-read.component';
import { FornecedorComponent } from './componentes/views/fornecedor/fornecedor.component';
import { FornecedorCreateComponent } from './componentes/fornecedor-crud/fornecedor-create/fornecedor-create.component';
import { FornecedorUpdateComponent } from './componentes/fornecedor-crud/fornecedor-update/fornecedor-update.component';
import { FornecedorDeleteComponent } from './componentes/fornecedor-crud/fornecedor-delete/fornecedor-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ClienteComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    HomeComponent,
    ProdutoReadComponent,
    ProdutoComponent,
  ProdutoUpdateComponent,
    ProdutoCreateComponent,
    ProdutoDeleteComponent,
    FornecedorReadComponent,
    FornecedorComponent,
    FornecedorCreateComponent,
    FornecedorUpdateComponent,
    FornecedorDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
