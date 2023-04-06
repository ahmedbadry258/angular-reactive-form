import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator, forbiddenNameValidator } from '../validators/validations';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeForm :FormGroup;
  constructor(private fb:FormBuilder) {
    // this.employeeForm= new FormGroup({
    //   username: new FormControl(''),
    //   password:new FormControl(''),
    //   confirmPassword:new FormControl(''),
    //   address:new FormGroup({
    //     city:new FormControl(''),
    //     street:new FormControl(''),
    //     postal:new FormControl('')
    //   })
    // })
    this.employeeForm= this.fb.group({
      username: ['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/user/),forbiddenNameValidator(/admin/)]],
      password:[''],
      confirmPassword:[''],
      address:this.fb.group({
        city:[''],
        street:[''],
        postal:['']
      })
    },{validators:[confirmPasswordValidator]})
   }

  ngOnInit(): void {
    // this.getData();
  }
  getData(){
    this.employeeForm.patchValue({
      username:'Ahmed',
      // password:"123",
      // confirmPassword:"123",
      address:{
        city:"cairo",
        street:"test",
        postal:"22"
      }
    })
  }

  get username(){
    return this.employeeForm.get('username');
  }
}
