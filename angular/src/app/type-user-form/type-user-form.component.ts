import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserTypeService } from '../user-type.service';
import { NgForm } from '@angular/forms';
import { UserType } from '../user-type.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../user-type.model';

@Component({
  selector: 'app-type-user-form',
  templateUrl: './type-user-form.component.html',
  styleUrls: ['./type-user-form.component.css']
})
export class TypeUserFormComponent implements OnInit {
  userType: UserType = { id: undefined, name: '' };
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private userTypeService: UserTypeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userTypeId = params['id'];
      if (userTypeId) {
        this.editMode = true;
        this.userTypeService.getUserType(userTypeId).subscribe((userType: UserType) => {
          this.userType = userType;
        });
      }
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.editMode && this.userType) {
        this.userTypeService.editUserType(this.userType).subscribe(
          response => {
            console.log('User Type modified', response);
            this.router.navigate(['/user-types']);
          },
          error => console.error('There was an error!', error)
        );
      } else {
        this.userTypeService.addUserType(this.userType).subscribe(
          response => {
            console.log('User Type added', response);
            this.userType = { name: '' };  // Resetting
          },
          error => console.error('There was an error!', error)
        );
      }
    }
  }

}
