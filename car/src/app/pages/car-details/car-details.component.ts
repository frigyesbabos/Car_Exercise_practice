import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.vo';
import { CarService } from 'src/app/services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  constructor(public carService: CarService, private router: Router) {}

  ngOnInit(): void {}

  deleteCar() {
    this.carService
      .deleteCar(this.carService.selectedCar!.id)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['cars']);
      });
  }
}
