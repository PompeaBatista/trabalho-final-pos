import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../fornecedor';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-delete',
  templateUrl: './fornecedor-delete.component.html',
  styleUrls: ['./fornecedor-delete.component.css']
})
export class FornecedorDeleteComponent implements OnInit {

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

  deleteFornecedors() {
    this.fornecedorService.deleteId(this.fornecedor.id)
      .subscribe(fornecedor => {
        console.log(fornecedor);
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.deleteFornecedors();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/fornecedors']);
  }
}
