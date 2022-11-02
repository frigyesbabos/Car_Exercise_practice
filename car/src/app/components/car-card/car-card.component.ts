import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car.vo';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent implements OnInit {
  @Input() origin?: string;
  @Input() model?: string;
  @Input() firstRegistration?: number;

  @Input() cars?: Car;
  @Input() object: any;

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {}

  removeCar() {
    this.carService.deleteCar(this.object.id).subscribe((data) => {
      console.log(data);
    });
  }

  toDetails() {
    this.carService.selectedCar = this.object;
    this.router.navigate(['cardetails'], {
        queryParams: { id: this.object.id },
      });
  }
}
