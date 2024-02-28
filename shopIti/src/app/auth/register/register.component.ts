import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IUser } from 'src/app/model/iuser';
import { passwordMatch } from '../customValidation/passwordMatch';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  //#region prop
  register!: FormGroup;
  existUserEmail: string[] = []
  //#endregion

  //#region ctor 
  constructor(private registerService: FormBuilder) {
    //#region register
    this.existUserEmail = [
      "aaa@aaa.com",
      "bbb@bbb.com",
      "ccc@ccc.com",
      "ddd@ddd.com"
    ]
    this.register = registerService.group(
      {
        fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
        email: ['', [Validators.required, this.existEmailValidator(this.existUserEmail)]],
        phoneNumber: registerService.array(['']),
        address: registerService.group({
          city: [''],
          postalCode: [''],
          street: [''],
        }),
        password: ['',[Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
        confirmPassword: ['',[Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
        referral: [''],
        referralOther: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z]{3,}')]
        ],
      },
      {
        // Validators:[passwordMatch()]
        validators:passwordMatch()
      }
    )

    //#endregion
  }
  //#endregion

  //#region full name prop

  get fullName() {
    return this.register.get('fullName')
  }
  //#endregion

  //#region old form control
  // this.register=new FormGroup(
  //   {
  //     fullName:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{3}')]),
  //     email:new FormControl(''),
  //     phoneNumber:new FormControl(''),
  //     address:new FormGroup({
  //       city:new FormControl(''),
  //       postalCode:new FormControl(''),
  //       street:new FormControl('')
  //     }),
  //     password:new FormControl(''),
  //     confirmPassword:new FormControl(''),

  //   }
  // )
  //#endregion

  //#region referral

  get referral() {
    return this.register.get('referral')
  }
  get updateReferralValidator() {
    if (this.referral?.value == 'referralOther') {
      this.register.get('referralOther')?.addValidators([Validators.required, Validators.pattern('[A-Za-z]{3,}')])
    } else {
      this.register.get('referralOther')?.clearValidators()
    }
    return this.register.get('referralOther')?.updateValueAndValidity()
  }
  //#endregion

  //#region submit

  fillForm() {
    this.register.patchValue( //all value ,.patchValue some values
      {
        fullName: "iti",
        email: "mostafamohamedtaha.udemy@gmail.com",
        address: {
          city: "cairo",
          postalCode: "123123",
          street: "nasr"
        }
      }
    )
  }

  submit() {
    let registerUser: IUser = this.register.value as IUser
    console.log(registerUser)
  }
  //#endregion

  //#region phoneNumber

  get phoneNumbers() {
    return this.register.get('phoneNumber') as FormArray
  }
  addNumber(event: any) {
    this.phoneNumbers.controls.push(this.registerService.control(''));
    event.target?.classList.add('hidden')
  }
  //#endregion

  //#region exist email
  get email() {
    return this.register.get('email')
  }
  existEmailValidator(existEmails: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let emailValue: string = control.value
      let validationError = {
        "existEmail": {
          "value": emailValue
        }
      }
      if (control.untouched && emailValue.length == 0)
        return null
      let foundEmail = existEmails.includes(emailValue)
      // return emailValue.includes('@')?null:validationError
      return foundEmail ? validationError : null
    }
  }
  //#endregion

  //#region confirmPassword cross-validation added in ctor
  get password(){
    return this.register.get('password')
  }
  get confirmPassword(){
    return this.register.get('confirmPassword')
  }

  //#endregion
}
