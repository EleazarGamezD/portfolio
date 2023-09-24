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
        'Stack de tecnologías : Nodejs, NestJs, Typescript, Postgres Sql, TypeORM, JsonWebToken (JTW), Swagger(documentación)  ',
      linkProyecto: 'https://aplicationpaises.netlify.app/',
      linkCodigo: '',

      string1: '{',
      string2: '}',
    },
    {
      image: 'src/assets/images/img1.jpg',
      text1: 'App-Maps',
      text2:
        'Aplicación es buscar sitios, te muestra tu ubicación actual, siempre y cuando le permitas acceso.',
      text3: 'Observación: Proyecto de práctica.',
      linkProyecto: 'https://aplicationmaps.netlify.app/',
      linkCodigo: '',
      string1: '{',
      string2: '}',
    },
    {
      image: 'src/assets/images/img1.jpg',
      text1: 'Proyecto Yugiho',
      text2:
        'Aplicación que Busca los personajes, tiene una tarjeta y un scroll infinito.',
      text3: 'Observación: Proyecto de práctica.',
      linkProyecto: 'https://appyugiho.netlify.app/',
      linkCodigo: '',
      string1: '{',
      string2: '}',
    },
    {
      image: 'src/assets/images/img1.jpg',
      text1: 'Proyecto Store',
      text2:
        'Aplicación que tiene varios módulos, los cuáles son admin, user y el del store, es una minitienda, que básicamente puedes ver productos, comprar, registrate, solo el modulo admin puede ingresar productos y usuarios.',
      text3:
        'Observación: Proyecto de personal para ver mis capacidades, esta todavia en proceso. Nota: El backend lo realizo Eleazar Gamez.',
      linkProyecto: 'https://github.com/sorvylenny/tubodegaapp',
      linkCodigo: '',
      string1: '{',
      string2: '}',
    },
  ];

  list_Tecnologias: Portafolio[] = [
    { title: 'Tecnologias' },
    {
      linkLogo:
        'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    },
    {
      linkLogo:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
    {
      linkLogo:
        'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    },
    {
      linkLogo:
        'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png',
    },
    {
      linkLogo:
        'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
    },
    {
      linkLogo:
        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    },
    {
      linkLogo:
        'https://vitolavecchia.altervista.org/wp-content/uploads/2020/06/Cos%C3%A8-e-quali-sono-le-caratteristiche-del-DBMS-MongoDB.jpeg',
    },
    { linkLogo: 'assets/material.png' },
  ];
}
