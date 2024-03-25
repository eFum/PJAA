import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserTypeService } from '../user-type.service';
import { NgForm } from '@angular/forms';
import { UserType } from '../user-type.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../user-type.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User = { email: '', firstName: '', lastName: '', userType: { id: undefined, name: '' } };
  userTypes: UserType[] = [];
  editMode = false;
  userId?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private userTypeService: UserTypeService
  ) {}

  ngOnInit(): void {
    this.userTypeService.getUserTypes().subscribe(
      data => this.userTypes = data,
      error => console.error('There was an error!', error)
    );
    this.route.params.subscribe(params => {
      this.userId = params['id'] ? +params['id'] : undefined;
      if (this.userId) {
        this.editMode = true;
        this.userService.getUser(this.userId).subscribe(user => {
          this.user = user;
        });
      }
    });
  }
  
  onSubmit(form: NgForm): void {
    if (form.valid) {
      const userToSubmit = {
        email: this.user.email,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        userType: {
          id: this.user.userType.id
        }
      };
      if (this.editMode) {
        const userToEdit: User = {
          ...this.user,
          id: this.userId,  // this.userId is now a number or undefined
          userType: { id: this.user.userType.id, name: ''}
        };
        this.userService.editUser(userToEdit).subscribe(
          response => {
            console.log('User modified', response);
            this.editMode = false;
            this.router.navigate(['/users']);
          },
          error => console.error('There was an error!', error)
        );
      } else {
        this.userService.addUser(userToSubmit).subscribe(
          response => {
            console.log('User added', response);
            this.user = { firstName: '', lastName: '', email: '', userType: { id: undefined, name: '' } };
          },
          error => console.error('There was an error!', error)
        );
      }
    }
  }

}
