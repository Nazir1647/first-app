import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  dropdown : FormGroup;
  CountryData: any;
  StateData: any;
  testForm : FormGroup | undefined;
  CountryDataMultiple: any;
  StateDataMultiple: any;

  multiselect : any; 

  dropdownList: any = [];
  //selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};
  data : any;

  
  constructor(private std: StudentService,private formBuilder : FormBuilder) {
    this.dropdown = new FormGroup({
      sCountry: new FormControl(''),
      sState: new FormControl(''),
      mCountry: new FormArray([]),
      mState: new FormControl('')
    });
    
  }





  ngOnInit() {
    this.GetCountry();  
    
    
    this.testForm = this.formBuilder.group({
      multi : ['',[]]
    })


    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  GetCountry() {
    this.std.GetCountry().subscribe((res: any) => {
      this.CountryData = res?.data;
      this.CountryDataMultiple = res?.data;
    });
  }

  SaveEmployee() {

  }

  GetState(e: any) {

    this.std.GetState(e).subscribe((res: any) => {
      if (res != null) {
        this.StateData = res.data;
      }
    });

  }

  onItemSelect(e: any) {
    debugger
    let Ids = new Array;
    Ids.push(e.id);
    //this.dropdown.controls.mCountry.setValue(e.id);
    //this.aliases.push(this.dropdown.control(''));
    // let Ids = e.map(function (a: any) { return a.id; });
    this.getStatesofMultiple(Ids)
  }

  onSelectAll(e: any) {
    let Ids = e.map(function (a: any) { return a.id; });
    this.getStatesofMultiple(Ids)
  }

  getStatesofMultiple(Ids: any) {
    this.std.GetStates(Ids).subscribe((res: any) => {
      if (res != null) {
        this.StateDataMultiple = res.data;
      }
    });
  }

}
