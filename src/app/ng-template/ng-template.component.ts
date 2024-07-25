import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {
  public myVar = false;

  public employees = [
    {
      Id : 1,
      Name : 'Demo 1',
      Address : 'Address 1'
    },{
      Id : 2,
      Name : 'Demo 2',
      Address : 'Address 2'
    },{
      Id : 3,
      Name : 'Demo 3',
      Address : 'Address 3'
    }
  ]

}
