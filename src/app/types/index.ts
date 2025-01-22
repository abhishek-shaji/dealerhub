export interface Car {
  id: string;
  brand: string;
  model: string;
  registrationDate: Date;
  vinNumber: string;
  equipments: string[];
  price: number;
  currency: string;
  condition: 'new' | 'used';
}

export const BRANDS = [
  'Audi', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Toyota', 
  'Honda', 'Ford', 'Chevrolet', 'Hyundai', 'Kia',
  'Nissan', 'Mazda', 'Volvo', 'Porsche', 'Tesla'
];

export const CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY'];

export const EQUIPMENTS = [
  'Air Conditioning',
  'Winter Tires',
  '360° Camera System',
  'Fog Lights',
  'Leather Seats',
  'Sunroof',
  'Navigation System',
  'Bluetooth Connectivity',
  'Heated Seats',
  'Parking Sensors',
  'Blind Spot Monitor',
  'Lane Departure Warning',
  'Adaptive Cruise Control',
  'Premium Sound System',
  'Wireless Phone Charging',
  'Head-up Display',
  'Power Tailgate',
  'Keyless Entry',
  'Remote Start',
  'Third Row Seating',
  'Roof Rails',
  'Towing Package',
  'Sport Package',
  'Premium Wheels'
];