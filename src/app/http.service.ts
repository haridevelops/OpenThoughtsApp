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

  constructor(private _http: HttpClient) { 
    this.url = "http://localhost:3000/posts";
    this.registerUrl = "http://localhost:3000/users";
  }


  getPosts(): Observable<Posts[]> {
    return this._http.get<Posts[]>(this.url);
  }


  saveToDB(post: Posts) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post(this.url, post, {headers});
  }

  saveUsers(register: Registration) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post(this.registerUrl, register, {headers});
  }
}
