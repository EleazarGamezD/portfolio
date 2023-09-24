import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { MailerComponent } from './mailer/mailer.component';

@NgModule({
  declarations: [AppComponent, BodyComponent, MailerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    NgxTypedJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
