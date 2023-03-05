import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-iko',
  templateUrl: './iko.component.html',
  styleUrls: ['./iko.component.css'],
})
export class IkoComponent {
  BASE_URL = `https://g7vercel.vercel.app/`;
  initialData = JSON.parse('' + localStorage.getItem('Iko')) || {
    Tarih: '...',
    Gram: '...',
    Ceyrek: '...',
    Yarim: '...',
    Tam: '...',
  };
  data = this.initialData;

  loading = false;

  constructor() {
    const fetchData = async () => {
      this.loading = true;
      const result = await axios.get(this.BASE_URL + 'ikd');
      result.data.Tarih = result.data.Tarih.replace(/-/gi, '.');
      this.data = result.data;
      this.loading = false;
      localStorage.setItem('Iko', JSON.stringify(this.data));
    };
    fetchData().catch(console.error);
  }
}
