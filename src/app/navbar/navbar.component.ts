import { Component, Inject } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private viewportScroller: ViewportScroller,
    @Inject(DOCUMENT) private document: Document) { }

  navigateTo(sectionId: string): void {
    if (sectionId === 'v1') {
      this.router.navigate(['/v1']);
    } else {
      this.router.navigate(['/']);
      const element = this.document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  getElementPosition(elementId: string): number {
    const element = this.document.getElementById(elementId);
    return element ? element.offsetTop : 0;
  }
}



$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  }

  else {
    $('nav').removeClass('black');
  }
})
