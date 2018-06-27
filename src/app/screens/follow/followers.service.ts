import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable()
export class FollowersDataService {
    public canFollowData: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public followSuggestions = this.canFollowData.asObservable();
    
    constructor() {

    }






}
