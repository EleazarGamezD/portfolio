import { Component } from '@angular/core';
import { Portafolio } from './interface';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {

  list_Proyectos: Portafolio[] = [

    {
      icon: 'assets/images/node-Express-logo.png',
      image: 'assets/images/img1.jpg',
      title: 'Notes App',
      description: 'Api Backend para manejo de Notas tipo Pos sticks con manejo de usuarios, CRUD completo de Notas, manejo de Categorías asignadas a las notas ',
      technologies: 'Stack de tecnologías : Nodejs, ExpressJS, JavaScript, MongoDB, JsonWebToken (JTW), Html , CSS',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/Tu-Bodega',
    },

    {
      icon: '/assets/images/NestJS.svg.png',
      image: 'assets/images/img1.jpg',
      title: 'Tu Bodega Api',
      description:
        'Api de un E-comerce escalable con funciones básicas como creación de usuarios, roles de usuarios, creación de productos, carrito de compras por usuario, control de compras, usando base de datos Relacional Postgres y TyORM para el manejo, sistema de autenticaciones y encriptado de passwords.',
      technologies:
        'Stack de tecnologías : Nodejs, NestJs, Typescript, Postgres Sql, TypeORM, JsonWebToken (JTW), Swagger(documentación)  ',
      linkProyecto: 'https://tu-bodega.vercel.app/',
      linkCodigo: 'https://github.com/EleazarGamezD/Tu-Bodega',
    },
    {
      icon: '/assets/images/NestJS.svg.png',
      image: 'src/assets/images/img1.jpg',
      title: 'Pokedex',
      description:
        'Backend con conexion al API pokeapi.co para implementación del seed, con conexión a MongoAtlas, usando el framework NestJs',
      technologies:
        'Stack de tecnologías : NestJs, NodeJs, MongoAtlas, Javascript, Typescript, docker',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/pokedex',
    },
    {
      icon: '/assets/images/NestJS.svg.png',
      image: 'src/assets/images/img1.jpg',
      title: 'GG-Shop',
      description:
        'Backend de una app web tipo ecomerce realizada durante mis clases, con funciones básicas de productos y autenticación de usuarios, con conexión a  base de datos Postgres uso de TypeOrm, e implementación de un chat por cliente usando Websockets. ',
      technologies:
        'Stack de tecnologías : Nestjs, NodeJs, Postgres, TypeOrm, Javascript, Typescript, Websockets, Swagger (documentacion), Docker',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/gg-shop',
    },
    {
      icon: '/assets/images/NestJS.svg.png',
      image: 'src/assets/images/img1.jpg',
      title: 'Proyecto WS-Client',
      description:
        'Peque#o proyecto frontend que se conecta al api GG-shop para el servicio de websocket',
      technologies: 'Stack de tecnologías : NodeJs, Typescript, Css, Html',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/ws-client',
    },

    {
      icon: '/assets/images/Angular_full_color_logo.svg',
      image: 'src/assets/images/img1.jpg',
      title: 'Rick-And-Morty-Angular-Test',
      description:
        'Proyecto tipo ensayo, con conexión al api rickymortyapi.com realizado para aprender el uso de técnicas frontend a nivel junior  ',
      technologies:
        'Stack de tecnologías : NodeJs, Typescript,Javascript, Css, Html, Angular, Angular-Material.',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/CURSO',
    },

    {
      icon: '/assets/images/logo-yo-bh.png',
      image: 'src/assets/images/img1.jpg',
      title: 'Cursos',
      description:
        'Coleccion de proyectos realizados durante mis estudios de backend, divididos en carpetas segundo el ejercicio realizado donde tenemos: Auth, Compras, Mi-App, Proyecto-Mailer,Proyecto-Auth. ',
      technologies:
        'Stack de tecnologías : NodeJs, Typescript,Javascript,MongoDB, Css, Html, React, Postman',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/CURSO',
    },
  ];
}
