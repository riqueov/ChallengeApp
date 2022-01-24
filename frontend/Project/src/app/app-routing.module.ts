import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDeleteComponent } from './delete/product-delete/product-delete.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: '', redirectTo:'login', pathMatch:'full'},

  {path:'firstPage', component: FirstPageComponent},
  {path:'login', component: LoginComponent},

  {path: 'product-delete/:idProduct', component: ProductDeleteComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
