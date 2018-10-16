import {Component, ElementRef} from '@angular/core';
import {TestService} from "./test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public inputTest: string;

  constructor(private testService: TestService) {

  }
}
