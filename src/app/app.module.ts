import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyTableComponent } from './my-table/my-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {TestNotUsedService} from "./test.not.used.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'job', loadChildren: './job/job.module#JobModule'},
  { path: 'name', loadChildren: './name/name.module#NameModule'},
];

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TestNotUsedService],
  bootstrap: [AppComponent, MyTableComponent]
})
export class AppModule { }
