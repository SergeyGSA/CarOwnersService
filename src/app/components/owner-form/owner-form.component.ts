import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnerFormComponent implements OnInit {
  public ownerForm: FormGroup 

  get carNumber(): any {
    return this.ownerForm.get('cars.carNumber')
  }

  get manufacturer(): any {
    return this.ownerForm.get('cars.manufacturer')
  }

  get model(): any {
    return this.ownerForm.get('cars.model')
  }

  get manufactureYear(): any {
    return this.ownerForm.get('cars.manufactureYear')
  }

  constructor( private fb: FormBuilder ) {
    this.ownerForm = this.fb.group({
        lastName: ['', [Validators.required,]],
        firstName: ['', [Validators.required]],
        middleName: ['', [Validators.required]],
        cars: this.fb.group({
          carNumber: ['', [Validators.required, Validators.pattern(/^[A-Z]{2}(?!0{4})\d{4}[A-Z]{2}$/)]],
          manufacturer: ['', [Validators.required]],
          model: ['', [Validators.required]],
          manufactureYear: ['', [Validators.required, Validators.min(1990), Validators.max(2022)]]
        }),
      })
   }

  ngOnInit(): void {
  }

  public ownerSubmit(): void {
    console.log(this.carNumber.errors)
  }
}
