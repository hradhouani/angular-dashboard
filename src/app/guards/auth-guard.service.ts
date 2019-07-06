import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthentificationService} from '../authentification.service';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private auth: AuthentificationService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |
        Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log('guard!');

        if (!localStorage.getItem('user')) {
            this.router.navigate(['/auth/login']);
            return false;
        } else {


            let storage = JSON.parse(localStorage.getItem('user'));
            return this.auth.me(storage.access_token).pipe(map(response => {
                    console.log(response);
                    localStorage.setItem('user', JSON.stringify(response));

                    return true;
                }),
                catchError(error => {
                        console.log(error);
                        localStorage.clear();
                        this.router.navigate(['auth/login']);


                        return Observable.throw(error);
                    }
                )
            );


        }


    }
}
