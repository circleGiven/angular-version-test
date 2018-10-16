/**
 * File Name   : name.list.component
 *
 * Description :
 *
 * Developer   : choewonjune
 *
 * Date        : 2018. 10. 16.
 */

import {Component} from "@angular/core";
import {NameService} from "../service/name.service";

@Component({
  selector: 'app-name-list',
  templateUrl: './name.list.component.html'
})
export class NameListComponent {
  public name: string;

  constructor(private nameService: NameService) {

  }

  public onClickSaveName(): void {
    this.nameService.name = this.name;
  }
}
