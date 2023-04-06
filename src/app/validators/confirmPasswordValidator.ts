import { AbstractControl } from '@angular/forms';
export function confirmPasswordValidator(control:AbstractControl){
    const password= control.get('password');
    const confirmPassword=control.get('confirmPassword');
  
    if(password?.pristine && confirmPassword?.pristine){
     return null;
    }
    return password && confirmPassword && password != confirmPassword?{'misMatch' : true}:null
 };
 