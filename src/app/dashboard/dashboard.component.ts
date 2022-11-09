import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   amount="";
   acno="";
   pswd="";

   user='';


   //withdraw
   amount1="";
   acno1="";
   pswd1="";



  constructor(private ds:DataService) { 
    this.user = this.ds.currentUser;
  }

  ngOnInit(): void {
  }

  deposit(){
    var amount=this.amount;
    var acno=this.acno;
    var pswd=this.pswd;

    const result = this.ds.deposit(acno,pswd,amount);

    if(result){
      alert(`${amount} the balnce is: ${result}`);
    } 
  }

  withdraw(){
    var amount=this.amount1;
    var acno=this.acno1;
    var pswd=this.pswd1;

    const result = this.ds.withdraw(acno,pswd,amount);

    if(result){
      alert(`${amount} the balnce is: ${result}`);
    } 
  }

}
