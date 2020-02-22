import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'models/user';


import { FirebaseService } from '../services/firebase.service';
import { Event } from 'models/events';
@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  bo:boolean
  event="";
msg:string=""
  events:Event[]=[];
  selectedEvent=null;
  data:User={} as User;
  dataArray:User[]=[];
  filtered:User[]=[];
  status:string="";
  constructor(private qr:BarcodeScanner,private ss:StorageService,
    private fs:FirebaseService,private route:ActivatedRoute,private router:Router,private storage:Storage,) { 
      setInterval(data => {
        this.ss.getEvent().then(x=>{
          
          this.bo=x;
        }).catch((err)=>this.bo=false);
          }, 1000);
  }

  ngOnInit() {
    this.ss.getEvent().then(x=>{
      this.bo=false;
      this.ss.setEvent(false);
    }).catch((err)=>this.bo=true);
    this.fs.getUsers('events').valueChanges().subscribe((da:Event[])=>{
       this.events=da;
    });
  }
Scancode(){
  
  this.qr.scan().then((data) => {
  let s=data.text.split(" ");
        this.data.eventname=this.selectedEvent;
        this.data.r1marks=0;
       
   /*  this.data.receipt="12"; 
       this.data.name="fasdsfd";
        this.data.college="asfdsa";
        this.data.phone="fasddsa";
       this.data.rollno="fsdadags";
      this.data.email="afsds";   */
       this.data.receipt=s[0];
       this.data.name=s[1];
        this.data.college=s[2];
        this.data.phone=s[3];
       this.data.rollno=s[4];
      this.data.email=s[5];  
    
   var b= this.fs.getUser('participants',this.data.receipt).valueChanges().subscribe((da:User)=>{
        if(da){
         var a= this.fs.getUser(this.data.eventname,this.data.receipt).valueChanges().subscribe((ittop:User)=>{
            if(ittop){
              this.status="Participitant already participated in " +this.event;
            }
            else{
              this.ss.addItem(da,this.data.eventname);
              this.status="Successfully registered for "+this.event;
              a.unsubscribe();
              b.unsubscribe();
            }
          });
        }
        else{
          console.log("Not a participitant!!");
        }
    });
 });
    
  }
  UpdateMarks(){
  
    
    this.data={} as User;
    this.router.navigate(['tabs/organizer/studentlist/',this.event]);
  }
  UploadedData(){
    this.router.navigate(['tabs/organizer/uploadeddata/',this.event]);
  }
  logout(){
    
   this.ss.setEvent(false);
  }
  SelectedEvent(x,e:string){
   var a= this.fs.getUser('logins','eventslogin').valueChanges().subscribe((da:{password:string})=>{
    if(x==da.password){
      console.log(x);
      this.selectedEvent=this.event;
      this.ss.setEvent(true);
a.unsubscribe();
    }
    else{
      this.msg="invalid"
      a.unsubscribe();
    }
  });
}

}
