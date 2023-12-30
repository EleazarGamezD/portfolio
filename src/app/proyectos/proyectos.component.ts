import { Component } from '@angular/core';
import { Portafolio } from './interface';
import { MatDialog } from '@angular/material/dialog';
import { VideosComponent } from './videos/videos.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss',]
})
export class ProyectosComponent {

  constructor(
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver

  ) { }
  list_Proyectos: Portafolio[] = [


    {
      icon: 'assets/images/node-Express-logo.png',
      video: 'assets/videos/Mailer PF/MailerPF.mp4',
      image: 'assets/images/img1.jpg',
      title: 'Mailer App',
      description: 'Api Backend para envio de Email desde mi portafolio que envia dos(2) Emails uno mi y el otro para la persona que me escribe para notificar la recepción  ',
      technologies: 'Stack de tecnologías : Nodejs, ExpressJS, JavaScript, Nodemailer, GoogleMails',
      linkProyecto: 'Link Privado',
      linkCodigo: 'https://github.com/EleazarGamezD/Mailer-Pf',
    },


    {
      icon: 'assets/images/node-Express-logo.png',
      video: 'assets/videos/Noes-App/NotesApp.mp4',
      image: 'assets/images/img1.jpg',
      title: 'Notes App',
      description: 'Api Backend para manejo de Notas tipo Pos sticks con manejo de usuarios, CRUD completo de Notas, manejo de Categorías asignadas a las notas ',
      technologies: 'Stack de tecnologías : Nodejs, ExpressJS, JavaScript, MongoDB, JsonWebToken (JTW), Html , CSS',
      linkProyecto: 'https://back-app-notas.vercel.app/',
      linkCodigo: 'https://github.com/EleazarGamezD/back-app-notas',
    },

    {
      icon: 'assets/images/NestJS.svg.png',
      video: 'assets/videos/Tu Bodega/Tu-bodega.mp4',
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
      icon: 'assets/images/NestJS.svg.png',
      video: 'assets/videos/Pokedex/Pokedex.mp4',
      image: 'assets/images/img1.jpg',
      title: 'Pokedex',
      description:
        'Backend con conexion al API pokeapi.co para implementación del seed, con conexión a MongoAtlas, usando el framework NestJs',
      technologies:
        'Stack de tecnologías : NestJs, NodeJs, MongoAtlas, Javascript, Typescript, docker',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/pokedex',
    },
    {
      icon: 'assets/images/NestJS.svg.png',
      video: 'assets/videos/GG-SHOP/GG-SHOP.mp4',
      image: 'assets/images/img1.jpg',
      title: 'GG-Shop',
      description:
        'Backend de una app web tipo ecomerce realizada durante mis clases, con funciones básicas de productos y autenticación de usuarios, con conexión a  base de datos Postgres uso de TypeOrm, e implementación de un chat por cliente usando Websockets. ',
      technologies:
        'Stack de tecnologías : Nestjs, NodeJs, Postgres, TypeOrm, Javascript, Typescript, Websockets, Swagger (documentacion), Docker',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/gg-shop',
    },
    {
      icon: 'assets/images/NestJS.svg.png',
      video: 'assets/videos/GG-SHOP/GG-SHOP.mp4',
      image: 'assets/images/img1.jpg',
      title: 'Proyecto WS-Client',
      description:
        'Peque#o proyecto frontend que se conecta al api GG-shop para el servicio de websocket',
      technologies: 'Stack de tecnologías : NodeJs, Typescript, Css, Html',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/ws-client',
    },

    {
      icon: 'assets/images/Angular_full_color_logo.svg',
      video: 'assets/videos/Rick And Morty/RickAndMorty.mp4',
      image: 'assets/images/img1.jpg',
      title: 'Rick-And-Morty-Angular-Test',
      description:
        'Proyecto tipo ensayo, con conexión al api rickymortyapi.com realizado para aprender el uso de técnicas frontend a nivel junior  ',
      technologies:
        'Stack de tecnologías : NodeJs, Typescript,Javascript, Css, Html, Angular, Angular-Material.',
      linkProyecto: 'https://rickandmory-angulartest.netlify.app/',
      linkCodigo: 'https://github.com/EleazarGamezD/Rick-And-Morty-Angular-Test-',
    },

    {
      icon: 'assets/images/logo-yo-bh.png',
      video: 'assets/videos/Cursos-Apps/Cursos-Apps.mp4',
      image: 'assets/images/img1.jpg',
      title: 'Cursos',
      description:
        'Coleccion de proyectos realizados durante mis estudios de backend, divididos en carpetas segundo el ejercicio realizado donde tenemos: Auth, Compras, Mi-App, Proyecto-Mailer,Proyecto-Auth. ',
      technologies:
        'Stack de tecnologías : NodeJs, Typescript,Javascript,MongoDB, Css, Html, React, Postman',
      linkProyecto: '',
      linkCodigo: 'https://github.com/EleazarGamezD/CURSO',
    },
  ];

  openVideoDialog(video: string): void {
    console.log(video);

    const dialogRef = this.dialog.open(VideosComponent, {
      data: { video },
      width: '950px',
      height: '600px',
    });

    // Verificar si el dispositivo es un celular y ajustar el tamaño del diálogo
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      if (result.matches) {
        dialogRef.updateSize('100%', '40%');
      }
    });
  }



}
