import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrgeneratePageRoutingModule } from './qrgenerate-routing.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QrgeneratePage } from './qrgenerate.page';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    IonicModule,
    QrgeneratePageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [QrgeneratePage]
})
export class QrgeneratePageModule {}
