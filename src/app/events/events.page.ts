import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import {Event} from 'models/events';
@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventsData:Event[]=[];
  selectedItem:any;
  constructor(private router:Router,private fs:FirebaseService) { }
    
  ngOnInit() {
    this.fs.getUsers('events').valueChanges().subscribe((da:Event[])=>{
        this.eventsData=da;
    });
    
  }
 goTo(x){
  this.router.navigate(['tabs/events/',JSON.stringify(x)]);  
 }
}
