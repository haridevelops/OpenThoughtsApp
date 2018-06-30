import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { HttpService } from '../../http.service';
import { Registration } from '../../shared/registration.modal';
import { Router } from '@angular/router';
import { Globals } from '../../shared/globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('bean') loginForm;

  private loginFailure: boolean;

  /**
   * temporary solution for registration
   */
  registeredUsers: Registration[];


  constructor(
    private http: HttpService,
    private route: Router,
    private global: Globals) {
      this.loginFailure = false;
    this.http.getUsers().subscribe((users) => {
      this.registeredUsers = users;
    });
  }

  ngOnInit() {
  }

  onLogin() {
    this.http.checkUsersinDB(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        (response) => {
          if (response) {
            const responseFromDB = response.pop();
            if (responseFromDB) {
              if (responseFromDB.username == this.loginForm.value.username
                && responseFromDB.password == this.loginForm.value.password) {
                this.http.setAuth(true);
                this.global.username = this.loginForm.value.username;
                console.log(this.global.username)
                this.route.navigate(['home']);
              }
            } else {
              this.loginFailure = true;
            }
          }
          this.loginForm.reset();
        },
        (error) => {
          console.log(error);
        });
  }

  onMessClick() {
    this.loginFailure = false;
  }

}
