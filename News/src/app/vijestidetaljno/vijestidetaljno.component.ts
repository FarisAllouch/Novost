import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NovostiService } from '../Services/novosti.service';
@Component({
  selector: 'app-vijestidetaljno',
  templateUrl: './vijestidetaljno.component.html',
  styleUrls: ['./vijestidetaljno.component.css'],
})
export class VijestidetaljnoComponent implements OnInit {
  HomeSlikeNovosti: any;
  HomeNovosti: any;
  HomeDetaljno: any;
  novostId: number;
  constructor(
    private route: ActivatedRoute,
    private novostiService: NovostiService
  ) {}

  ngOnInit(): void {
    (this.novostId = this.route.snapshot.params['id']),
      console.log(this.novostId);
    this.HomeSlikeNovosti = this.novostiService.slike;
    this.HomeNovosti = this.novostiService.novosti;
    this.HomeDetaljno = this.novostiService.detaljno;
  }
}
