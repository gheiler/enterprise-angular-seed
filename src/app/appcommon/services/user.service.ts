import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../../environments/environment';
import { CommonResponse } from '../models/common-response';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    private usersEndpoint = environment.apiUrl + '/users';

    constructor(private http: HttpClient) {}

    public getAll(): Observable<User[]> {
        return this.http
            .get<CommonResponse<User>>(this.usersEndpoint)
            .map(response => {
                return response.data;
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }

    public add(user: User) {
        return this.http
            .post<CommonResponse<User>>(this.usersEndpoint, user)
            .map(response => {
                return response.data;
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }
}
