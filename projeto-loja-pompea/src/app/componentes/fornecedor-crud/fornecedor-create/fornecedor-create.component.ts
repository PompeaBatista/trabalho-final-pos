import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';
import {Fornecedor} from '../fornecedor'

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {

  fornecedor: Fornecedor = {
    nome:'',
    telefone:'',
    cnpj: '',
    email: ''
   
  }
  submitted = false;

  constructor(private fornecedorService: FornecedorService,
    private router: Router) { }

  ngOnInit() {
  }

  add() {
    this.fornecedorService.add(this.fornecedor).subscribe(fornecedor => {
      console.log(fornecedor);
    }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.add();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/fornecedors']);
  }
}
