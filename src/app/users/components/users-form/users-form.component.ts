import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { User } from '../../../appcommon/models/user';

@Component({
    selector: 'onr-users-form',
    templateUrl: './users-form.component.html',
    styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
    public userForm: FormGroup;
    // ToDo move to service
    public languages = ['es', 'en', 'fr', 'de'];
    public base64Image: string;

    @Input() public btnText: string;
    @Input() public user: User;
    @Output() public userEmitter = new EventEmitter<User>();

    constructor(private fb: FormBuilder) {
        if (!this.user) {
            this.user = new User();
        }
        this.createForm();
    }

    ngOnInit() {}

    private createForm() {
        this.userForm = this.fb.group({
            id: [this.user.id],
            name: [this.user.name, Validators.required],
            language: [this.user.language, Validators.required],
            password: ['', Validators.required],
            email: [this.user.email, [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
            profileImage: [this.user.profileImage]
        });
    }

    public saveUser() {
        if (this.userForm.valid) {
            Object.assign(this.user, this.userForm.value);
            this.user.profileImage = this.base64Image;
            this.userEmitter.emit(this.user);
        }
    }

    public onImageSelected($event) {
        this.readAsBase64String($event.target);
    }

    // ToDo move to helpers class
    private readAsBase64String(inputValue: any): void {
        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();

        myReader.onloadend = e => {
            this.base64Image = myReader.result;
        };
        myReader.readAsDataURL(file);
    }
}
