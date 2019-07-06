import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule, MatPaginatorModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {LoginComponent} from './authentification/login/login.component';
import {RegisterComponent} from './authentification/register/register.component';
import {UsersComponent} from './dashboard/users/users.component';
import {LayoutsComponent} from './dashboard/layouts/layouts.component';
import {IndexComponent} from './dashboard/index/index.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        UsersComponent,
        LayoutsComponent,
        IndexComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatInputModule,
        MatGridListModule, MatMenuModule, MatTableModule,MatPaginatorModule],
    exports: [MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatGridListModule, MatMenuModule, MatTableModule,MatPaginatorModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
