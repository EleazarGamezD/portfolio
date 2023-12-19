import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { NgxTypedJsModule } from 'ngx-typed-js';


import { BodyComponent } from './body/body.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CvComponent } from './cv/cv.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollService } from './scroll/scroll.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [AppComponent, BodyComponent, HomeComponent, SobreMiComponent, ProyectosComponent, ContactoComponent, CvComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    NgxTypedJsModule,],
  providers: [ScrollService],
  bootstrap: [AppComponent],
})
export class AppModule { }
