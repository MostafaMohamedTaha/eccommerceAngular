import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedSub!:BehaviorSubject<boolean>
  
  constructor(private http:HttpClient) { 
    this.isLoggedSub=new BehaviorSubject<boolean>(false)
  }
  
  login(username:string,password:string){
    let token='1234'
    localStorage.setItem('token',token)
    this.isLoggedSub.next(true)

  }
  logout(){
    localStorage.removeItem('token')
    this.isLoggedSub.next(false)
  }
  get isUserLogged():boolean{
    return localStorage.getItem('token')?true:false
  }
  isLoggedSubject():Observable<boolean>{
    return this.isLoggedSub
  }
}
