import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardEventsComponent } from './dashboard-events/dashboard-events.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardEventDetailsComponent } from './dashboard-event-details/dashboard-event-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // {path:"home", component:DashboardComponent},
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'events', component: DashboardEventsComponent },
    { path: 'profile', component: DashboardProfileComponent },
    { path: 'dashboardhome', component: DashboardHomeComponent },
    {path:"event-details/:id",component:DashboardEventDetailsComponent}
  ]},
  { path: 'events', component: EventsComponent },
  {path:"about", component:AboutUsComponent},
  { path: 'login', component: LoginComponent },
  {path:"signup", component:SignupComponent},
  { path: 'event-details/:id', component: EventDetailsComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },  
  // { path: '**', redirectTo: '/home' },
  
];

