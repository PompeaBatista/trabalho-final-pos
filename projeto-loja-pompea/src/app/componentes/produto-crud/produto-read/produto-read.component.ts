import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  private url = '/produto';

  produtos: Produto[]

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
  }

  all(){
    this.produtoService.all().subscribe(produtos => {
      this.produtos = produtos
    })
  }

  telaAdd(){
    this.router.navigate([`${this.url}/add`])
  }

}
