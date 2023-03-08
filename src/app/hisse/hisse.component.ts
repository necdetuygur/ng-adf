import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-hisse',
  templateUrl: './hisse.component.html',
  styleUrls: ['./hisse.component.css'],
})
export class HisseComponent {
  loading = false;
  hisseKodu = '';
  hisses = JSON.parse('' + localStorage.getItem('Hisse')) || [];
  ngOnInit() {
    this.fiyatlariGetir();
  }
  fiyatlariGetir() {
    this.loading = true;
    let gets: any[] = [];
    this.hisses.forEach(async (hisse: any) => {
      gets.push(axios.get('https://hisse.vercel.app/?q=' + hisse.kod));
    });
    Promise.all(gets).then((datas: any[]) => {
      this.hisses.forEach((hisse: any, index: number) => {
        hisse.fiyat = ('' + datas[index].data).replace('.', ',');
      });
      this.loading = false;
      localStorage.setItem('Hisse', JSON.stringify(this.hisses));
    });
  }
  hisseKoduChange(e: any) {
    this.hisseKodu = e.target.value.toUpperCase();
  }
  ekle() {
    if (
      this.hisses.filter((hisse: any) => hisse.kod === this.hisseKodu).length >
        0 ||
      this.hisseKodu.length < 3
    ) {
      this.hisseKodu = '';
      return;
    }
    this.hisses.push({
      id: new Date().getTime(),
      kod: this.hisseKodu,
      fiyat: '0,0',
    });
    this.hisses = this.hisses.sort((a: any, b: any) => {
      if (a.kod > b.kod) return 1;
      if (a.kod < b.kod) return -1;
      return 0;
    });
    localStorage.setItem('Hisse', JSON.stringify(this.hisses));
    this.hisseKodu = '';
    this.fiyatlariGetir();
  }
  sil(id: number) {
    if (!confirm('Emin misiniz?')) return;
    this.hisses = this.hisses.filter((hisse: any) => hisse.id != id);
    localStorage.setItem('Hisse', JSON.stringify(this.hisses));
  }
}
