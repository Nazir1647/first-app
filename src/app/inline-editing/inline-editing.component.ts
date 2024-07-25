import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inline-editing',
  templateUrl: './inline-editing.component.html',
  styleUrl: './inline-editing.component.css'
})
export class InlineEditingComponent {
  public employeeForm: FormGroup;
  isCheckAll: boolean = false;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      tableRows: this.fb.array([],[Validators.required])
    });
    this.addRow();
  }

  createFormGroup(): FormGroup {
    return this.fb.group({
      firstname: ['',[Validators.required,Validators.minLength(3)]],
      lastname: ['',[Validators.required]],
      city:[''],
      state: [''],
      status: [''],
      ischecked: [false]
    });
  }

  get getFormControls() {
    const control = this.employeeForm.get('tableRows') as FormArray;
    return control;
  }

  addRow() {
    debugger
    const control =  this.employeeForm.get('tableRows') as FormArray;
    control.push(this.createFormGroup());
  }

  checkAll(checkVal: boolean) {
    
    this.getFormControls.controls.forEach(formGroup => {
      formGroup.get('ischecked')?.setValue(checkVal);
    });
  }

  onStatusChange(event:any, index: number) {
    debugger
    if(event.target.value == 'deactive'){
      const control =  this.employeeForm.get('tableRows') as FormArray;
      control.controls[index].get('state')?.disable();
      control.controls[index].get('city')?.disable();
    } else {
      const control =  this.employeeForm.get('tableRows') as FormArray;
      control.controls[index].get('state')?.enable();
      
      control.controls[index].get('city')?.enable();
    }
  }

  removeEmployee(index:number) {
    debugger
    const control =  this.employeeForm.get('tableRows') as FormArray;
    control.removeAt(index);
  }

  onSaveForm() {
    const formValue = this.employeeForm.value;
    console.log(formValue);
    
  }
}
