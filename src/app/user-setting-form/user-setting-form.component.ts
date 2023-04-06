import { NgForm, NgModel } from '@angular/forms';
import { UserSetting } from './../data/user-setting';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {
  title:string="";
originalUserSetting :UserSetting ={
  name:'',
  emailOffers:false,
 interfaceStyle:'',
 subscriptionType:'',
 notes:''
}
userSetting:UserSetting={...this.originalUserSetting}
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form :NgForm){
    console.log('in submit',form.valid)

  }
  onBlur(field:NgModel){
    console.log("blur ",field.valid)
  }

}
