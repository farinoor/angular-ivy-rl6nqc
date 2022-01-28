import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee = {
    Name: 'Aurora',
    Age: 53,
    Email: 'ante.blandit@disparturient.ca',
    'Date of joining': '10/06/2019',
    'Phone number': '1628101902299',
    Street: '493 Iaculis Rd.',
    City: 'Lewiston',
    Zip: '42591-180',
    Region: 'Maine',
    Country: 'Sudan',
    Info: 'est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia',
    EmployeeID: 101,
  };
  employee2 = {
    Name: 'Lamar',
    Age: 64,
    Email: 'Quisque.tincidunt@SuspendisseduiFusce.com',
    'Date of joining': '18/10/2017',
    'Phone number': '1665061376299',
    Street: '510 Ante. Av.',
    City: 'Skegness',
    Zip: '4220',
    Region: 'Lincolnshire',
    Country: 'Samoa',
    Info: 'mi tempor lorem, eget mollis lectus pede et risus. Quisque',
    EmployeeID: 110,
  };

  constructor() {}
  backDetails() {}

  ngOnInit() {}
}
