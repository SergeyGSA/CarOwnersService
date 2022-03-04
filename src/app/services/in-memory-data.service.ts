import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IOwner } from '../types/owner.interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const owners: IOwner[] = [
      {id: 1, lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович', cars: [
        {carNumber: 'AX2121HP', manufacturer: 'Hyundai', model: 'Accent', manufactureYear: 2009},
        {carNumber: 'BC7286AE', manufacturer: 'KIA', model: 'Optima', manufactureYear: 2019},
      ]},
      {id: 2, lastName: 'Петров', firstName: 'Петр', middleName: 'Петрович', cars: [
        {carNumber: 'PO5893KY', manufacturer: 'Ferrari', model: 'LaFerrari', manufactureYear: 2020},
        {carNumber: 'BE3631EM', manufacturer: 'Ford', model: 'Fusion', manufactureYear: 2016},
      ]},
      {id: 3, lastName: 'Васильев', firstName: 'Василий', middleName: 'Васильевич', cars: [
        {carNumber: 'AI3769OE', manufacturer: 'Toyota', model: 'Prius', manufactureYear: 2014},
        {carNumber: 'AP4545EB', manufacturer: 'BMW', model: 'X5', manufactureYear: 2014},
      ]},
      {id: 4, lastName: 'Краснова', firstName: 'Ольга', middleName: 'Георгиевна', cars: [
        {carNumber: 'AL5793PV', manufacturer: 'Volkswagen', model: 'Touareg', manufactureYear: 2006},
        {carNumber: 'BH7222IH', manufacturer: 'Hyundai', model: 'Sonata', manufactureYear: 2009},
      ]},
      {id: 5, lastName: 'Дружкова', firstName: 'Наталья', middleName: 'Игоревна', cars: [
        {carNumber: 'AE6432MN', manufacturer: 'Audi', model: 'Q7', manufactureYear: 2008},
        {carNumber: 'KA7459EO', manufacturer: 'Renault', model: 'Megane', manufactureYear: 2017},
      ]},
    ]

    return {owners} 
  }

  genId(owners: IOwner[]): number {
    return Math.max(...owners.map((owner: IOwner) => owner.id)) + 1
  }
}
