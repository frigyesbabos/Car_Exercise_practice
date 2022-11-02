import { Injectable } from '@angular/core';
import { Car } from '../models/car.vo';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }


  selectedCar: Car | undefined;

  // public getCars() {
  //   this.http.get<Car>(`${environment.apiUrl}/car`).pipe(take(1)).subscribe(data => console.log(data));
  // }

  public getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.apiUrl}/car`);
  }

  public getCarModel(model: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.apiUrl}/car?q=${model}`);
  }

  public AddNewCar(car: Car) {
    return this.http.post(`${environment.apiUrl}/car`, car);
  }

  public editCar(car: Car) {
    return this.http.put(`${environment.apiUrl}/car/${car.id}`, car);
  }

  public deleteCar(id: number) {
    return this.http.delete(`${environment.apiUrl}/car/${id}`);
  }
}
