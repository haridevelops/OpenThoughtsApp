import { 
  Component, 
  ViewChild } from '@angular/core';
import { Posts } from './shared/posts.modal';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('bean') form;

  posts: Posts[];

  constructor(private http: HttpService) {
    this.http.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }

  onSubmit() {
    this.posts.push(new Posts(this.form.value.postDescription));
    this.form.reset();
    this.http.saveToDB(this.posts.slice().pop()).subscribe();
  }

  toggle(toggle) {
    console.log(toggle);
  }
}
