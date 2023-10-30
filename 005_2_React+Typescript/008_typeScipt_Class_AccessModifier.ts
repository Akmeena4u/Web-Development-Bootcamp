//In TypeScript, you can define classes to create blueprints for objects. Classes provide a way to encapsulate properties and methods into reusable structures.
//Additionally, TypeScript supports access modifiers that allow you to control the visibility and accessibility of class members. 


class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log('Good morning ' + this.employeeName);
  }
}

let emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log('Manager delgating tasks' + this.employeeName);
  }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
