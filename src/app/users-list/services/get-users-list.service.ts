import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersList } from 'src/app/models/users-list';

@Injectable({
  providedIn: 'root'
})
export class GetUsersListService {

  constructor(private http: HttpClient) { }
  public get(url: string) {
    return this.http.get<Array<UsersList>>(url);
  }
}

