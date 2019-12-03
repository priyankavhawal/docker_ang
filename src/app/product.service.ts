import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }
  getProducts()
  {
    return this.http.get("http://192.168.1.108:9000/product");
  }
}
