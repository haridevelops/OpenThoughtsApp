import { Posts } from './shared/posts.modal';
import { Registration } from './shared/registration.modal';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private url: string;
  private registerUrl: string;
  private auth: boolean = false;

  constructor(private _http: HttpClient) { 
    this.url = "http://localhost:3000/posts";
    this.registerUrl = "http://localhost:3000/users";
  }


  getPosts(): Observable<Posts[]> {
    return this._http.get<Posts[]>(this.url);
  }

  getUsers(): Observable<Registration[]> {
    return this._http.get<Registration[]>(this.registerUrl);
  }

  checkUsersinDB(username, password): Observable<Registration[]> {
    return this._http.get<Registration[]>(this.registerUrl+ "?username="+username+"&password="+password);
  }

  saveToDB(post: Posts) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post(this.url, post, {headers});
  }

  saveUsers(register: Registration) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post(this.registerUrl, register, {headers});
  }

  setAuth(value: boolean) {
    this.auth = value;
  }

  isAuthenticated() {
    return this.auth;
  }
}
