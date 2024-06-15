// a empty service template
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserService{
    apiURI = "https://api.github.com/search/users?q="

    constructor(private http: HttpClient) { 
    }

    getUsers(username: string): Observable<any> {
        //console.log("hi")
        return this.http.get<any>(this.apiURI + username);
    }
}