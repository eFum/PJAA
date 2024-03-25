import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTypeService } from '../user-type.service';
import { UserType } from '../user-type.model';

@Component({
  selector: 'app-user-types-list',
  templateUrl: './user-types-list.component.html',
  styleUrls: ['./user-types-list.component.css']
})
export class UserTypesListComponent implements OnInit {
  userTypes: UserType[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(
    private router: Router,
    private userTypeService: UserTypeService
  ) { }

  ngOnInit(): void {
    this.userTypeService.getUserTypes().subscribe(
      data => this.userTypes = data,
      error => console.error('There was an error!', error)
    );
  }

  navigateToForm(path: string) {
    this.router.navigate([`/${path}`]);
  }

  deleteUserType(id: number): void {
    this.userTypeService.deleteUserType(id).subscribe(
      response => {
        console.log('User deleted');
        this.userTypes = this.userTypes.filter(type => type.id !== id);
      },
      error => console.error('There was an error!', error as any)
    );
  }

  editUserType(userType: UserType): void {
    console.log("Navigating to user type with ID:", userType);
    this.router.navigate(['/type-user-form', userType]);
  }

}
