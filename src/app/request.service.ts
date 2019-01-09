import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestService {
    constructor(private http: HttpClient) {}
    getReposBySearchString(searchString): Observable<any> {
        // const headers = new HttpHeaders().set('Accept', 'application/vnd.github.mercy-preview+json');
        return this.http.get<any>('https://api.github.com/search/repositories?q=' + searchString);
    }
}
