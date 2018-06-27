import { Component, OnInit } from '@angular/core';
import { FollowersDataService } from './followers.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  data: string[];
 
  userName: string = "username";
  userNameData: string[];
  email: string = "email";
  constructor(private followerService: FollowersDataService) { }

  ngOnInit() {
    this.followerService.followSuggestions.subscribe((data) => {
    this.data = JSON.parse(JSON.stringify(data));
    console.log(JSON.parse(JSON.stringify(data)));
      //this.userName = JSON.parse(JSON.stringify(this.data))[0].name;
      //   this.userNameData = this.userNameString.split(',');
      //   this.userName = this.userNameData[0];
    });

  }

}
