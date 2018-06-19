import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule', data: { state: 'home' } },
    { path: 'users', loadChildren: './users/users.module#UsersModule', data: { state: 'users' } },
    { path: '**', component: PageNotFoundComponent }
];
