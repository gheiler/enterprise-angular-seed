import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BusyDirective } from './directives/busy.directive';

import { AppState } from './services/app.service';
import { UserService } from './services/user.service';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    exports: [BusyDirective],
    declarations: [BusyDirective],
    providers: [AppState, UserService]
})
export class AppcommonModule {}
