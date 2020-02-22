import { Component, OnInit } from '@angular/core';

import {User } from 'models/user';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-uploadeddata',
  templateUrl: './uploadeddata.page.html',
  styleUrls: ['./uploadeddata.page.scss'],
})
export class UploadeddataPage implements OnInit {
  users:User[]=[];
  selectedevent:string;
  constructor(private fs:FirebaseService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.selectedevent=this.route.snapshot.paramMap.get('db');
    console.log("From NgOnInit "+this.selectedevent);
    this.fs.getUsers(this.selectedevent).valueChanges().subscribe((da:User[])=>{
    this.users=da;
    this.users.sort((a,b)=>a.r1marks<b.r1marks?1:-1); }
  );
}




}