import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProductModel } from '../model/Product';
import { AuthService } from '../service/auth.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  product: ProductModel = new ProductModel()
  listProduct: ProductModel[]

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/login'])
    }

    this.findAllProducts()
  }

  findAllProducts(){
    this.productService.getAllProducts().subscribe((resp: ProductModel[]) =>{
      this.listProduct = resp
    })
  }

  saveProduct(){

    this.productService.postProduct(this.product).subscribe((resp: ProductModel) =>{
      this.product = resp
      alert('Item adicionado com sucesso!')
      this.findAllProducts()
      this.product = new ProductModel()
    })
  }
}
