import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUsersListService } from './services/get-users-list.service';
import { UsersList } from '../models/users-list';
import { LoginHttpService } from '../login/services/login-http.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  users: Array<UsersList> = new Array<UsersList>();
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  constructor(private loginService: LoginHttpService,
    private router: Router,
    private getUsersListService: GetUsersListService
  ) {
    this.getUsersListService.get("https://jsonplaceholder.typicode.com/posts").subscribe((data) => {
      for (var i = 0; i < data.length; i++) {
        this.users.push(data[i]);

      }
      this.collectionSize = this.users.length;

    })
  }
  get usersList(): UsersList[] {
    return this.users
      .map((country, i) => ({ id: i + 1, ...country }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);

  }
}
