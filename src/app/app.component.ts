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

  constructor(
    private router: Router,
    private scrollService: ScrollService
  ) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Agrega la lógica para determinar la sección visible aquí.
    const scrollPosition = window.scrollY;

    // Verifica si los elementos existen antes de acceder a sus propiedades
    const homeElement = document.getElementById('home');
    const aboutElement = document.getElementById('Sobre Mi');
    const projectsElement = document.getElementById('Portfolio');
    const contactElement = document.getElementById('Contacto');
    console.log('homeElement', homeElement, 'aboutElement', aboutElement, 'projectsElement', projectsElement, 'contactElement', contactElement)
    if (!homeElement || !aboutElement || !projectsElement || !contactElement) {
      console.log('no funciona')
      return;
    }

    const homeSection = homeElement.offsetTop;
    const aboutSection = aboutElement.offsetTop;
    const projectsSection = projectsElement.offsetTop;
    const contactSection = contactElement.offsetTop;

    let activeSection = 'home';

    if (scrollPosition >= aboutSection) {
      activeSection = 'sobre-mi';
    }

    if (scrollPosition >= projectsSection) {
      activeSection = 'portfolio';
    }

    if (scrollPosition >= contactSection) {
      activeSection = 'contacto';
    }

    // Notifica al servicio de scroll para que actualice la sección activa.
    this.scrollService.setActiveSection(activeSection);
  }

}
