import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly _authService: AuthService) { }

  ngOnInit(): void {}

  logoutUser(): void {
    this._authService.logoutUser();
  }

}
