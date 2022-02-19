import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';

import { CarOwnersService } from './services/car-owners.service';
import { IOwner } from './types/owner.interface'
import { OwnerFormComponent } from './components/owner-form/owner-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public title = 'CarOwnersService'
  public disabled: Boolean
  public owners$: Observable<IOwner[]>
  public displayedColumns: string[] = ['lastName', 'firstName', 'middleName', 'cars']
  public clickedRows = new Set<IOwner>()

  constructor(
    private readonly carOwnersService: CarOwnersService,
    public dialog: MatDialog
    ) {
    this.owners$ = this.carOwnersService.getOwners()
    this.disabled = true
  }

  ngOnInit() {

  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(OwnerFormComponent, {width: '1250px'})
  }

}
