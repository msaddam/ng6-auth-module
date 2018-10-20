import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { RecentSubmissionsComponent } from './recent-submissions/recent-submissions.component';
import { NewSubmissionComponent } from './new-submission/new-submission.component';
import { ShareModule } from '../share/share.module';

@NgModule({
    imports: [
        CommonModule,
        FormRoutingModule,
        ShareModule
    ],
    declarations: [FormComponent, RecentSubmissionsComponent, NewSubmissionComponent]
})
export class FormModule { }
