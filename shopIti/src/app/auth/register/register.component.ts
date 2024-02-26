import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/model/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  register!: FormGroup;
  constructor(private registerService: FormBuilder) {

    this.register = registerService.group(
      {
        fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
        email: ['', [Validators.required]],
        phoneNumber: registerService.array(['']),
        address: registerService.group({
          city: [''],
          postalCode: [''],
          street: [''],
        }),
        password: [''],
        confirmPassword: [''],
      }
    )
  }
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
  get fullName() {
    return this.register.get('fullName')
  }
  get phoneNumbers() {
    return this.register.get('phoneNumber') as FormArray  
  }
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

  submit(){
    let registerUser:IUser= this.register.value as IUser
    console.log(registerUser)
  }
}
