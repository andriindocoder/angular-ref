import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: '../employee-list/employee-list.component.html',
  styleUrls: ['../employee-list/employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
