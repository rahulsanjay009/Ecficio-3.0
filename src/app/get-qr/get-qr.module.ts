import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetQRPageRoutingModule } from './get-qr-routing.module';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import { GetQRPage } from './get-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetQRPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [GetQRPage]
})
export class GetQRPageModule {}
