import {Injectable} from "@angular/core";
/**
 * File Name   : test.service
 *
 * Description :
 *
 * Developer   : choewonjune
 *
 * Date        : 2018. 10. 16.
 */
console.log('TestService 가 번들됨');

@Injectable(
    {
    providedIn: 'root'
  }
)
export class TestService {
  constructor() {
    console.log('TestService construct');
  }
}
