import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    descricao: '',
    precoUnitario: null,
    unidade: null,
    categoria: {
      id: null, 
      nome: '',
      ativo: null
  },
  fornecedor: {
  id: null,
  nome: '',
  telefone: '',
  cnpj: '',
  email: ''
  },

  marca: {
      id: null,
      nome: '',
      descricao: ''
  }
  }
  submitted = false;

  constructor(private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit() {
  }

  add() {
    this.produtoService.add(this.produto).subscribe(produto => {
      console.log(produto);
    }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.add();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/produto']);
  }
}
