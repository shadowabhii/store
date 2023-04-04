import { Injectable } from '@angular/core';
import UserAccount from './Components/Entity/UserAccount';
import { HttpClient } from '@angular/common/http';

const BASE_URL_TO_ADD_USER ="";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  createUser(user:UserAccount)
  {
    return this.http.post(BASE_URL_TO_ADD_USER,user);
  } 

  constructor(private http:HttpClient) { }
}
