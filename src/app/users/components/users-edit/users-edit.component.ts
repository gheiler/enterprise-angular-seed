import { Component, OnInit } from '@angular/core';
import { User } from '../../../appcommon/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../appcommon/services/user.service';

@Component({
    selector: 'onr-users-edit',
    templateUrl: './users-edit.component.html',
    styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
    public user: User;

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
        this.userService.getById(this.route.snapshot.params.id).subscribe(user => (this.user = user));
    }

    ngOnInit() {}

    public editUser() {
        this.userService.update(this.user).subscribe(user => {
            this.router.navigate(['users']);
        });
    }
}
