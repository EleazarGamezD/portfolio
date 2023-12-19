import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {



  // footer year
  //profile photo
  photo: string;
  year: number;
  constructor() {
    this.year = new Date().getFullYear();
    this.photo = 'assets/images/profile.jpg';
  }

}
