class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  // Add someone as a subordinate of someone else
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }
  // How many subordinates underneath a given employee
  get numberOfSubordinates() {
    return this.subordinates.length;
  }
  // How many people inbetween someone and the CEO
     // Getters dont act like functions, they act like properties when calling them later.
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }
  // Do two employees have the same boss?
    // ALSO called like a property, not a function
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  // Traverse the tree to see who makes over a certain amount
  employeesThatMakeOver(amount) {

    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }

  // How many employees are under this employee?
  get totalEmployees() {
     let totalEmployees = 0; 
   for (const children of this.subordinates) {
    children.totalEmployees;
    totalEmployees ++;
   }
    return totalEmployees;

  }
}


const ada = new Employee("ada", "CEO", 3000000.00);
const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Craig", "VP Marketing", 1000000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

 // Called this way because its a getter method, not a normal function. Calling it like a property of Phil!
// console.log(phil.numberOfPeopleToCEO);
 // Also called like a property
// console.log("SAME BOSS? ", phil.hasSameBoss(arvinder))

console.log("ADA employees below:  ", ada.totalEmployees);

// console.log(ada);

// DEPTH FIRST TRAVERSAL  *EXAMPLE*  -----------------------------------------------------------------------------------------------------------------

class Node {

  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }

  depthFirstTraversal() {

    console.log(this);

    for (const childNode of this.children) {
      childNode.depthFirstTraversal(); 
    }
  }
}
