/**
 * File Name   : name.module
 *
 * Description :
 *
 * Developer   : choewonjune
 *
 * Date        : 2018. 10. 16.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NameListComponent} from "./name.list.component";

const routes: Routes = [{ path: '', component: NameListComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [NameListComponent]
})
export class NameModule {}
