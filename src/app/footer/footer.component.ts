import { Component, Inject } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  year: number;
  constructor(private router: Router,
    private appComponent: AppComponent,
    private viewportScroller: ViewportScroller,
    @Inject(DOCUMENT) private document: Document) {
    this.year = new Date().getFullYear();

  }

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
