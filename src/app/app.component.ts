import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from './scroll/scroll.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';


  showPopup = false;

  togglePopup(show: boolean) {
    this.showPopup = show;
  }

}
