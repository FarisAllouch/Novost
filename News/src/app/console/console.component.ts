import { Component, OnInit } from '@angular/core';
import { Novosti } from '../Modeli/novosti';
import { NovostiService } from '../Services/novosti.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css'],
})
export class ConsoleComponent implements OnInit {
  novavijestdetaljno = ``;
  novavijest = ``;
  slika1: string = '';
  idnaslova: number = 0;
  idslika: number = 0;
  iddetaljno: number = 0;
  contentEditable: string;
  novostid: number;
  novostedit: Novosti = {
    id: 0,
    novost: '',
  };
  constructor(public novostiservice: NovostiService) {}

  objavidetaljno() {
    this.novostiservice.detaljno.push({
      id: (this.iddetaljno += 1),
      tekst: this.novavijestdetaljno,
    });
    this.novostiservice.slike.push({
      id: (this.idslika += 1),
      slika: this.slika1,
    });
    this.novostiservice.novosti.push({
      id: (this.idnaslova += 1),
      novost: this.novavijest,
    });
  }
  HomeSlikeNovosti: any;
  HomeNovosti: any;
  ngOnInit(): void {
    this.HomeSlikeNovosti = this.novostiservice.slike;
    this.HomeNovosti = this.novostiservice.novosti;
  }

  onDelete(id: number) {
    this.novostiservice.onDelete(id);
  }
  onEdit() {}
}
