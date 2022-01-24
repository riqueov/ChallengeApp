import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProductModel } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  token = {
    headers : new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProducts(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>('http://localhost:8080/product', this.token)
  }

  getByIdProduct(idProduct : number): Observable<ProductModel>{
    return this.http.get<ProductModel>(`http://localhost:8080/product/${idProduct}`, this.token)
  }

  postProduct(productModel: ProductModel): Observable<ProductModel>{
    return this.http.post<ProductModel>('http://localhost:8080/product', productModel, this.token)
  }

  deleteProduct(idProduct: number){
    return this.http.delete(`http://localhost:8080/product/${idProduct}`, this.token)
  }
}
