import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowUserComponent implements OnInit {
  users: any[] = [];

  constructor(private router: Router)
{}
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    // localStorage.clear();
    const usersData = localStorage.getItem('registrationData');
    if (usersData) {
      this.users = JSON.parse(usersData);
    } else {
      this.users = [];
    }
  }
  navigateToLogin(){
    this.router.navigate(['dashboard']);
  }
  
}
