import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-fw-doviz',
  templateUrl: './fw-doviz.component.html',
  styleUrls: ['./fw-doviz.component.css'],
})
export class FwDovizComponent {
  BASE_URL = `https://g7vercel.vercel.app/`;
  initialData = JSON.parse('' + localStorage.getItem('FwDoviz')) || {
    usd: {
      Alis: '...',
      Satis: '...',
      YarinkiBeklentiTahmin: '...',
    },
    eur: {
      Alis: '...',
      Satis: '...',
      YarinkiBeklentiTahmin: '...',
    },
    gbp: {
      Alis: '...',
      Satis: '...',
      YarinkiBeklentiTahmin: '...',
    },
  };
  data = this.initialData;

  loadingUsd = false;
  loadingEur = false;
  loadingGbp = false;

  constructor() {
    const fetchUsdData = async () => {
      this.loadingUsd = true;
      const result = await axios.get(this.BASE_URL + 'fw/doviz/usd');
      this.data = { ...this.data, usd: result.data };
      this.loadingUsd = false;
      localStorage.setItem('FwDoviz', JSON.stringify(this.data));
    };
    const fetchEurData = async () => {
      this.loadingEur = true;
      const result = await axios.get(this.BASE_URL + 'fw/doviz/eur');
      this.data = { ...this.data, eur: result.data };
      this.loadingEur = false;
      localStorage.setItem('FwDoviz', JSON.stringify(this.data));
    };
    const fetchGbpData = async () => {
      this.loadingGbp = true;
      const result = await axios.get(this.BASE_URL + 'fw/doviz/gbp');
      this.data = { ...this.data, gbp: result.data };
      this.loadingGbp = false;
      localStorage.setItem('FwDoviz', JSON.stringify(this.data));
    };
    fetchUsdData().catch(console.error);
    fetchEurData().catch(console.error);
    fetchGbpData().catch(console.error);
  }
}
