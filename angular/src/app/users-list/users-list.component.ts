import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user-type.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['userType', 'email', 'firstName', 'lastName', 'actions'];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
      this.userService.getUsers().subscribe(
      data => this.users = data,
      error => console.error('There was an error!', error)
    );
  }

  navigateToForm(path: string) {
    this.router.navigate([`/${path}`]);
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(
      response => {
        console.log('User deleted');
        this.users = this.users.filter(user => user.id !== id);
      },
      error => console.error('There was an error!', error as any)
    );
  }

  editUser(user: User): void {
    console.log("Navigating to user type with ID:", user);
    this.router.navigate(['/user-form', user]);
  }

}
