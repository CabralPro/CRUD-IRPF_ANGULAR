import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../app/views/dashboard/dashboard.component';
import { UserProfileComponent } from '../app/views/user-profile/user-profile.component';
import { TableListComponent } from '../app/views/table-list/table-list.component';
import { TypographyComponent } from '../app/views/typography/typography.component';
import { IconsComponent } from '../app/views/icons/icons.component';
import { MapsComponent } from '../app/views/maps/maps.component';
import { NotificationsComponent } from '../app/views/notifications/notifications.component';
import { UpgradeComponent } from '../app/views/upgrade/upgrade.component';
import { ViewIrpfsComponent } from '../app/views/irpf/view-irpfs/view-irpfs.component';
import { ViewDashboardComponent } from '../app/views/irpf/view-dashboard/view-dashboard.component';

import { ViewCreateIrpfComponent } from '../app/views/irpf/view-create-irpf/view-create-irpf.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create-irpf', component: ViewCreateIrpfComponent },
  { path: 'irpfs', component: ViewIrpfsComponent },
  { path: 'dashboard', component: ViewDashboardComponent },


  { path: 'user-profile', component: UserProfileComponent },
  { path: 'table-list', component: TableListComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'upgrade', component: UpgradeComponent },
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
