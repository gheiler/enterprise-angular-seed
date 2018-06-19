import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'onr-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    items: MenuItem[];
    constructor() {}

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                routerLink: ['home']
            },
            {
                label: 'Users',
                routerLink: ['users'],
                items: [{ label: 'List', routerLink: ['users'] }, { label: 'Add', routerLink: ['users/add'] }]
            }
        ];
    }
}
