import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {User} from 'models/user';

import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-qrgenerate',
  templateUrl: './qrgenerate.page.html',
  styleUrls: ['./qrgenerate.page.scss'],
})
export class QrgeneratePage implements OnInit {
  registerUser:User={} as User;
  myDate: string = new Date().toISOString();
  constructor(private route:ActivatedRoute,private fs:FirebaseService) { }
  qrdata={};
  
  ngOnInit() {
    
    this.qrdata=this.route.snapshot.paramMap.get('abc')+" "+this.myDate;
    let s=String(this.qrdata).split(" ");
    this.registerUser.receipt=s[0];
    
    
    this.registerUser.name=s[1];
    this.registerUser.college=s[2];
    this.registerUser.phone=s[3];
    this.registerUser.rollno=s[4];
    this.registerUser.email=s[5];
    this.registerUser.timestamp=this.myDate;
    this.fs.addUser('participants',this.registerUser);
  }

}
