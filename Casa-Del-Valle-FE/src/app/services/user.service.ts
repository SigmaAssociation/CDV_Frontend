import { HttpClient } from "@angular/common/http";
import { RestConstants } from "../shared/rest-constants";
import { UserRequest } from "../models/create-user";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class UserService {
    restConstants = new RestConstants();

    constructor(private httpClient: HttpClient) { }

    public createUser(user: UserRequest) {
        return this.httpClient.post<void>(
            `${this.restConstants.getApiURL()}users`, user
        );
    }
}