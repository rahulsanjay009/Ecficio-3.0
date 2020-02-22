import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from 'models/user';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( private db:AngularFirestore ) { }


  getUsers(ittop) {
    return this.db.collection(`${ittop}`);
  }

  getUser(ittop,id) {
    return this.db.doc(`${ittop}/${id}`);
  }

  updateUser(ittop: string,baka: User) {
    return this.db.doc(`${ittop}/${baka.receipt}`).set(baka);
  }
  
  addUser(ittop: string,baka: User) {
    this.getUser(ittop,baka.receipt).valueChanges().subscribe((da:User)=>{
      if(da){

      }
      else{
        return this.db.doc(`${ittop}/${baka.receipt}`).set(baka);
      }
    })
    
  }
  
  removeUser(ittop,id) {
    return this.db.doc(`${ittop}/${id}`).delete();
  }

}
