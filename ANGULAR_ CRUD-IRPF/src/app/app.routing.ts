import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ViewIrpfsComponent } from '../app/views/irpf/view-irpfs/view-irpfs.component';
import { ViewDashboardComponent } from '../app/views/irpf/view-dashboard/view-dashboard.component';

import { ViewCreateIrpfComponent } from '../app/views/irpf/view-create-irpf/view-create-irpf.component';

const routes: Routes = [
  { path: '', component: ViewDashboardComponent },
  { path: 'dashboard', component: ViewDashboardComponent },
  { path: 'create-irpf', component: ViewCreateIrpfComponent },
  { path: 'irpfs', component: ViewIrpfsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
