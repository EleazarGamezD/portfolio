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
import { MatDialogModule } from '@angular/material/dialog';

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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { VideosComponent } from './proyectos/videos/videos.component';


@NgModule({
  declarations: [AppComponent, BodyComponent, HomeComponent, SobreMiComponent, ProyectosComponent, ContactoComponent, CvComponent, NavbarComponent, FooterComponent, VideosComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    NgxTypedJsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    MatDialogModule,
    RecaptchaFormsModule],
  providers: [ScrollService,],
  bootstrap: [AppComponent],
})
export class AppModule { }
