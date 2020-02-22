import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Event} from 'models/events';
import {User} from 'models/user';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-selected-event',
  templateUrl: './selected-event.page.html',
  styleUrls: ['./selected-event.page.scss'],
})
export class SelectedEventPage implements OnInit {
  selectedItem:User={} as User;
  dbUsers:User[]=[];
  index=[1,2,3];
  selectedEvent:Event={} as Event;
  dbUsers1:User[]=[];
  count;
  constructor(private route:ActivatedRoute,private fs:FirebaseService) { 
    
  }

  ngOnInit() {
    this.selectedItem=JSON.parse(this.route.snapshot.paramMap.get('id'));
    
    
  
    this.fs.getUser('events',this.selectedItem.eventname).valueChanges().subscribe((da:Event)=>{
      this.selectedEvent=da;
      
   });
    this.fs.getUsers(this.selectedItem.eventname).valueChanges().subscribe((da:User[])=>{
      this.dbUsers=da;
    })
      
    
     console.log(this.dbUsers);
     this.fs.getUsers('participants').valueChanges().subscribe((da:User[])=>{
      this.dbUsers1=da;
    })
      
     
  }

}
