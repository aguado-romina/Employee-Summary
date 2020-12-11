// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
      this.name = name;
      this.role = role;
      this.email = email;
      this.id = id;
    }
    getName() {
        return this.name;
    }
    getRole() {
        return "Employee";
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
  }
  
  module.exports = Employee;