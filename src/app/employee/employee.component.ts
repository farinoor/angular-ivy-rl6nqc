import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeArray: Employee[];
  constructor(private emp: EmployeeService) {
    this.employeeArray = this.emp.employeeArray;
  }

  ngOnInit() {}

  view(index: number) {
    // alert(index);
    this.emp.selectedEmployee = index;
  }
}
