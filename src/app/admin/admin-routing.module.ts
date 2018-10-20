import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
	{
		path: '',
		component: AdminComponent,
		children: [
			{ path: 'home', component: DashboardComponent },
			{
				path: 'test',
				component: TestComponent
			},
			{
				path: '**',
				redirectTo: 'home'
			}
		]
	},
	
	{
		path: '**',
		redirectTo: ''
	}
	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
