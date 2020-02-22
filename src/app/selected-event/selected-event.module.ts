import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedEventPageRoutingModule } from './selected-event-routing.module';

import { SelectedEventPage } from './selected-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedEventPageRoutingModule
  ],
  declarations: [SelectedEventPage]
})
export class SelectedEventPageModule {}
