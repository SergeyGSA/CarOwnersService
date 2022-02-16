import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CarOwnersService } from './services/car-owners.service';
import { IOwner } from './types/owner.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'CarOwnersService'
  public disabled = true
  public owners$: Observable<IOwner[]>
//---------------------------------------------------------------------
  public displayedColumns: string[] = ['lastName', 'firstName', 'middleName', 'cars']
  public clickedRows = new Set<IOwner>()
//---------------------------------------------------------------------
  constructor(private readonly carOwnersService: CarOwnersService) {
    this.owners$ = this.carOwnersService.getOwners()
  }

  ngOnInit() {
    
  }
}
