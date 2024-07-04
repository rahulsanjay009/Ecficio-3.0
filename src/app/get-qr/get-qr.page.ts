import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {User} from 'models/user';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-get-qr',
  templateUrl: './get-qr.page.html',
  styleUrls:['./get-qr.page.scss'],
})
export class GetQRPage implements OnInit {
  qrdata;
  bo:boolean=true;
  msg="";
  myDate;
  registeredUser:User={} as User;
  constructor(private fs:FirebaseService,private ss:StorageService) { 
    
  }

  ngOnInit() {
     
  }
  getqr(r,p){
  this.fs.getUser('participants',r).valueChanges().subscribe((da:User)=>{
        if(da.phone==p){
          this.registeredUser=da;
          this.myDate=da.timestamp;
          
          this.qrdata=da.receipt+" "+da.name+" "+da.college+" "+da.phone+" "+da.rollno+" "+da.email+" "+da.timestamp;
          this.bo=false;
        }
        else{
          this.msg="invalid combination";
          console.log(this.msg);
        }
    })
    
  }
  done(){
    this.bo=!this.bo;

  }
}
