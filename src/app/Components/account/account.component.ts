import { Component, OnInit } from '@angular/core';
import UserAccount from '../Entity/UserAccount';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  user:UserAccount=new UserAccount();
  users:UserAccount[]=[];

  saveUser()
  {

    console.log(this.user)
    const observable = this.accountService.createUser(this.user);
    observable.subscribe((response)=>
    {
      console.log(response);
      alert("User Created"); 

      

      
      // window.location.href = "/sigin";      
    },
    function (error) {
      console.log(error);
      alert("Something went wrong");
    }
    );
  }

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

}
