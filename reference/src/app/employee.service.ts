import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://server.asia-note.com/api/employees');
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('http://server.asia-note.com/api/employee', employee);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`http://server.asia-note.com/api/employee/${id}`);
  }

  updateEmployee(id: number, value: any): Observable<object> {
    return this.http.put(`http://server.asia-note.com/api/employee/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://server.asia-note.com/api/employee/${id}`, { responseType: 'text' });
  }
}
