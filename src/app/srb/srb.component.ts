import { Component } from '@angular/core';

@Component({
  selector: 'app-srb',
  templateUrl: './srb.component.html',
  styleUrls: ['./srb.component.css'],
})
export class SrbComponent {
  srbShow = false;
  toogleSrb() {
    this.srbShow = !this.srbShow;
  }
}
