import { Car } from './../../models/car.vo';
import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { INewCarForm } from './newCarForm.interface';
import { NewCarValidForm } from './newCarValidForm';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css'],
})
export class NewCarComponent implements OnInit {
  newCarForm: FormGroup<INewCarForm> = new NewCarValidForm();

  constructor() {}

  get model(): FormControl {
    return this.newCarForm.get('model') as FormControl;
  }

  get firstRegistration(): FormControl {
    return this.newCarForm.get('firstRegistration') as FormControl;
  }

  get originField(): FormControl {
    return this.newCarForm.get('originField') as FormControl;
  }

  ngOnInit(): void {}

  createCarForm(): void {
    let newCarForm: Car = {
      model: this.model.value,
      firstRegistration: this.firstRegistration.value,
    };
  }
}
