import { Car } from '../types';

export const mockCars: Car[] = [
  {
    id: '1',
    brand: 'BMW',
    model: 'X5',
    registrationDate: new Date('2023-01-15'),
    vinNumber: 'WBAKJ2C51BC571552',
    equipments: ['Air Conditioning', 'Leather Seats', 'Navigation System'],
    price: 65000,
    currency: 'USD',
    condition: 'new'
  },
  {
    id: '2',
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    registrationDate: new Date('2022-11-20'),
    vinNumber: 'WDDKJ4GB2CF018539',
    equipments: ['360° Camera System', 'Heated Seats', 'Premium Sound System'],
    price: 58000,
    currency: 'EUR',
    condition: 'used'
  },
  {
    id: '3',
    brand: 'Audi',
    model: 'Q7',
    registrationDate: new Date('2023-03-05'),
    vinNumber: 'WAUZZZ4L2CD001234',
    equipments: ['Winter Tires', 'Parking Sensors', 'Head-up Display'],
    price: 75000,
    currency: 'USD',
    condition: 'new'
  }
];