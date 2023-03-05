import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  val: number = 0.0;
  constructor() {
    setInterval(() => {
      if (this.val > 99) {
        window.location.href = window.location.href;
      }
      this.val = this.val + 0.1;
    }, 100);
  }
}
