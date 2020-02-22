import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanPage } from './scan.page';

const routes: Routes = [
  {
    path: '',
    component: ScanPage
  },
  {
    path: 'uploadeddata/:db',
    loadChildren: () => import('./uploadeddata/uploadeddata.module').then( m => m.UploadeddataPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanPageRoutingModule {}
