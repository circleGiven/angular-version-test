import {Component, OnInit} from "@angular/core";
import {NameService} from "../service/name.service";
/**
 * File Name   : job.list.component
 *
 * Description :
 *
 * Developer   : choewonjune
 *
 * Date        : 2018. 10. 16.
 */

@Component({
  selector: 'app-job-list',
  templateUrl: './job.list.component.html'
})
export class JobListComponent implements OnInit {

  public name: string;

  constructor(private nameService: NameService) {

  }

  ngOnInit() {
    this.name = this.nameService.getName();
  }
}
