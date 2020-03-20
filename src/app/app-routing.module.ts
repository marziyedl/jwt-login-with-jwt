import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth-guard';
import { UsersListComponent } from './users-list/users-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'usersList', component: UsersListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
