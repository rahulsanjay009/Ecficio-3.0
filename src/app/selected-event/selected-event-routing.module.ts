import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedEventPage } from './selected-event.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedEventPageRoutingModule {}
