import { Component, AfterViewInit } from '@angular/core';
import   {   AuthService   }   from   '../../services/auth.service' ; 

@Component({
  selector: '[app-header]',
  templateUrl: './app-header.component.html',
})
export class AppHeader implements AfterViewInit {

  constructor(private  authService:  AuthService) { }
  logOut(){
    this.authService.logout();
  }
  ngAfterViewInit()  {
	}

}
