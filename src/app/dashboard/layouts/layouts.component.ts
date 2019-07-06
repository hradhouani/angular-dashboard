import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-layouts',
    templateUrl: './layouts.component.html',
    styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    logout(): void {

        localStorage.clear();
        this.router.navigate(['auth/login']);

    }

}
