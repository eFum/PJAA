import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeUserFormComponent } from './type-user-form/type-user-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserTypesListComponent } from './user-types-list/user-types-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'user-types', component: UserTypesListComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'user-form', component: UserFormComponent },
  { path: 'type-user-form', component: TypeUserFormComponent },
  { path: 'user-form/:id', component: UserFormComponent },
  { path: 'type-user-form/:id', component: TypeUserFormComponent },
  { path: 'user-profile/:id', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
