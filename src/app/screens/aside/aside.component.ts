import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { LoginModel } from '../../models/login-model';
import { PostService } from '../../service/post.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  public userName: string;
  public email: string;
  public quotesCount: number;
  constructor(private authService: AuthService, private postService: PostService) { }

  ngOnInit() {
    this.userName = LoginModel.username;
    this.email = LoginModel.email;
   

    this.authService.user.subscribe((user)=>{
      this.userName = user.displayName;
      this.email = user.email;
    
    });

    this.postService.totalQuotesObservable.subscribe((count)=>this.quotesCount= count);
  }

}
