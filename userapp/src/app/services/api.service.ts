import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductDto } from '../inventory/detailinformation/detailinformation.component';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //  users: UserDetailsModel[] = [];
  private apiUrl = "https://localhost:7086/api";

  constructor(private http:HttpClient) { }

  login(loginData: { email: string; password: string; }): Observable<any> {
    return this.http.post(`${this.apiUrl}/User/login`, loginData);
  }


  register(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/User/register`,data);
  }

  createProduct(productData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/User/create`, productData);
  }

  getAllProducts(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.apiUrl}/User/getall`);
  }
}
