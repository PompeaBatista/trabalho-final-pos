import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

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

  deleteClientes() {
    this.clienteService.deleteId(this.cliente.id)
      .subscribe(cliente => {
        console.log(cliente);
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.deleteClientes();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/clientes']);
  }
}
