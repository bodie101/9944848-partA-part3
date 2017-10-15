//Set varibles to get user input
let fname = prompt("Please enter your first name")
let lname = prompt("What is your last name")
let salary = prompt("What is your annual salary")

class Employee {
//Constructor to accept the new object 
    constructor(name, age) {
      this._fname = name;
      this._lname = lname;
      this._salary = salary;
    }
//Function called display Employee
    displayEmployee() {
        console.log(`Hello World`);
        alert(`My name is ${this.fname} my last name is ${this.lname} My salary is $ ${this.salary}`);
        console.log(`My name is ${this.fname} my last name is ${this.lname} My salary is $ ${this.salary}`);
    }    
}

//Methods of first name  and last name and salary
var employee = new Employee(); 
employee.fname = fname;
employee.lname = lname;
employee.salary = salary;


