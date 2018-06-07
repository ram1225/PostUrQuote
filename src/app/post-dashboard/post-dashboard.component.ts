import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormControlName, Validators } from '@angular/forms';
import { PostsComponent } from './post/post.component';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  pattern: string = "[a-zA-Z0-9!, ]+";
  postForm: FormGroup;
  @Input() postRef: PostsComponent;
  
  constructor() {
    // this.message
    // .valueChanges
    // .debounceTime(200)
    // .distinctUntilChanged()
    //  .subscribe((event) => {
   }

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
