import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { SelectDropDownModule } from 'ngx-select-dropdown'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  multiple: boolean = true;
  CountryData: any;
  StateData: any;
  StudentData: any;

  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    age: new FormControl(''),
    CountryId: new FormControl(''),
    StateId: new FormControl('')
  });


  constructor(private std: StudentService) { }

  onSubmit() {
    this.Save(this.profileForm.value);
  }

  ngOnInit() {
    this.getStudent();
    this.GetCountry();
    // this is use for dropdown disabled or not
    this.profileForm.controls.StateId.disable();
    this.profileForm.controls.CountryId.valueChanges.subscribe(value => {
      if (value == '') {
        this.profileForm.controls.StateId.disable();
        this.profileForm.controls.StateId.setValue('');
        this.StateData = null;
      }
      else {
        this.profileForm.controls.StateId.enable();
      }

    });
  }

  getStudent() {
    this.std.getStudent().subscribe((res: any) => {
      this.StudentData = res?.data;
    })
  }


  GetCountry() {
    this.std.GetCountry().subscribe((res: any) => {
      this.CountryData = res?.data;
    })
  }

  GetState(event: any) {
    debugger
    let Id = event.target?.value == null ? event : event.target?.value;
    if (Id !== '') {
      this.std.GetState(Id).subscribe((res: any) => {
        this.StateData = res?.data;
      })
    }
  }

  Save(form: any) {
    this.std.SaveStudent(form).subscribe(res => {
      alert('Data Save Successfully');
      this.getStudent();
      this.profileForm.reset();
    })
  }

  Delete(id: number) {
    this.std.DeleteStudent(id).subscribe(res => {
      alert('Data Delete Successfully');
      this.getStudent();
    });
  }

  Edit(row: any) {

    this.GetState(row?.countryId);

    this.profileForm.patchValue({
      id: row?.id,
      name: row?.name,
      age: row?.age,
      CountryId: row?.countryId,
      StateId: row?.stateId
    });
  }

}
