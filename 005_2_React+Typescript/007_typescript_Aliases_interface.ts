/*Type aliases and interfaces are both used in TypeScript to define the shape of objects, but they have some differences and are suitable for different scenarios. */

/*-----------------------------------------------------------------Type Aliasess-------------------------------------------------------------------------------------
Type aliases, created with the type keyword, allow you to create a new name for a specific type or combination of types.



*/
/*--------------------------------------------------------------Interfaces------------------------------------------------------------------------------------------
Interfaces define a contract for object shapes. They specify the structure and types of properties and methods that an object must have to conform to the interface.
*/

// Base interface
interface Person {
  firstName: string;
  lastName?: string;
}

// Extended interface
interface Employee extends Person {
  employeeId: number;
  jobTitle: string;
}

function displayEmployeeInfo(employee: Employee) {
  console.log(`Employee ID: ${employee.employeeId}`);
  console.log(`Name: ${employee.firstName} ${employee.lastName || ''}`);
  console.log(`Job Title: ${employee.jobTitle}`);
}

let employeeData = {
  firstName: 'Alice',
  employeeId: 12345,
  jobTitle: 'Software Engineer'
};

displayEmployeeInfo(employeeData);
