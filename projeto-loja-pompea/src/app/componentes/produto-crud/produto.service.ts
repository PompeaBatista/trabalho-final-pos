import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = 'http://localhost:8080/produto';

  constructor(private http: HttpClient) { }

  add(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.url}/add`, produto);
  }

  all(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.url}/all`);
  }

  findId(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.url}/find/${id}`);
  }

  updateId(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.url}/update/${produto.id}`, produto);
  }

  deleteId(id: number): Observable<Produto> {
    return this.http.delete<Produto>(`${this.url}/delete/${id}`);
  }

}


