import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showcustomers',
  templateUrl: './showcustomers.component.html',
  styleUrls: ['./showcustomers.component.css']
})
export class ShowcustomersComponent {

  customers: any[] = [];

  constructor(private router: Router)
{}
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    // localStorage.clear();
    const customersData = localStorage.getItem('createduserData');
    if (customersData) {
      this.customers = JSON.parse(customersData);
    } else {
      this.customers = [];
    }
  }
  navigateToLogin(){
    this.router.navigate(['dashboard']);
  }
  
}

