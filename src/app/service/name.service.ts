import {Injectable} from "@angular/core";
import {NameModule} from "../name/name.module";
/**
 * File Name   : name.service
 *
 * Description :
 *
 * Developer   : choewonjune
 *
 * Date        : 2018. 10. 16.
 */
@Injectable(
  {
    providedIn: 'root'
  }
)
export class NameService {

  public name: string;

  constructor() {
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}
