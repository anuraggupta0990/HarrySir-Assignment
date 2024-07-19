import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();
  isUserProfileMenuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuToggle.emit();
  }

  toggleUserProfileMenu() {
    this.isUserProfileMenuOpen = !this.isUserProfileMenuOpen;
  }

  navigateToShowUser() {
    this.router.navigate(['showuser']);
  }

  navigateToUpdateUser() {
    this.router.navigate(['updateuser']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
