import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  {path:"about", component:AboutUsComponent},
  { path: 'login', component: LoginComponent },
  {path:"signup", component:SignupComponent},
  { path: 'event-details/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: '**', redirectTo: '/home' },
  
];

