import {Component, ElementRef} from '@angular/core';
import {TestService} from "./test.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private testService: TestService,
              private router: Router) {

  }

  public onClickName(): void {
    this.router.navigate(['/name']);
  }

  public onClickJob(): void {
    this.router.navigate(['/job']);
  }
}
