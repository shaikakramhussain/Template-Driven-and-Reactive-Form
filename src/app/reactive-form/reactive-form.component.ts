import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,NgForm,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signupForm:FormGroup;
  FirstName:string="";
  LastName:string="";
  Email:string="";
  Password:string="";

  constructor(private frmbuilder:FormBuilder) {
    this.signupForm=frmbuilder.group({
      // fname:new FormControl(),
      // lname:new FormControl(),
      // Emailid:new FormControl(),
      // userpassword:new FormControl()
      fname:['',Validators.required],
      lname:['',Validators.required,Validators.maxLength(10)],
      Emailid:['',Validators.required,Validators.email],
      userpassword:['',Validators.required]
    });
   }

  ngOnInit() {
  }
  PostData(signupForm:any){
    this.FirstName=signupForm.controls.fname.value;
    this.LastName=signupForm.controls.lname.value;
    this.Email=signupForm.controls.Emailid.value;
    console.log(this.FirstName);
    console.log(signupForm.controls);
  }

}
