import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-fw-altin',
  templateUrl: './fw-altin.component.html',
  styleUrls: ['./fw-altin.component.css'],
})
export class FwAltinComponent {
  BASE_URL = `https://g7vercel.vercel.app/`;
  initialData = JSON.parse('' + localStorage.getItem('FwAltin')) || {
    gram: {
      Alis: '...',
      Satis: '...',
      YarinkiBeklentiTahmin: '...',
    },
    ceyrek: {
      Alis: '...',
      Satis: '...',
      YarinkiBeklentiTahmin: '...',
    },
    yarim: {
      Alis: '...',
      Satis: '...',
      YarinkiBeklentiTahmin: '...',
    },
    tam: {
      Alis: '...',
      Satis: '...',
      YarinkiBeklentiTahmin: '...',
    },
  };
  data = this.initialData;

  loadingGram = false;
  loadingCeyrek = false;
  loadingYarim = false;
  loadingTam = false;

  constructor() {
    const fetchGramData = async () => {
      this.loadingGram = true;
      const result = await axios.get(this.BASE_URL + 'fw/altin/gram');
      this.data = { ...this.data, gram: result.data };
      this.loadingGram = false;
      localStorage.setItem('FwAltin', JSON.stringify(this.data));
    };
    const fetchCeyrekData = async () => {
      this.loadingCeyrek = true;
      const result = await axios.get(this.BASE_URL + 'fw/altin/ceyrek');
      this.data = { ...this.data, ceyrek: result.data };
      this.loadingCeyrek = false;
      localStorage.setItem('FwAltin', JSON.stringify(this.data));
    };
    const fetchYarimData = async () => {
      this.loadingYarim = true;
      const result = await axios.get(this.BASE_URL + 'fw/altin/yarim');
      this.data = { ...this.data, yarim: result.data };
      this.loadingYarim = false;
      localStorage.setItem('FwAltin', JSON.stringify(this.data));
    };
    const fetchTamData = async () => {
      this.loadingTam = true;
      const result = await axios.get(this.BASE_URL + 'fw/altin/tam');
      this.data = { ...this.data, tam: result.data };
      this.loadingTam = false;
      localStorage.setItem('FwAltin', JSON.stringify(this.data));
    };
    fetchGramData().catch(console.error);
    fetchCeyrekData().catch(console.error);
    fetchYarimData().catch(console.error);
    fetchTamData().catch(console.error);
  }
}
