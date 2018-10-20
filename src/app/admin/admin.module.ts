import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, DashboardComponent, TestComponent]
})
export class AdminModule { }
