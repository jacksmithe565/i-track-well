// sophisticated_code.js

/**
 * This code demonstrates a complex and sophisticated implementation of a hierarchical data structure.
 * It represents a company's organizational structure with multiple departments, employees, and positions.
 * The code showcases various operations for managing the organizational hierarchy, such as adding departments,
 * employees, promoting/demoting employees, retrieving information, etc.
 */

class Department {
  constructor(name) {
    this.name = name;
    this.employees = [];
    this.departments = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEmployee(employee) {
    const index = this.employees.indexOf(employee);
    if (index > -1) {
      this.employees.splice(index, 1);
    }
  }

  addDepartment(department) {
    this.departments.push(department);
  }

  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index > -1) {
      this.departments.splice(index, 1);
    }
  }

  getEmployeeCount() {
    let count = this.employees.length;
    for (const department of this.departments) {
      count += department.getEmployeeCount();
    }
    return count;
  }

  toString() {
    let str = `Department: ${this.name}\n`;
    str += `Employees: ${this.employees.length}\n`;
    str += `Departments: ${this.departments.length}\n\n`;

    if (this.departments.length > 0) {
      str += "Sub-Departments:\n";
      for (const department of this.departments) {
        str += `  - ${department.toString().split("\n").join("\n    ")}\n`;
      }
    }

    if (this.employees.length > 0) {
      str += "Employees:\n";
      for (const employee of this.employees) {
        str += `  - ${employee.name}\n`;
      }
    }

    return str;
  }
}

class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  promoteTo(newPosition) {
    this.position = newPosition;
  }

  demoteTo(newPosition) {
    this.position = newPosition;
  }

  toString() {
    return `Employee: ${this.name} (Position: ${this.position})`;
  }
}

// Usage example

// Create departments
const company = new Department("Company");
const finances = new Department("Finances");
const hr = new Department("Human Resources");
const it = new Department("IT");

// Create employees
const john = new Employee("John Doe", "Manager");
const jane = new Employee("Jane Smith", "HR Specialist");
const mark = new Employee("Mark Johnson", "Accountant");
const eric = new Employee("Eric Brown", "Software Engineer");
const emily = new Employee("Emily Davis", "Network Administrator");

// Build the hierarchy
company.addDepartment(finances);
company.addDepartment(hr);
hr.addEmployee(jane);
finances.addEmployee(mark);
company.addDepartment(it);
it.addEmployee(eric);
it.addEmployee(emily);

// Promote Jane to HR Manager
jane.promoteTo("HR Manager");

// Demote Emily to Junior Network Administrator
emily.demoteTo("Junior Network Administrator");

// Print the organizational structure
console.log(company.toString());

// Get the total number of employees
console.log("Total Employees:", company.getEmployeeCount());

// Remove Mark from the company
finances.removeEmployee(mark);

// Print the updated organizational structure
console.log(company.toString());

// Get the total number of employees again
console.log("Total Employees:", company.getEmployeeCount());

// ... (more operations and interactions with the organizational structure)