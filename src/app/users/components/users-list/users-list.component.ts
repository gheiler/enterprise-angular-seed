import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../appcommon/services/user.service';
import { User } from '../../../appcommon/models/user';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'onr-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    public users: User[];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getAll().subscribe(users => (this.users = users));
    }
}
