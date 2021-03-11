import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

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

  deleteProdutos() {
    this.produtoService.deleteId(this.produto.id)
      .subscribe(produto => {
        console.log(produto);
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.deleteProdutos();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/produtos']);
  }
}
