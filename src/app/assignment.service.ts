import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor( private http:HttpClient ) { }
  apiurl="https://dummy.restapiexample.com/api/v1/employees";
  myEmployees:any;

  getEmployees(){
    return this.http.get(this.apiurl);
  }

}
