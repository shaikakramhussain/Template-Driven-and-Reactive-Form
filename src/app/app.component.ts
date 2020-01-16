import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AkramProject';
  //mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 

  Register(regForm:any){
    debugger;
    var firstname=regForm.controls.firstname.value;
    var lastname=regForm.controls.lastname.value;
    var email=regForm.controls.email.value;
    console.log(regForm);
    
  }
}
