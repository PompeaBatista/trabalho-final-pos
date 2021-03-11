import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {
  produto: Produto;

  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private produtoService: ProdutoService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoService.findId(id).subscribe(produto => {
      this.produto = produto
    })
  }

  updateProdutos() {
    this.produtoService.updateId(this.produto)
      .subscribe(produto => {
        console.log(produto);
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateProdutos();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/produtos']);
  }
}
