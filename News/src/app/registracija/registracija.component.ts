import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css'],
})
export class RegistracijaComponent implements OnInit {
  @ViewChild('f') subelement: NgForm;
  id: number = 0;
  onLoginout() {
    this.registarservis.login = 'Logout';
  }
  onPush() {
    this.registarservis.registar.push({
      id: (this.id += 1),
      name: this.subelement.value.name,
      email: this.subelement.value.email,
      password: this.subelement.value.password,
    });
  }
  onSubmit() {
    console.log(this.subelement);
    console.log(this.registarservis.registar);
  }
  constructor(public registarservis: LoginService) {}

  ngOnInit(): void {}
}
