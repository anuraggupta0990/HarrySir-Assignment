import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  isMenuOpen = false;
  openSubMenu: string | null = null;

  constructor(private router: Router) {}

  toggleMenu() {
    console.log("hello")
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubMenu(menu: string) {
    this.openSubMenu = this.openSubMenu === menu ? null : menu;
  }

  navigateTocreatecustomer() {
    this.router.navigate(['createcustomer']);
  }

  navigateToshowcustomer() {
    this.router.navigate(['showcustomer']);
  }

  navigateToInventoryManagement() {
    this.router.navigate(['management']);
  }

  navigateToProductForm() {
    this.router.navigate(['/inventory/product']);
  }
}