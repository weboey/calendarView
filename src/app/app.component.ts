import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nzMode = 'month';
  // nzMode = 'day';
  toggleMode(v) {
    this.nzMode = v;
  }
}


