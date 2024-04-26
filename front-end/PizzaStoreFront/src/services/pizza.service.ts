import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Pizza[]> {
    return this.httpClient.get<Pizza[]>('http://localhost:5128/pizzas');
  }

  getById(id:string): Observable<Pizza> {
    return this.httpClient.get<Pizza>(`http://localhost:5128/pizzas/${id}`);
  }


}
