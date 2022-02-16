import { ICar } from "./car.interface";

export interface IOwner {
  readonly id: number,
  lastName: string,
  firstName: string,
  middleName: string,
  cars: ICar[]
}