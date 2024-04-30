function Employee(name, age) {
    this.name = name;
    this.age = age;
}
Employee.prototype.setName = function(name){
    this.name = name
}
Employee.prototype.getName = function(){
    return this.name
}

Employee.prototype.setAge= function(age){
    this.age = age
}
Employee.prototype.getAge= function(){
    return this.age
}

function Manager (params){
    Employee.apply(this.params)
}

Manager.prototype = Object.assign(Employee.prototype);


const employee = new Employee();
employee.setName("shubham")
employee.setAge(29)
console.log("employee", employee)

const manager = new Manager();
Manager.prototype.constructor = Manager; //if we dont give this, Manager constructor function will point to the employee constructor
manager.setName("abc-manager")
console.log("manager", manager)