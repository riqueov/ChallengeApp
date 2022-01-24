import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: ProductModel = new ProductModel()
  idProduct: number
  
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/login'])
    }

    let id = this.route.snapshot.params['idProduct']
    this.findByIdProduct(id)
  }

findByIdProduct(id: number){
  this.productService.getByIdProduct(id).subscribe((resp: ProductModel)=>{
    this.product = resp
  })
}

delete(){
  this.productService.deleteProduct(this.idProduct).subscribe(()=>{
    alert('Item apagado com sucesso!')
    this.router.navigate(['/first-page'])
  })
} 


}