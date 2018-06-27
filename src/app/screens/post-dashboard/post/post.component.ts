import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginModel } from '../../../models/login-model';
import { FollowersDataService } from '../../follow/followers.service';
import { PostService } from '../../../service/post.service';

@Component({
  selector: 'load-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostsComponent implements OnInit {
  quotes: Observable<any[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.quotes = this.postService.getQuotes();
   

  }

}
