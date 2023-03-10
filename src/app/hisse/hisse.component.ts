import { Component } from '@angular/core';
import axios from 'axios';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-hisse',
  templateUrl: './hisse.component.html',
  styleUrls: ['./hisse.component.css'],
})
export class HisseComponent {
  loading = false;
  hisseKodu = '';
  hisses = JSON.parse('' + localStorage.getItem('Hisse')) || [];
  aktar = 'Dışa';
  modalAktar: any;
  aktarData = '';
  ngOnInit() {
    this.modalAktar = new bootstrap.Modal('#modalAktar');
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
        const data = ('' + datas[index].data).replace('.', ',').split('|');
        hisse.fiyat = data[0];
        hisse.yuzde = data[1];
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
    this.hissesAdd(this.hisseKodu);
    this.hisseKodu = '';
    this.fiyatlariGetir();
  }
  hissesAdd(hk: string) {
    if (
      this.hisses.filter((hisse: any) => hisse.kod === hk).length > 0 ||
      hk.length < 3
    ) {
      return;
    }

    this.hisses.push({
      id: new Date().getTime() + ~~(Math.random() * 999 + 1000),
      kod: hk,
      fiyat: '0,0',
      yuzde: '0,0%',
    });
    this.hisses = this.hisses.sort((a: any, b: any) => {
      if (a.kod > b.kod) return 1;
      if (a.kod < b.kod) return -1;
      return 0;
    });
    localStorage.setItem('Hisse', JSON.stringify(this.hisses));
  }
  sil(id: number) {
    if (!confirm('Emin misiniz?')) return;
    this.hisses = this.hisses.filter((hisse: any) => hisse.id != id);
    localStorage.setItem('Hisse', JSON.stringify(this.hisses));
  }
  disaAktar() {
    this.aktarData = this.hisses
      .map((hisse: any) => hisse.kod)
      .join('\n')
      .trim();
    this.aktar = 'Dışa';
    this.modalAktar.show();
  }
  iceAktar() {
    this.aktarData = '';
    this.aktar = 'İçe';
    this.modalAktar.show();
  }
  aktarDataKopyala() {
    const aktarDataTxt =
      document.querySelector<HTMLTextAreaElement>('#aktarDataTxt');
    aktarDataTxt?.focus();
    aktarDataTxt?.select();
    document.execCommand('copy');
  }
  iceAktarmaBaslat() {
    const aktarDataTxt =
      document.querySelector<HTMLTextAreaElement>('#aktarDataTxt');
    aktarDataTxt?.value
      .trim()
      .split('\n')
      .forEach((hk: string) => {
        this.hissesAdd(hk.trim().toUpperCase());
      });
    this.fiyatlariGetir();
    this.modalAktar.hide();
  }
}
