import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, FormGroup,FormControl , Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';

import { LayoutComponent } from './/layouts/layout.component';

import { HomeComponent } from './pages/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { InformationComponent } from './pages/information/information.component';

import { ColorsComponent } from './pages/ui/colors/colors.component';
import { TypographyComponent } from './pages/ui/typography/typography.component';
import { PanelsComponent } from './pages/ui/panels/panels.component';
import { TabsComponent } from './pages/ui/tabs/tabs.component';
import { AlertsComponent } from './pages/ui/alerts/alerts.component';
import { CardsComponent } from './pages/ui/cards/cards.component';
import { BadgesProgressComponent } from './pages/ui/badges-progress/badges-progress.component';
import { ListComponent } from './pages/ui/list/list.component';
import { IconsComponent } from './pages/ui/icons/icons.component';
import { ButtonsComponent } from './pages/ui/buttons/buttons.component';

import { FormBasicComponent } from './pages/forms/form-basic/form-basic.component';
import { InputMasksComponent } from './pages/forms/input-masks/input-masks.component';
import { FormValidationComponent } from './pages/forms/form-validation/form-validation.component';
import { TextEditorsComponent } from './pages/forms/text-editors/text-editors.component';
import { FormAdvancedComponent } from './pages/forms/form-advanced/form-advanced.component';

import { TablesComponent } from './pages/tables/tables.component';
import { DatatablesComponent } from './pages/datatables/datatables.component';

import { ChartjsComponent } from './pages/charts/chartjs/chartjs.component';
import { MorrisChartComponent } from './pages/charts/morris-chart/morris-chart.component';
import { SparklineChartComponent } from './pages/charts/sparkline-chart/sparkline-chart.component';

import { MapsVectorComponent } from './pages/maps-vector/maps-vector.component';

import { MailboxComponent } from './pages/mailbox/mailbox/mailbox.component';
import { MailComposeComponent } from './pages/mailbox/mail-compose/mail-compose.component';
import { MailViewComponent } from './pages/mailbox/mail-view/mail-view.component';

import { CalendarComponent } from './pages/calendar/calendar.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LockscreenComponent } from './pages/lockscreen/lockscreen.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { Error500Component } from './pages/error-500/error-500.component';


const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {
        "path": "",
        "component": LayoutComponent,
        "children": [
            {
                path: "index",
                component: HomeComponent
            },
            {
                path: "/informations",canActivate: [AuthGuardService],
                component: InformationComponent
            },
            {
                path: "ui/colors",canActivate: [AuthGuardService],
                component: ColorsComponent
            },
            {
                path: "ui/typography",canActivate: [AuthGuardService],
                component: TypographyComponent
            },
            {
                path: "ui/panels",canActivate: [AuthGuardService],
                component: PanelsComponent
            },
            {
                path: "ui/buttons",canActivate: [AuthGuardService],
                component: ButtonsComponent
            },
            {
                path: "ui/tabs",canActivate: [AuthGuardService],
                component: TabsComponent
            },
            {
                path: "ui/alerts",canActivate: [AuthGuardService],
                component: AlertsComponent
            },
            {
                path: "ui/badges_progress",canActivate: [AuthGuardService],
                component: BadgesProgressComponent
            },
            {
                path: "ui/lists",canActivate: [AuthGuardService],
                component: ListComponent
            },
            {
                path: "ui/cards",canActivate: [AuthGuardService],
                component: CardsComponent
            },
            {
                path: "ui/icons",canActivate: [AuthGuardService],
                component: IconsComponent
            },
            {
                path: "forms/form_basic",canActivate: [AuthGuardService],
                component: FormBasicComponent
            },
            {
                path: "forms/form_advanced",canActivate: [AuthGuardService],
                component: FormAdvancedComponent
            },
            {
                path: "forms/form_masks",canActivate: [AuthGuardService],
                component: InputMasksComponent
            },
            {
                path: "forms/form_validation",canActivate: [AuthGuardService],
                component: FormValidationComponent
            },
            {
                path: "forms/text_editors",canActivate: [AuthGuardService],
                component: TextEditorsComponent
            },
            {
                path: "tables/basic",canActivate: [AuthGuardService],
                component: TablesComponent
            },
            {
                path: "tables/datatables",canActivate: [AuthGuardService],
                component: DatatablesComponent
            },
            {
                path: "charts/chartjs",
                component: ChartjsComponent
            },
            {
                path: "charts/charts_morris",
                component: MorrisChartComponent
            },
            {
                path: "charts/charts_sparkline",
                component: SparklineChartComponent
            },
            {
                path: "maps_vector",
                component: MapsVectorComponent
            },
            {
                path: "mailbox/mailbox",
                component: MailboxComponent
            },
            {
                path: "mailbox/mail_view",
                component: MailViewComponent
            },
            {
                path: "mailbox/mail_compose",
                component: MailComposeComponent
            },
            {
                path: "calendar",
                component: CalendarComponent
            },
            {
                "path": "invoice",
                "component": InvoiceComponent
            },
            {
                path: "profile",
                component: ProfileComponent
            },
        ]
    },
    {
        "path": "login",
        "component": LoginComponent
    },
    {
        "path": "register",
        "component": RegisterComponent
    },
    {
        "path": "lockscreen",
        "component": LockscreenComponent
    },
    {
        "path": "forgot_password",
        "component": ForgotPasswordComponent
    },
    {
        "path": "error_404",
        "component": Error404Component
    },
    {
        "path": "error_500",
        "component": Error500Component
    },
    {
        "path": "**",
        "redirectTo": "error_404",
        "pathMatch": "full"
    },
];

@NgModule({
  declarations: [
    HomeComponent,
    ColorsComponent,
    TypographyComponent,
    PanelsComponent,
    TabsComponent,
    AlertsComponent,
    CardsComponent,
    BadgesProgressComponent,
    ListComponent,
    IconsComponent,
    ButtonsComponent,
    FormBasicComponent,
    InputMasksComponent,
    FormValidationComponent,
    TextEditorsComponent,
    FormAdvancedComponent,
    TablesComponent,
    DatatablesComponent,
    ChartjsComponent,
    MorrisChartComponent,
    SparklineChartComponent,
    MapsVectorComponent,
    MailboxComponent,
    MailComposeComponent,
    MailViewComponent,
    CalendarComponent,
    ProfileComponent,
    InvoiceComponent,
    LoginComponent,
    RegisterComponent,
    LockscreenComponent,
    ForgotPasswordComponent,
    Error404Component,
    Error500Component,
  ],
  imports: [FormsModule,

    ReactiveFormsModule, RouterModule.forRoot(routes) ],
    providers: [
        AuthGuardService,
        
      ],
  exports: [ 
    RouterModule,
  ]
})

export class AppRoutingModule { }
