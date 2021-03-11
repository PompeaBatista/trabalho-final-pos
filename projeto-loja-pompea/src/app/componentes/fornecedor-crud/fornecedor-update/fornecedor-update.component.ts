import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../fornecedor';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent implements OnInit {
  fornecedor: Fornecedor;

  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private fornecedorService: FornecedorService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.fornecedorService.findId(id).subscribe(fornecedor => {
      this.fornecedor = fornecedor
    })
  }

  updateFornecedors() {
    this.fornecedorService.updateId(this.fornecedor)
      .subscribe(fornecedor => {
        console.log(fornecedor);
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateFornecedors();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/fornecedores']);
  }
}
