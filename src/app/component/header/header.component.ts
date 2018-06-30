import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private http: HttpService,
    private route: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.http.setAuth(false);
    this.route.navigate(['login']);
  }

}
