import { Component, OnInit } from '@angular/core';
import { NovostiService } from '../Services/novosti.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  HomeSlikeNovosti: any;
  HomeNovosti: any;
  constructor(private novostiService: NovostiService) {}

  ngOnInit(): void {
    this.HomeSlikeNovosti = this.novostiService.slike;
    this.HomeNovosti = this.novostiService.novosti;
  }
}
