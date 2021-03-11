import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {
  cliente: Cliente;

  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private clienteService: ClienteService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.clienteService.findId(id).subscribe(cliente => {
      this.cliente = cliente
    })
  }

  updateClientes() {
    this.clienteService.updateId(this.cliente)
      .subscribe(cliente => {
        console.log(cliente);
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateClientes();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/clientes']);
  }
}
