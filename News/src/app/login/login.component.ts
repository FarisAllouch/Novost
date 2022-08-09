import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('f') formelement: NgForm;
  logregistar = this.logservice.registar;
  email: string = '';
  password: string = '';
  da = true;
  constructor(private router: Router, public logservice: LoginService) {}
  onSubmit() {
    console.log(this.formelement);
  }
  OnTestPassword() {
    for (let a of this.logregistar) {
      if (
        this.formelement.value.email == a.email &&
        this.formelement.value.password == a.password
      ) {
        this.router.navigate(['']);
      }
      if (
        this.formelement.value.email == 'test@gmail.com' &&
        this.formelement.value.password == 'test'
      ) {
        this.router.navigate(['console']);
      }
    }
  }
  onLoginout() {
    this.logservice.login = 'Logout';
    console.log(this.logservice.login);
  }

  ngOnInit(): void {}
}
