import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car.vo';
import { CarService } from 'src/app/services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars$: Observable<Car[]>

  constructor (private carService: CarService, private router: Router) {
    this.cars$ = this.carService.getCars();
  }

  ngOnInit(): void {
  }

}
