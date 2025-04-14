import { Component } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [SearchBarComponent],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  /* Default value to state of menu */
  menuActive = false;

  /* Function in template to handle responsive performance */
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}