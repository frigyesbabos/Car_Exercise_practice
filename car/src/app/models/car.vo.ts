export interface Car {
  id: number;
  model: string;
  firstRegistration: number;
  origin: string;
  description: string;
  carDetails: {
    kmPerGallon: number;
    cylinders: number;
    Displacement: number;
    horsepower: number;
    weight: number;
    acceleration: number;
  };
}
