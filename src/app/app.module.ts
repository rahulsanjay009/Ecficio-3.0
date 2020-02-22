import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {IonicStorageModule} from '@ionic/storage'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {environment } from 'src/environments/environment';
import {AngularFirestoreModule,FirestoreSettingsToken} from 'angularfire2/firestore';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot(),
  AngularFireModule.initializeApp(environment.firebase),AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide:FirestoreSettingsToken,useValue:{}},
    BarcodeScanner,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
