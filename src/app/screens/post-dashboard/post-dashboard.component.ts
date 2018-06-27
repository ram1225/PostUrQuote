import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormControlName, Validators } from '@angular/forms';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  pattern: string = "[a-zA-Z0-9!, ]+";
  postForm: FormGroup;
  // @Input() postRef: PostsComponent;
  
  constructor(private postRef: PostService) {}

  ngOnInit() {
   this.postForm= new FormGroup({
    messageArea: new FormControl(null,[Validators.required,Validators.pattern(this.pattern)])
   });
  }

  get messageArea(){
   return this.postForm.get('messageArea');
  }

  formSubmit(){
    console.log(this.postForm.value);
    this.postRef.addQuote(this.postForm.value.messageArea);
    this.postForm.reset();

  }
}
