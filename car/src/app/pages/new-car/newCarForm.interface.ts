import { FormControl } from "@angular/forms";

export interface INewCarForm {
  model: FormControl<string>
  FirstRegistration: FormControl<string>
  origin: FormControl<string>
}
