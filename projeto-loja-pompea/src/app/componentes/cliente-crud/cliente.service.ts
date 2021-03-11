import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) { }

  add(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.url}/add`, cliente);
  }

  all(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.url}/all`);
  }

  findId(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/find/${id}`);
  }

  updateId(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.url}/update/${cliente.id}`, cliente);
  }

  deleteId(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.url}/delete/${id}`);
  }

}
