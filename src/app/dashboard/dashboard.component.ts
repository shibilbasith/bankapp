import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //  amount="";
  //  acno="";
  //  pswd="";
   user='';

  //register model
  registerForm=this.fb.group({ //model
    amount:['', [Validators.required, Validators.pattern('[0-9]*')]], //array  // * combinations
    acno:['', [Validators.required, Validators.pattern('[0-9]*')]], //array
    pswd:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]], //array

    amount1:['', [Validators.required, Validators.pattern('[0-9]*')]], //array  // * combinations
    acno1:['', [Validators.required, Validators.pattern('[0-9]*')]], //array
    pswd1:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]] //array

    // control goes to this.register.html
  })


   //withdraw
  //  amount1="";
  //  acno1="";
  //  pswd1="";



  constructor(private fb:FormBuilder,private ds:DataService) { 
    this.user = this.ds.currentUser;
  }

  ngOnInit(): void {
  }

  deposit(){

    if(this.registerForm.valid) {

    
    var amount=this.registerForm.value.amount;
    var acno=this.registerForm.value.acno;
    var pswd=this.registerForm.value.pswd;

    const result = this.ds.deposit(acno,pswd,amount);

    if(result){
      alert(`${amount} the balnce is: ${result}`);
    } 
  }
  }

  withdraw(){
    
    if(this.registerForm.valid){

    var amount=this.registerForm.value.amount1;
    var acno=this.registerForm.value.acno1;
    var pswd=this.registerForm.value.pswd1;

    const result = this.ds.withdraw(acno,pswd,amount);

    if(result){
      alert(`${amount} the balnce is: ${result}`);
    } 
  }
}

}
