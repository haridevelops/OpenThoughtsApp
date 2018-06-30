import { Component, OnInit, ViewChild } from '@angular/core';
import { Registration } from '../../shared/registration.modal';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild("bean") bean;

  registerBean: Registration[];

  constructor(
    private _http: HttpService,
    private _route: Router) { 
    this.registerBean = [];
  }

  ngOnInit() {
  }

  onRegister() {
    this.registerBean.push(new Registration(this.bean.value.username, this.bean.value.password));    
    this._http.saveUsers(this.registerBean.slice().pop()).subscribe((res) =>{
      this._route.navigate(['/login']);
    });
    this.bean.reset();
  }

}
