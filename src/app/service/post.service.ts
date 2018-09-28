import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoginModel } from '../models/login-model';
import { map } from 'rxjs/operators';
import { FollowersDataService } from '../screens/follow/followers.service';


@Injectable()
export class PostService {

  itemsRef: AngularFireList<any>;
  private totalQuotesCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public totalQuotesObservable = this.totalQuotesCountSubject.asObservable();

  constructor(private db: AngularFireDatabase, private followersDataService: FollowersDataService) { }


  getQuotes() : Observable<any>{
    this.itemsRef = this.db.list('quotes');

    return this.itemsRef.snapshotChanges().pipe(map(changes => {
      LoginModel.quotesCount = changes.map(c => ({ key: c.payload.key, ...c.payload.val() })).length;
      this.totalQuotesCountSubject.next((LoginModel.quotesCount>0?LoginModel.quotesCount-1:0));
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })).reverse().filter((data) => {
        if (data.key === "users") this.followersDataService.canFollowData.next(data);      
          return data.key != "users";
      });
    }));
  }

   /* Add quote to database */
   addQuote(message: string) {
    this.itemsRef.push({ quote: message, created: (new Date().toLocaleString()), who: LoginModel.username });
  }

   /* Update quote from the database */
   updateQuote(key: string, newMessage: string) {
    this.itemsRef.update(key, { quote: newMessage, created: (new Date().toLocaleDateString()) });
  }

  /* Delete quote from database */

  deleteQuote(key: string) {
    this.itemsRef.remove(key);
  }

  /* Delete all quotes */

  deleteAllQuotes() {
    this.itemsRef.remove();
  }
}
