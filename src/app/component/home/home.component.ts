import { 
  Component,
  OnInit, 
  ViewChild 
} from '@angular/core';

import { Posts } from '../../shared/posts.modal';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('bean') form;

  posts: Posts[];
  like: boolean;

  constructor(private http: HttpService) {
    this.like = false;
    this.http.getPosts().subscribe((res) => {
      console.log(res);
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

  ngOnInit() {}

  addLike(currPost: Posts) {
    if(this.like) {
      this.posts.forEach((post) => {
        if (post.id == currPost.id) {
          post.likes = post.likes + 1;
          this.http.putToDB(currPost.id, post).subscribe((post) => {
            console.log(post);
          });
        }
      });
    } else {
      this.posts.forEach((post) => {
        if (post.id == currPost.id) {
          post.likes = post.likes - 1;
          this.http.putToDB(currPost.id, post).subscribe((post) => {
            console.log(post);
          });
        }
      });
    }
    this.like = this.like ? false : true;
    
  }
  
  // not working for color
  // [ngStyle]="{'color':getColor()}"
  // getColor() {
  //   if (!this.like) return 'red';
  // }

}
