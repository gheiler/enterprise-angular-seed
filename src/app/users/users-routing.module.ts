import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';
import { UsersAddComponent } from './components/users-add/users-add.component';

const routes: Routes = [
    { path: '', component: UsersListComponent },
    { path: 'add', component: UsersAddComponent },
    { path: 'edit/:id', component: UsersEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}
