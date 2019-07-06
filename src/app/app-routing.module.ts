import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './authentification/login/login.component';
import {RegisterComponent} from './authentification/register/register.component';
import {UsersComponent} from './dashboard/users/users.component';
import {LayoutsComponent} from './dashboard/layouts/layouts.component';
import {IndexComponent} from './dashboard/index/index.component';
import {AuthGuardService} from './guards/auth-guard.service';

const routes: Routes = [

    {path: 'auth/login', component: LoginComponent},
    {path: 'auth/register', component: RegisterComponent},
    {path: '', component: LayoutsComponent, canActivate: [AuthGuardService], children: [{path: '', component: IndexComponent}, {path: 'users', component: UsersComponent}]},

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: false})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
