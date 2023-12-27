import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Portafolio } from '../proyectos/interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss'],
  animations: [
    trigger('textAnimation', [
      state('start', style({ opacity: 0 })),
      state('end', style({ opacity: 1 })),
      transition('start => end', animate('2000ms')),
    ]),
  ],
})
export class SobreMiComponent implements OnInit {
  componentPosition!: number;
  animationState = 'start';
  constructor(private el: ElementRef) { }
  ngOnInit() {
    // Obtiene la posición superior del componente después de la inicialización de la vista
    this.componentPosition = this.el.nativeElement.offsetTop;
  }
  @HostListener('window:scroll', ['$event'])
  checkIfInView() {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;

    // Verifica si el componente es visible en la pantalla
    if (scrollPosition > this.componentPosition - windowHeight + 100) {
      // Este método se puede llamar cuando el componente es visible en la pantalla
      this.startAnimation();
    } else {
      // Reinicia la animación si el componente ya no está visible
      this.animationState = 'start';
    }
  }
  startAnimation() {
    this.animationState = 'end'
  }


  list_Tecnologias: Portafolio[] = [
    { title: 'Tecnologias' },
    // Javascript logo
    {
      linkLogo:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },

    // Typescript logo
    {
      linkLogo:
        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    },

    // Html logo
    {
      linkLogo:
        'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    },

    // Css logo
    {
      linkLogo:
        'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png',
    },
    //NodeJs logo
    {
      linkLogo:
        'https://p7.hiclipart.com/preview/306/37/167/node-js-javascript-web-application-express-js-computer-software-others.jpg',
    },

    //Nest logo
    {
      linkLogo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png',
    },
    //Docker logo
    {
      linkLogo: 'assets/images/docker.png',
    },
    //Docker logo
    {
      linkLogo: 'https://cdn.worldvectorlogo.com/logos/postman.svg',
    },
    // mongoDb logo
    {
      linkLogo: 'https://www.svgrepo.com/show/331488/mongodb.svg',
    },
    // mongoDb logo
    {
      linkLogo:
        'https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg',
    },
    // Angular logo
    {
      linkLogo:
        'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    },
    // angular material logo
    { linkLogo: 'assets/images/material.png' },

    // sass logo
    {
      linkLogo:
        'assets/images/SassLogo.png',
    },

    // Boststrap logo
    {
      linkLogo:
        'assets/images/bootstrapLogo.png',
    },
  ];
}


