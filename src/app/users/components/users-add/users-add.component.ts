import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from '../../../appcommon/services/user.service';
import { User } from '../../../appcommon/models/user';
import { Router } from '@angular/router';

@Component({
    selector: 'onr-users-add',
    templateUrl: './users-add.component.html',
    styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {
    public addForm: FormGroup;
    public languages = ['es', 'en', 'fr', 'de'];
    private user: User;
    private base64Image: string;

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
        this.createForm();
    }

    ngOnInit() {}

    private createForm() {
        this.addForm = this.fb.group({
            // <-- the parent FormGroup
            name: ['', Validators.required],
            language: ['', Validators.required],
            email: ['', Validators.required],
            profileImage: ['']
        });
    }

    public addUser() {
        if (this.addForm.valid) {
            Object.assign(this.user, this.addForm.value);
            this.user.profileImage = this.base64Image;

            this.userService.add(this.user).subscribe(user => {
                this.router.navigate(['users']);
            });
        }
    }

    public onImageSelected($event) {
        this.readAsBase64String($event.target);
    }

    private readAsBase64String(inputValue: any): void {
        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();

        myReader.onloadend = e => {
            this.base64Image = myReader.result;
        };
        myReader.readAsDataURL(file);
    }
}
