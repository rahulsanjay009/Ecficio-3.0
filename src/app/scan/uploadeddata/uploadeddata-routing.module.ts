import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadeddataPage } from './uploadeddata.page';

const routes: Routes = [
  {
    path: '',
    component: UploadeddataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadeddataPageRoutingModule {}
