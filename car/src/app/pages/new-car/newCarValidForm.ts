import { INewCarForm } from './newCarForm.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class NewCarValidForm extends FormGroup<INewCarForm> {
  constructor() {
    super({
      model: new FormControl('', {
        nonNullable: true, validators: [Validators.required]
      }),
      firstRegistration: new FormControl('', {
        nonNullable: true, validators: [Validators.required]
      }),
      originField: new FormControl('', {
        nonNullable: true, validators: [ Validators.required]
      })
    })
  }
}
