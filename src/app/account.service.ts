import { Injectable } from '@angular/core';
import UserAccount from './Components/Entity/UserAccount';
import { HttpClient } from '@angular/common/http';

const BASE_URL_TO_ADD_USER ="";
const BASE_URL_FOR_USER_LOGIN ="";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  createUser(user:UserAccount)
  {
    return this.http.post(BASE_URL_TO_ADD_USER,user);
  } 

  sigin(userName,password)
  {
return this.http.get(BASE_URL_FOR_USER_LOGIN+userName+"/"+password);
  }

  constructor(private http:HttpClient) { }
}
