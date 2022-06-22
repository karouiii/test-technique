import { Component } from '@angular/core';
import { AssignmentService } from '../app/assignment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application-angular';
  myEmployees:any;
  p: any = 1;
  count: any = 10;

  constructor(private service:AssignmentService) {
    this.service.getEmployees().subscribe(result => {
      this.myEmployees = result;
      console.log(this.myEmployees);
    })
  }
}
