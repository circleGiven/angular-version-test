/**
 * File Name   : job.module
 *
 * Description :
 *
 * Developer   : choewonjune
 *
 * Date        : 2018. 10. 16.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {JobListComponent} from "./job.list.component";

const routes: Routes = [{ path: '', component: JobListComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [JobListComponent]
})
export class JobModule {}
