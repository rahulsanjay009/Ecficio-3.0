import { Injectable } from '@angular/core';
import { User } from 'models/user';
import {Storage} from '@ionic/storage';
const auth_key="AUTH";
const event_key="EVENT";
const getqr_key="GETQR";
@Injectable({
  providedIn:'root'
})
export class StorageService {
  
  constructor(private storage:Storage) { }
  addItem(item:User,ITEMS_KEY:string):Promise<any>{
      return this.storage.get(ITEMS_KEY).then((items:User[])=>{
          if(items){
              items.push(item); 
              return this.storage.set(ITEMS_KEY,items);
          }
          else{
              return this.storage.set(ITEMS_KEY,[item]);
          }
      });
  }
  addItems(item:User[],ITEMS_KEY:string):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((items:User[])=>{
        if(items){
            items.push(...item); 
            return this.storage.set(ITEMS_KEY,items);
        }
        else{
            return this.storage.set(ITEMS_KEY,[item]);
        }
    });
}
  getItems(ITEMS_KEY:string):Promise<User[]>{
      return this.storage.get(ITEMS_KEY);
  }
  updateItem(item:User,ITEMS_KEY:string):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((items:User[])=>{
      if(!items||items.length==0){
          return null;
      }
      let newItems:User[]=[];
      for(let i of items){
        if(i.receipt== item.receipt){
          newItems.push(item);
        }
        else  
          newItems.push(i);
      }
      return this.storage.set(ITEMS_KEY,newItems);
  });
  
  }
  deleteItem(item:User,ITEMS_KEY:string):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((items:User[])=>{
      if(!items||items.length===0){
          return null;
      }
      let newItems:User[]=[];
      for(let i of items){
        if(i.receipt!== item.receipt){
          newItems.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY,newItems);
  });
  }
  getAuth(){
    return this.storage.get(auth_key);
  }
  setAuth(x:boolean){
    return this.storage.set(auth_key,x);
  }
  getqr(){
    return this.storage.get(getqr_key);
  }
  getEvent(){
    return this.storage.get(event_key);
  }
  setEvent(x:boolean){
    return this.storage.set(event_key,x);
  }
  setqr(x:boolean){
    return this.storage.set(event_key,x);
  }
}
