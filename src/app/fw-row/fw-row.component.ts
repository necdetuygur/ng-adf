import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-fw-row]',
  templateUrl: './fw-row.component.html',
  styleUrls: ['./fw-row.component.css'],
})
export class FwRowComponent {
  @Input() title: any;
  @Input() rowData: any;
  @Input() loading: any;

  tahminClass() {
    return {
      'text-success': this.rowData.YarinkiBeklentiTahmin.indexOf('Art') > -1,
      'text-danger': this.rowData.YarinkiBeklentiTahmin.indexOf('Az') > -1,
    };
  }
}
