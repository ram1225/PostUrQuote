import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { firebaseConfig } from '../../environments/firebase.config';
import * as firebase from 'firebase/app';
import { LoginModel } from '../models/login-model';


@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  public userDetails: firebase.User = null;
   showNavSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showNav = this.showNavSubject.asObservable();

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
    _firebaseAuth.auth.onAuthStateChanged((authData) => {
      if (!authData) {
        console.log("Client unauthenticated.")
        this.router.navigate(['login']);
      }
    });
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log("user" + JSON.stringify(user));
          LoginModel.username = user.displayName;
          LoginModel.email = user.email;
        } else {
          this.userDetails = null;
        }
      }
    );
  }
  public setNavBar(value: boolean){
    this.showNavSubject.next(value);
  }
  public signInWithGoogle() {

    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then((result) => {
      this.showNavSubject.next(true);
      console.log("result" + JSON.stringify(result));
    });
  }

  public isLoggedIn(): boolean {
    // return this.loggedIn;
    let loggedIn = (this.userDetails != null);
    if (loggedIn) this.showNavSubject.next(loggedIn);
    return loggedIn;
  }

  public logOut() {
    this._firebaseAuth.auth.signOut().then((res) => {
      this.showNavSubject.next(false);
      this.userDetails = null;
      this.router.navigate(['/login']);
    });

  }

}
