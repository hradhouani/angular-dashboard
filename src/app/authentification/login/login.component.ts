import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthentificationService} from '../../authentification.service';

const apiUrl = environment.apiUrl;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private http: HttpClient, private auth: AuthentificationService) {
    }

    username: string = 'haythamo@hldld.com';
    password: string = '123456789';

    ngOnInit() {
    }

    login(): void {

        this.auth.login({email: this.username, password: this.password});
    }

}
