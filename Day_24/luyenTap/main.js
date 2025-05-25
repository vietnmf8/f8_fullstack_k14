import {Employee} from "./employee.js";

// Khởi tạo mảng Employees
const employees = [];

// Khởi tạo function tạo nhân viên
const createEmployee = ({id, name, address}) => {
    employees.push(new Employee(id, name, address));
}
// Gọi hàm
createEmployee({id: 1, name: 'test', address: 'address'})

//
for (const emp of employees) {
    console.log(emp.toString())
}