import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteCreateComponent } from './componentes/cliente-crud/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './componentes/cliente-crud/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './componentes/cliente-crud/cliente-update/cliente-update.component';
import { HomeComponent } from './componentes/home/home.component';
import { ClienteComponent } from './componentes/views/cliente/cliente.component';
import { ProdutoCreateComponent } from './componentes/produto-crud/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './componentes/produto-crud/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from './componentes/produto-crud/produto-update/produto-update.component';
import { ProdutoComponent } from './componentes/views/produto/produto.component';
import { FornecedorComponent } from './componentes/views/fornecedor/fornecedor.component';
import {FornecedorCreateComponent } from './componentes/fornecedor-crud/fornecedor-create/fornecedor-create.component';
import { FornecedorUpdateComponent } from './componentes/fornecedor-crud/fornecedor-update/fornecedor-update.component';
import { FornecedorDeleteComponent } from './componentes/fornecedor-crud/fornecedor-delete/fornecedor-delete.component';

const routes: Routes = [
  {path: "",component:HomeComponent},
  {path: "clientes",component:ClienteComponent}, 
  {path: "clientes/add",component:ClienteCreateComponent},
  {path: "clientes/update/:id",component:ClienteUpdateComponent},
  {path: "clientes/delete/:id",component:ClienteDeleteComponent},
  {path: "produtos",component:ProdutoComponent},
  {path: "produto/add",component:ProdutoCreateComponent},
  {path: "produto/update/:id",component:ProdutoUpdateComponent},
  {path: "produto/delete/:id",component:ProdutoDeleteComponent},
  {path: "fornecedores",component:FornecedorComponent},
  {path: "fornecedor/add",component:FornecedorCreateComponent},
  {path: "fornecedor/update/:id",component:FornecedorUpdateComponent},
  {path: "fornecedor/delete/:id",component:FornecedorDeleteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
