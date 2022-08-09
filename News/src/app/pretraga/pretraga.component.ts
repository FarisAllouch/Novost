import { Component, OnInit } from '@angular/core';
import { NovostiService } from '../Services/novosti.service';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.css'],
})
export class PretragaComponent implements OnInit {
  PretragaSlikeNovosti;
  PretragaNovosti;
  term: string;

  constructor(private novService: NovostiService) {}

  ngOnInit() {
    this.PretragaSlikeNovosti = this.novService.slike;
    this.PretragaNovosti = this.novService.novosti;
  }
}
