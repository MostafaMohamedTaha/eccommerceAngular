import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function passwordMatch(complexPassword:boolean=false):ValidatorFn{
    return(control:AbstractControl):ValidationErrors|null=>{
        let passwordControl=control.get('password')
        let confirmPasswordControl=control.get('confirmPassword')
        // if(!passwordControl || !confirmPasswordControl || !passwordControl.value || !confirmPasswordControl.value)
        //     return null
        let valueError={
            unmatchedPassword:{
                "password":passwordControl?.value,
                "confirmPassword":confirmPasswordControl?.value
            }
        }
        return passwordControl?.value==confirmPasswordControl?.value?null:valueError
    }
}