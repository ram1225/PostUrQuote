import { NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate } from '@angular/router';

import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { PageNotFoundComponent } from './screens/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full',canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,canActivate: [AuthGuardService] },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuardService]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }