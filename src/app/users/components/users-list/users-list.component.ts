import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../appcommon/services/user.service';
import { User } from '../../../appcommon/models/user';
import { Router } from '@angular/router';

@Component({
    selector: 'onr-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    public users: User[];

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit() {
        this.userService.getAll().subscribe(users => (this.users = users));
    }

    public goToEdit(id: number) {
        this.router.navigate(['users/edit/' + id]);
    }
}
