import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { CarService } from './services/car.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CarsComponent } from './pages/cars/cars.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { NewCarComponent } from './pages/new-car/new-car.component';
import { CarCardComponent } from './components/car-card/car-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    ExerciseComponent,
    CarsComponent,
    CarDetailsComponent,
    NewCarComponent,
    CarCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
