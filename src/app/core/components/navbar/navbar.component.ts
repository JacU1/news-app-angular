import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationBoxService } from 'src/app/components/shared/services/notification-box/notification-box.service';
import { NotificationTypes } from '../../models/notification-box.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly _router: Router,
              private readonly _notificationService: NotificationBoxService) { }

  ngOnInit(): void {}

  logoutUser(): void {
    this._notificationService.showNotificationBox(NotificationTypes.INFO, "User logged out.")
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    this._router.navigate([""]);
  }

}
