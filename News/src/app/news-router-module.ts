import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './console/console.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PretragaComponent } from './pretraga/pretraga.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { VijestidetaljnoComponent } from './vijestidetaljno/vijestidetaljno.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'console', component: ConsoleComponent },
  {
    path: 'login-page',
    component: LoginComponent,
  },
  { path: 'detaljno/:id', component: VijestidetaljnoComponent },
  { path: 'pretraga', component: PretragaComponent },
  { path: 'login-page/register', component: RegistracijaComponent },
  { path: 'console/edit/:id', component: EditComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule implements OnInit {
  constructor() {}
  ngOnInit() {}
}
