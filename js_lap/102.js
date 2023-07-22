class Vehicle  {
    constructor(Name , ID , company){
        this.Name=Name;
        this.ID = ID;
        this.compaye = company;
        
    }
}

class Car extends Vehicle{
  TypeCar;
}

class Airplane extends Vehicle{
TypeAirplane;
}

class Employee {
    constructor(Name_e,ID_e,DateOfBirth){
        this.Name_e=Name_e;
        this.DateOfBirth=DateOfBirth;
        this.ID_e=ID_e;

    }
    
}

class Driver extends  Employee{
    licenseID;
}
class Pilot extends Employee{
    licenseID;
}

class Booking {
    constructor(reservationDate,employeeId,vehiclesId,reservationID){
    this.reservationDate =reservationDate;
    this.employeeId =employeeId;
    this.vehiclesId =vehiclesId;
    this.reservationID =reservationID;
    }
}