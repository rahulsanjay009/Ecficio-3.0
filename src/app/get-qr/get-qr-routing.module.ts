import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetQRPage } from './get-qr.page';

const routes: Routes = [
  {
    path: '',
    component: GetQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetQRPageRoutingModule {}
