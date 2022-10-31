import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //3rd execution

  aim = 'Your Banking Partner';
  accounts = 'Enter your acno here';

  acno='';
  pswd='';

  constructor() { } //1st execution

  ngOnInit(): void { //life cycle hooks - Initial process //2nd execution
  }

  userDetails:any = { //object of objects
    1000: { acno: 1000, username: 'shibil', password: 1000, balance: 10000 },
    1001: { acno: 1000, username: 'salim', password: 1001, balance: 10000 },
    1002: { acno: 1000, username: 'karthik', password: 1002, balance: 10000 },
  }
  //user defined function()

  acnoChange(event: any) {
    console.log(event.target.value);
    this.acno=event.target.value;
    // console.log(this.acno)
  }

  pswdChange(event: any) {
    console.log(event.target.value);
    this.pswd=event.target.value;


  }

  login() {
    var acno = this.acno;
    var pswd = this.pswd;

    var userDetails = this.userDetails;
  
    if(acno in userDetails){
      if(pswd ==userDetails[acno]['password']) {
        alert('login Successful')
      }
      
    }else{
      alert('user not defined')
    }
  }
}
