import { FormControl } from "@angular/forms";

export interface INewCarForm {
  model: FormControl<string>
  firstRegistration: FormControl<string>
  originField: FormControl<string>
}
