import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadeddataPageRoutingModule } from './uploadeddata-routing.module';

import { UploadeddataPage } from './uploadeddata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadeddataPageRoutingModule
  ],
  declarations: [UploadeddataPage]
})
export class UploadeddataPageModule {}
