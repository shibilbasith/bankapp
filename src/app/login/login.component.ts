


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim='your perfect banking partner';
  accounts="enter ur Acno here";
  acno='';
  pswd='';

  constructor(private router:Router, private ds:DataService) { } //first execution
  //dependancy injection


  ngOnInit(): void {
  }
  userDetails:any={//object of objects
    1000:{acno:1000,username:'Gopik',password:1000,balance:10000},
    1001:{acno:1001,username:'soja',password:1001,balance:10000},
    1002:{acno:1002,username:'Abhijith',password:1002,balance:10000},
  }

  //user defined function()

  acnoChange(event:any){
    // console.log(event);
    console.log(event.target.value);
    this.acno=event.target.value;
  }
  pswdChange(event:any){
    console.log(event.target.value);
    this.pswd=event.target.value;
  }
  login(){
    // alert('Login clicked');

    var acno=this.acno;
    var pswd=this.pswd;

    // var userDetails=this.userDetails;
    const result=this.ds.login(acno,pswd);
    
    if(result) {
      alert("login successfull");
      this.router.navigateByUrl('dashboard');
    } else {
      alert("user does not exist") 
    }
  }



  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert("login successfull");
  //       this.router.navigateByUrl('dashboard'); 
  //     }
  //     else{
  //       alert("incorrect password");
  //     }

  //   }
  //   else{
  //     alert("user does not exist")
  //   }
  // }

}





















// login(a:any,p:any){
//   // alert('Login clicked');

//   var acno=a.value;
//   var pswd=p.value;

//   var userDetails=this.userDetails;

//   if(acno in userDetails){
//     if(pswd==userDetails[acno]['password']){
//       alert("login successfull")
//     }
//     else{
//       alert("incorrect password");
//     }

//   }
//   else{
//     alert("user does not exist")
//   }
// }