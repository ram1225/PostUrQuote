import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'load-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostsComponent implements OnInit {

  itemsRef: AngularFireList<any>;
  quotes: Observable<any[]>;


  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.itemsRef = this.db.list('quotes');

    this.quotes = this.itemsRef.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })).reverse();
    }));
  }

  /* Add quote to database */
  addQuote(message: string) {
    this.itemsRef.push({ quote: message, created: (new Date().toLocaleString()) });
  }

  /* Update quote from the database */
  updateQuote(key: string, newMessage: string) {
    this.itemsRef.update(key,{quote: newMessage, created: (new Date().toLocaleDateString())});
  }

  /* Delete quote from database */

  deleteQuote(key: string){
    this.itemsRef.remove(key);
  }

  /* Delete all quotes */

  deleteAllQuotes(){
    this.itemsRef.remove();
  }
}
