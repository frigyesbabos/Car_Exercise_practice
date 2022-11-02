import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { CarsComponent } from './pages/cars/cars.component';
import { NewCarComponent } from './pages/new-car/new-car.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: 'exercise',
    pathMatch: 'full',
    component: ExerciseComponent,
  },
  {
    path: 'cars',
    pathMatch: 'full',
    component: CarsComponent,
  },
  {
    path: 'newcar',
    pathMatch: 'full',
    component: NewCarComponent,
  },
  {
    path: 'cardetails',
    pathMatch: 'full',
    component: CarDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
