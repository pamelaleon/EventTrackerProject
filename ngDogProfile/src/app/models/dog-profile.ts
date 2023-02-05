export class DogProfile {

  id: number;
  name: string;
  birthday: string;
  age: number;
  breed: string;
  weight: number;
  chipNumber: number;
  registrationNumber: number;
  foodBrand: string;
  amountFood: string;
  vetHospitalName: string;
  ownerName: string;


  constructor(id: number = 0, name: string = '', birthday: string = '', age: number = 0,
  breed: string = '', weight: number = 0, chipNumber: number = 0, registrationNumber: number = 0,
  foodBrand: string = '', amountFood: string = '', vetHospitalName: string = '', ownerName: string = '') {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.age = age;
    this.breed = breed;
    this.weight = weight;
    this.chipNumber = chipNumber;
    this.registrationNumber = registrationNumber;
    this.foodBrand = foodBrand;
    this.amountFood = amountFood;
    this.vetHospitalName = vetHospitalName;
    this.ownerName = ownerName;
  }

}
