import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersAddComponent } from './components/users-add/users-add.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';

@NgModule({
    imports: [CommonModule, UsersRoutingModule, FormsModule, ReactiveFormsModule],
    declarations: [UsersListComponent, UsersAddComponent, UsersEditComponent]
})
export class UsersModule {}
