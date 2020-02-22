import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [              
        {
          path: 'register',
          loadChildren: () => import('../register/register.module').then( m => m.RegisterPageModule)
        },
        {
          path: 'organizer',
          loadChildren: () => import('../scan/scan.module').then( m => m.ScanPageModule)
        },
        {
          path: 'events',
          loadChildren: () => import('../events/events.module').then( m => m.EventsPageModule)
        },          
      {
        path: 'events/:id',
        loadChildren: () => import('../selected-event/selected-event.module').then( m => m.SelectedEventPageModule)
      }, 
      {
        path: 'organizer/studentlist/:ghi',
        loadChildren: () => import('../scan/students-list/students-list.module').then( m => m.StudentsListPageModule)
      },      
      {
        path: 'getqr',
        loadChildren: () => import('../get-qr/get-qr.module').then( m => m.GetQRPageModule)
      },
      {
        path: 'register/:abc',
        loadChildren: () => import('../qrgenerate/qrgenerate.module').then( m => m.QrgeneratePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/events',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
