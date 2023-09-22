import { Component } from '@angular/core';
import { Portafolio } from '../interface';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  list_Proyectos: Portafolio[] = [
    {
      image: 'assets/images/img1.jpg',
      text1: 'Tu Bodega Api',
      text2:
        'Api de un E-comerce escalable con funciones básicas como creación de usuarios, roles de usuarios, creación de productos, carrito de compras por usuario, control de compras, usando base de datos Relacional Postgres y TyORM para el manejo, sistema de autenticaciones y encriptado de passwords.',
      text3:
        'Stack de tecnologías : Nodejs, NestJs, Typescript, Postgres Sql, TypeORM, JsonWebToken (JTW)  ',
      link: 'https://aplicationpaises.netlify.app/',
    },
    {
      image: 'src/assets/images/img1.jpg',
      text1: 'App-Maps',
      text2:
        'Aplicación es buscar sitios, te muestra tu ubicación actual, siempre y cuando le permitas acceso.',
      text3: 'Observación: Proyecto de práctica.',
      link: 'https://aplicationmaps.netlify.app/',
    },
    {
      image: 'src/assets/images/img1.jpg',
      text1: 'Proyecto Yugiho',
      text2:
        'Aplicación que Busca los personajes, tiene una tarjeta y un scroll infinito.',
      text3: 'Observación: Proyecto de práctica.',
      link: 'https://appyugiho.netlify.app/',
    },
    {
      image: 'src/assets/images/img1.jpg',
      text1: 'Proyecto Store',
      text2:
        'Aplicación que tiene varios módulos, los cuáles son admin, user y el del store, es una minitienda, que básicamente puedes ver productos, comprar, registrate, solo el modulo admin puede ingresar productos y usuarios.',
      text3:
        'Observación: Proyecto de personal para ver mis capacidades, esta todavia en proceso. Nota: El backend lo realizo Eleazar Gamez.',
      link: 'https://github.com/sorvylenny/tubodegaapp',
    },
  ];
  list_Icon: Portafolio[] = [
    {
      link: 'https://www.linkedin.com/in/katherine-flores-marin/',
      text1: 'bi bi-linkedin',
      text2:
        'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z',
    },
    {
      link: 'https://github.com/sorvylenny',
      text1: 'bi bi-github',
      text2:
        'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z',
    },
    {
      link: 'mailto:floresmkatherine@gmail.com',
      text1: 'bi bi-envelope-at-fill',
      text2:
        'M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z',
      text3:
        'M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z',
    },
  ];

  list_Tecnologias: Portafolio[] = [
    { title: 'Tecnologias' },
    {
      link: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    },
    {
      link: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
    {
      link: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    },
    {
      link: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png',
    },
    {
      link: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
    },
    {
      link: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    },
    {
      link: 'https://vitolavecchia.altervista.org/wp-content/uploads/2020/06/Cos%C3%A8-e-quali-sono-le-caratteristiche-del-DBMS-MongoDB.jpeg',
    },
    { link: 'assets/material.png' },
  ];
}
