import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './Components/account/account.component';
import { HomeComponent } from './Components/home/home.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { SigninComponent } from './Components/signin/signin.component';

const routes: Routes = [
  {path:'account' , component:AccountComponent},
  {path:'home' , component:HomeComponent},
  {path:'navbar' , component:NavBarComponent},
  {path:'signin' , component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
