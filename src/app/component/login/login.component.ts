import { 
  Component, 
  OnInit,
  ViewChild } from '@angular/core';
import { HttpService } from '../../http.service';
import { Registration } from '../../shared/registration.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('bean') loginForm;

  /**
   * temporary solution for registration
   */
  registeredUsers: Registration[];
  

  constructor(
    private http: HttpService,
    private route: Router) { 
      this.http.getUsers().subscribe((users) => {
      this.registeredUsers = users;
    });
  }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.loginForm);
    this.http.checkUsersinDB(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (response) => {
          if(response) {
            const responseFromDB = response.pop();
            if(responseFromDB.username == this.loginForm.value.email 
              && responseFromDB.password == this.loginForm.value.password) {
                this.route.navigate(['home']);
              }
          }
          this.loginForm.reset();
        },
        (error) => {
          console.log(error);
    });
  }

}
