import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from './fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private url = 'http://localhost:8080/fornecedor';

  constructor(private http: HttpClient) { }

  add(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(`${this.url}/add`, fornecedor);
  }

  all(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(`${this.url}/all`);
  }

  findId(id: string): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.url}/find/${id}`);
  }

  updateId(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.put<Fornecedor>(`${this.url}/update/${fornecedor.id}`, fornecedor);
  }

  deleteId(id: number): Observable<Fornecedor> {
    return this.http.delete<Fornecedor>(`${this.url}/delete/${id}`);
  }

}
