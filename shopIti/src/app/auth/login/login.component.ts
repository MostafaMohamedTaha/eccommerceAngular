import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isLogged: boolean=false;
  constructor(private auth:AuthService){}
  ngOnInit(): void {
    this.isLogged=this.auth.isUserLogged
  }
  login(){
    this.auth.login('username','password')
    this.isLogged=this.auth.isUserLogged
  }
  logout(){
    this.auth.logout()
    this.isLogged=this.auth.isUserLogged
  }
}
