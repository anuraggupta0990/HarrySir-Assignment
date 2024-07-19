import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userapp';
  isMobile = true;
  isMenuOpen = false;
  isUserProfileMenuOpen = false;
  openSubMenu: string | null = null;
  showHeaderAndMenu: boolean = true; 
  // observer: any;

  constructor(private router: Router, private observer: BreakpointObserver) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.url);
      }
    });
  }

  ngOnInit() {
    this.checkRoute(this.router.url);
    this.observer.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }


  checkRoute(url: string) {
    const noHeaderRoutes = ['/login', '/registration', '/resetpassword','/forgotpassword','/createcustomer'];
    this.showHeaderAndMenu = !noHeaderRoutes.some(route => url.includes(route));
  }

  toggleMenu() {
    console.log("hello")
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

  navigateToInventoryManagement() {
    this.router.navigate(['management']);
  }

  logout() {
    this.router.navigate(['login']);
  }
}



  // ngOnInit() {
  //   this.checkRoute(this.router.url);
  //   this.observer.observe(['(max-width: 800px)']).subscribe((screenSize: { matches: any; }) => {
  //     this.isMobile = screenSize.matches;
  //   });
  // }