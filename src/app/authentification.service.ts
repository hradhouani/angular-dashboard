import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const apiUrl = environment.apiUrl;


@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {

    constructor(private router: Router, private http: HttpClient) {
    }


    login(data): void {
        this.http.post(apiUrl + 'auth/login', data).subscribe((data) => {
                // console.log(data);
                localStorage.setItem('user', JSON.stringify(data));
                this.router.navigate(['/users']);
            }, error1 => alert(error1)
        );


    }

    public me(token): Observable<any> {


        return this.http.post(apiUrl + 'auth/refresh?token=' + token, {});


    }
}
