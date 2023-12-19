import { Component } from '@angular/core';
import { Portafolio } from '../interface';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent {





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
  ];
}
