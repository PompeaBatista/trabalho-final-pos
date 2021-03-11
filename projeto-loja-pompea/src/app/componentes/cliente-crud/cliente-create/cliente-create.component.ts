import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    nomeSocial: '',
    apelido: '',
    dataNascimento: null,
    sexo: '',
    cpf: '',
    email: '',
    telefone: ''
  }
  submitted = false;

  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit() {
  }

  add() {
    this.clienteService.add(this.cliente).subscribe(cliente => {
      console.log(cliente);
    }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.add();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/clientes']);
  }
}
