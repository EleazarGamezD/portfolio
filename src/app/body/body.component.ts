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
      linkProyecto: 'https://devshop-dev.fl0.io/api',
      linkCodigo: 'https://github.com/EleazarGamezD/Tu-Bodega',
    },
    {
      image: 'src/assets/images/img1.jpg',
      text1: 'Pokedex',
      text2:
        'Backend con conexion al API pokeapi.co para implementación del seed, con conexión a MongoAtlas, usando el framework NestJs',
      text3:
        'Stack de tecnologías : NestJs, NodeJs, MongoAtlas, Javascript, Typescript, docker',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/pokedex',
    },
    {
      image: 'src/assets/images/img1.jpg',
      text1: 'GG-Shop',
      text2:
        'Backend de una app web tipo ecomerce realizada durante mis clases, con funciones básicas de productos y autenticación de usuarios, con conexión a  base de datos Postgres uso de TypeOrm, e implementación de un chat por cliente usando Websockets. ',
      text3:
        'Stack de tecnologías : Nestjs, NodeJs, Postgres, TypeOrm, Javascript, Typescript, Websockets, Swagger (documentacion), Docker',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/gg-shop',
    },
    {
      image: 'src/assets/images/img1.jpg',
      text1: 'Proyecto WS-Client',
      text2:
        'Peque#o proyecto frontend que se conecta al api GG-shop para el servicio de websocket',
      text3: 'Stack de tecnologías : NodeJs, Typescript, Css, Html',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/ws-client',
    },

    {
      image: 'src/assets/images/img1.jpg',
      text1: 'Rick-And-Morty-Angular-Test',
      text2:
        'Proyecto tipo ensayo, con conexión al api rickymortyapi.com realizado para aprender el uso de técnicas frontend a nivel junior  ',
      text3:
        'Stack de tecnologías : NodeJs, Typescript,Javascript, Css, Html, Angular, Angular-Material.',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/CURSO',
    },

    {
      image: 'src/assets/images/img1.jpg',
      text1: 'Cursos',
      text2:
        'Coleccion de proyectos realizados durante mis estudios de backend, divididos en carpetas segundo el ejercicio realizado donde tenemos: Auth, Compras, Mi-App, Proyecto-Mailer,Proyecto-Auth. ',
      text3:
        'Stack de tecnologías : NodeJs, Typescript,Javascript,MongoDB, Css, Html, React, Postman',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/CURSO',
    },
  ];

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

  // footer year
  //profile photo
  photo: string;
  year: number;
  constructor() {
    this.year = new Date().getFullYear();
    this.photo = 'assets/images/profile.jpg';
  }
}




