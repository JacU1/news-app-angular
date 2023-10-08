import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/shared/services/auth/auth-service';
import { AppStateInterface } from '../../models/appState.interface';
import { articlesSelector } from '../../store';
import { map } from 'rxjs';

export interface SearchBarDropdown {
  name: string,
  value: string,
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public searchBarData!: SearchBarDropdown[];
  public selectedItem!: string;
  public items: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Lemon', 'Orange', 'Peach'];
  public filteredItems: string[] = [];
  
  constructor(private readonly _authService: AuthService,
              private readonly _store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this._store.select(articlesSelector) // dane do search dropdowna
  }

  onInputChange(event: any): void {
    const inputText = event.target.value.toLowerCase();
    this.filteredItems = this.items.filter(item => item.toLowerCase().includes(inputText));
  }

  logoutUser(): void {
    this._authService.logoutUser();
  }

}
