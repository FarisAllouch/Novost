import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from './Services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public novService: LoginService) {}
  title = 'novosti';
  HomeNovosti: string[];
  onClick() {
    this.novService.login = 'Login';
  }

  ngOnInit() {}
}
