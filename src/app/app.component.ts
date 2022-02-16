import { Component, OnInit } from '@angular/core';

import { CarOwnersService } from './services/car-owners.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CarOwnersService';

  constructor(private readonly carOwnersService: CarOwnersService) {}

  ngOnInit() {
    this.carOwnersService.getHeroes().subscribe(
      value => console.log(value)
    )
  }
}
