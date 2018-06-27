import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';


import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';

import { PostService } from './service/post.service';
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { NavComponent } from './screens/nav/nav.component';
import { AsideComponent } from './screens/aside/aside.component';
import { PostDashboardComponent } from './screens/post-dashboard/post-dashboard.component';
import { PostsComponent } from './screens/post-dashboard/post/post.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { PageNotFoundComponent } from './screens/pagenotfound/pagenotfound.component';
import { FollowComponent } from './screens/follow/follow.component';
import { ToarrayPipe } from './pipes/toarray.pipe';
import { FollowersDataService } from './screens/follow/followers.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    AsideComponent,
    PostDashboardComponent,
    PostsComponent,
    DashboardComponent,
    PageNotFoundComponent,
    FollowComponent,
    ToarrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService,AuthGuardService, FollowersDataService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/* For ng bootstrap setup https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap */