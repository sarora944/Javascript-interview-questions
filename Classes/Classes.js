class Employee{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}

class Manager extends Employee{
    setDepartment(dept){
        this.department = dept
    }
    getDepartment(){
        return rhis.department
    }
}
const employee =new Employee("shubham", 29);
const manager = new Manager("Manager",33)
manager.setDepartment("manager")
console.log(employee)
console.log(manager)