import { Component, OnInit } from '@angular/core';
import { FormBuilder, MaxValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  accounts = 'Enter your acno here';
  
  //properties  
  // uname="";
  // acno = "";
  // pswd = "";

  //register model
  registerForm=this.fb.group({ //model
    uname:['', [Validators.required, Validators.pattern('[a-zA-Z]*')]], //array  // * combinations
    acno:['', [Validators.required, Validators.pattern('[0-9]*')]], //array
    pswd:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]] //array

    // control goes to this.register.html
  })

  constructor(private fb:FormBuilder, private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }


    register() {
      // alert("register clicked")
      // console.log(this.registerForm);
      
      if(this.registerForm.valid){

      
      var  uname=this.registerForm.value.uname;
      var acno=this.registerForm.value.acno;
      var pswd=this.registerForm.value.pswd;

      const result=this.ds.register(acno,uname,pswd);

      if(result) {
        alert("Successfully Registered");
        this.router.navigateByUrl("");
      } else {
        alert("Register Failed")
      }
    } else {
      console.log(this.registerForm.get('uname')?.errors);
      
    }
  
    }
  

}
