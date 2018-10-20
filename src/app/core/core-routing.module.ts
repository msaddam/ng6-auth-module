import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
    
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'app',
        canActivate: [AuthGuardService],
        loadChildren: '../admin/admin.module#AdminModule'
    },
    {
        path: 'form',
        loadChildren: '../form/form.module#FormModule'
    },
    {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: LoginComponent
        // component: NotFoundComponent
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
