import { Component, OnInit } from '@angular/core';
import {User} from 'models/user';
import { ActivatedRoute, Router } from '@angular/router';
import {Storage } from '@ionic/storage';
import { StorageService } from '../../services/storage.service';

import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.page.html',
  styleUrls: ['./students-list.page.scss'],
})
export class StudentsListPage implements OnInit {
  dataArray:User[]=[];
  event:string;
  
  
  flag:boolean=false;
  constructor(private route:ActivatedRoute,private storage:Storage,private ss:StorageService,private fs:FirebaseService,
    private router:Router) { }

  ngOnInit() {
      this.event=this.route.snapshot.paramMap.get('ghi');
      this.ss.getItems(this.event).then(items=>{
        this.dataArray=items;
      });
      
  
  }
  update(a:User,m1){
    
      a.r1marks=Number(m1);
      
      this.ss.updateItem(a,this.event).then();
    
  }
  upload(){
    var temp:User[]=[];
    temp=this.dataArray;
    
   
        this.dataArray.forEach((i)=>{
          this.fs.addUser(this.event,i);
          });
     
    this.storage.set(this.event,null).then(()=>{});
    this.dataArray=null;
    
  }
  
}
