import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isAuthenticated$ = this.auth.isAuthenticated$;
  user$ = this.auth.user$;
  constructor(public auth: AuthService) {}
  login(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void{
    this.auth.logout();
  }
}
