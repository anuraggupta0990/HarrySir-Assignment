import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatList } from '@angular/material/list';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isMenuOpen: boolean = false;
  openSubMenu: string | null = null;
  isUserProfileMenuOpen = false;

  
  constructor(private observer: BreakpointObserver,private router: Router) {}


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubMenu(menu: string) {
    this.openSubMenu = this.openSubMenu === menu ? null : menu;
  }

  toggleUserProfileMenu() {
    this.isUserProfileMenuOpen = !this.isUserProfileMenuOpen;
  }

  navigateToShowUser() {
    this.router.navigate(['showuser']);
  }

  navigateToUpdateUser() {
      this.router.navigate(['showuser']);
  }
  navigateToInventoryManagement(){
    this.router.navigate(['management']);
  }

  logout() {
    this.router.navigate(['']);
  }

  navigateToViewUser() {
    this.router.navigate(['showuser']);
  }

  navigateTocreatecustomer() {
    this.router.navigate(['createcustomer']);
  }

  navigateToshowcustomer() {
    this.router.navigate(['showcustomer']);
  }
  navigateToProductForm(){
    this.router.navigate(['/inventory/product']);
  }
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;



  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize: { matches: any; }) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
}

