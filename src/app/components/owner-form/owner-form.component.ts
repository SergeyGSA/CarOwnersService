import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnerFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
