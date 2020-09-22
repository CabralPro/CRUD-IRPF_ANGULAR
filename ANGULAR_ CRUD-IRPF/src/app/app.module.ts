import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component';

import { FooterComponent } from './components/template/footer/footer.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { InputComponent } from './components/_generics/input/input.component';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { TableListComponent } from './views/table-list/table-list.component';
import { TypographyComponent } from './views/typography/typography.component';
import { IconsComponent } from './views/icons/icons.component';
import { MapsComponent } from './views/maps/maps.component';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { UpgradeComponent } from './views/upgrade/upgrade.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import { TemplateComponent } from './components/template/template.component';
import { FormComponent } from './components/_generics/form/form.component';
import { ButtonComponent } from './components/_generics/button/button.component';
import { IrpfCreateComponent } from './components/irpf/irpf-create/irpf-create.component';
import { IrpfDeleteComponent } from './components/irpf/irpf-delete/irpf-delete.component';
import { IrpfReadComponent } from './components/irpf/irpf-read/irpf-read.component';
import { IrpfUpdateComponent } from './components/irpf/irpf-update/irpf-update.component';

import { ViewCreateIrpfComponent } from './views/irpf/view-create-irpf/view-create-irpf.component';
import { ViewDashboardComponent } from './views/irpf/view-dashboard/view-dashboard.component';
import { ViewIrpfsComponent } from './views/irpf/view-irpfs/view-irpfs.component';
import { TableComponent } from './components/_generics/table/table.component';
import { DialogComponent } from './components/_generics/dialog/dialog.component';
import { ConfirmationComponent } from './components/_generics/confirmation/confirmation.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    CurrencyMaskModule
  ],
  declarations: [
    AppComponent,
    TemplateComponent,
    InputComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    FormComponent,
    ButtonComponent,
    IrpfCreateComponent,
    IrpfDeleteComponent,
    IrpfReadComponent,
    IrpfUpdateComponent,
    ViewCreateIrpfComponent,
    ViewDashboardComponent,
    ViewIrpfsComponent,
    TableComponent,
    DialogComponent,
    ConfirmationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
