import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name = environment.name
  email = environment.email
  token = environment.token

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  logout(){
    this.router.navigate(['/login'])
    environment.token = ''
    environment.name = ''
    environment.email = ''
    environment.idUser = 0
  }

}
