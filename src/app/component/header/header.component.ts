import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';
import { Globals } from '../../shared/globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(
    private http: HttpService,
    private route: Router,
    private global: Globals) { 
      console.log(this.global.username)
      this.username = this.global.username;
    }

  ngOnInit() {
  }

  onLogout() {
    this.http.setAuth(false);
    this.route.navigate(['login']);
  }

}
