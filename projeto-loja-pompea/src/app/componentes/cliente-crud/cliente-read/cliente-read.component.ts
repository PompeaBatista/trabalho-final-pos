import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  private url = '/clientes';

  clientes: Cliente[]

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  all(){
    this.clienteService.all().subscribe(clientes => {
      this.clientes = clientes
    })
  }

  telaAdd(){
    this.router.navigate([`${this.url}/add`])
  }

}
