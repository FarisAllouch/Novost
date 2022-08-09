import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NovostiService } from './Services/novosti.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConsoleComponent } from './console/console.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './news-router-module';
import { HomeComponent } from './home/home.component';
import { VijestidetaljnoComponent } from './vijestidetaljno/vijestidetaljno.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PretragaComponent } from './pretraga/pretraga.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { LoginService } from './Services/login.service';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    LoginComponent,
    ConsoleComponent,
    AppComponent,
    LoginComponent,
    ConsoleComponent,
    HomeComponent,
    VijestidetaljnoComponent,
    PretragaComponent,
    RegistracijaComponent,
    EditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, Ng2SearchPipeModule],
  providers: [NovostiService, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
