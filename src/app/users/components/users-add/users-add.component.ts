import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../appcommon/services/user.service';
import { User } from '../../../appcommon/models/user';
import { Router } from '@angular/router';

@Component({
    selector: 'onr-users-add',
    templateUrl: './users-add.component.html',
    styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {
    public user: User;

    constructor(private userService: UserService, private router: Router) {
        this.user = new User();
    }

    ngOnInit() {}

    public addUser() {
        this.userService.add(this.user).subscribe(user => {
            this.router.navigate(['users']);
        });
    }
}
