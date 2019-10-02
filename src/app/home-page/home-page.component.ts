import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {



  constructor(config: NgbCarouselConfig) {
    config.interval = 1500;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.wrap = true;
  }

  ngOnInit() {
  }

}
