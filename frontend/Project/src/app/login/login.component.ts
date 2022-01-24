import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserModel } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordValid: string
  userModel: UserModel = new UserModel
  userLogin: UserLogin = new UserLogin

  constructor(
    private authService : AuthService,
    private router : Router
  ) {}

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmPassword(event: any) {
    this.passwordValid = event.target.value
  }
  

  Register() {
    
    if(this.userModel.password != this.passwordValid){
      alert('As senhas estão incorretas.')
    } else  {
      this.authService.Register(this.userModel).subscribe((resp: UserModel) => {
        this.userModel = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }

  Login() {
    this.authService.Login(this.userLogin).subscribe((resp: UserLogin) =>{
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.name = this.userLogin.name
      environment.email = this.userLogin.email
      environment.idUser = this.userLogin.idUser

      this.router.navigate(['/firstPage'])
    }, error =>{
      if(error.status == 500){
        alert('Usuário ou senha estão incorretos')
      }
    })
  }


}
