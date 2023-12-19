import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { ScrollService } from '../scroll/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  activeSection = '';
  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollService.getActiveSection().subscribe((section) => {
      this.activeSection = section;
    });
  }
}



$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  }

  else {
    $('nav').removeClass('black');
  }
})
