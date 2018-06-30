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

  ngOnInit() {}

}
