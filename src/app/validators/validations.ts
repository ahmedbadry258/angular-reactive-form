import { AbstractControl } from "@angular/forms";
import { __values } from "tslib";

// export function forbiddenNameValidator(control :AbstractControl){
//     console.log(control.value)
// const forbedden=/admin/.test(control.value);
// console.log(forbedden)
// return forbedden ?{'ForbiddenName':{value:control.value}}:null;
// }
export function forbiddenNameValidator(reg :RegExp){
   return (control :AbstractControl)=>{
    const forbedden =reg.test(control.value);
    return forbedden ?{'ForbiddenName':{value:control.value}}:null
};
};

export function confirmPasswordValidator(control:AbstractControl){
   const password= control.get('password');
   const confirmPassword=control.get('confirmPassword');
   if(password?.pristine && confirmPassword?.pristine){
    return null;
   }
   return password && confirmPassword && password.value != confirmPassword.value?{'misMatch' : true}:null
};