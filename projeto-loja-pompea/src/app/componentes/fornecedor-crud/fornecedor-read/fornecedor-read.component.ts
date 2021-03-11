import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor } from '../fornecedor';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent implements OnInit {

  private url = '/fornecedor';

  fornecedores: Fornecedor[]

  constructor(private fornecedorService: FornecedorService, private router: Router) { }

  ngOnInit(): void {
  }

  all(){
    this.fornecedorService.all().subscribe(fornecedores => {
      this.fornecedores = fornecedores
    })
  }

  telaAdd(){
    this.router.navigate([`${this.url}/add`])
  }

}
