import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NovostiService } from '../Services/novosti.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private novostiservice: NovostiService,
    private route: ActivatedRoute
  ) {}
  @ViewChild('f') element: NgForm;
  param;

  ngOnInit(): void {
    this.param = this.route.snapshot.params['id'];
  }
  onSubmit() {
    console.log(this.element);
    for (let a of this.novostiservice.novosti) {
      if (a.id == this.param) {
        a.novost = this.element.value.naslov;
      }
    }
    for (let b of this.novostiservice.slike) {
      if (b.id == this.param) {
        b.slika = this.element.value.slika;
      }
    }
  }
}
