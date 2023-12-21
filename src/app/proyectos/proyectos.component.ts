import { Component } from '@angular/core';
import { Portafolio } from '../interface';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {

  list_Proyectos: Portafolio[] = [

    {
      image: 'assets/images/img1.jpg',
      text1: 'Notes App',
      text2:
        'Api de notas ',
      text3:
        'Stack de tecnologías : Nodejs, NestJs, Typescript, Postgres Sql, TypeORM, JsonWebToken (JTW), Swagger(documentación)  ',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/Tu-Bodega',
    },

    {
      image: 'assets/images/img1.jpg',
      text1: 'Tu Bodega Api',
      text2:
        'Api de un E-comerce escalable con funciones básicas como creación de usuarios, roles de usuarios, creación de productos, carrito de compras por usuario, control de compras, usando base de datos Relacional Postgres y TyORM para el manejo, sistema de autenticaciones y encriptado de passwords.',
      text3:
        'Stack de tecnologías : Nodejs, NestJs, Typescript, Postgres Sql, TypeORM, JsonWebToken (JTW), Swagger(documentación)  ',
      linkProyecto: 'https://tu-bodega.4.us-1.fl0.io',
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
}
