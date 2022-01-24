import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserModel } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
 
  
  Login(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/user/login', userLogin)
  }

  Register(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>('http://localhost:8080/user/register', user)
  }

  Logged(){
    let ok = false

    if (environment.token != ''){
      ok = true
    }
    return ok
  }

}
