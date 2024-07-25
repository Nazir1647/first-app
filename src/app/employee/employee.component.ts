import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  CountryData: any;
  StateData: any;
  EmployeeData: any;
  selectedCar: number = 0;
  constructor(private std: StudentService, private emp: EmployeeService) { }


  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  employee = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    country: new FormControl(''),
    state: new FormControl(''),
    gender: new FormControl(''),
    dob: new FormControl(''),
    isActive: new FormControl(false),
  });

  

  ngOnInit() {
    this.GetEmployee();
    this.GetCountry();
    this.employee.controls.state.disable();

    this.employee.controls.country.valueChanges.subscribe((value) => {
      if (value === '') {
        this.employee.controls.state.disable();
        this.employee.controls.state.setValue('');
        this.StateData = null;
      }
      else {
        this.employee.controls.state.enable();
      }

    });

    this.employee.controls.gender.setValue('0');

  }

  GetCountry() {
    this.std.GetCountry().subscribe((res) => {
      this.CountryData = res;
    });
  }

  GetEmployee() {
    this.emp.getEmployee().subscribe((res) => {
      console.log(res);
      this.EmployeeData = res;
    });
  }

  SaveEmployee() {
    this.emp.save(this.employee.value).subscribe((res) => {
      alert('Data save successfully');
      this.GetEmployee();
      this.employee.reset();
    });
  }

  GetState(e: any) {
   debugger;
    let id = e;
    this.std.GetState(id).subscribe((res) => {
      this.StateData = res;
    });
  }

}
