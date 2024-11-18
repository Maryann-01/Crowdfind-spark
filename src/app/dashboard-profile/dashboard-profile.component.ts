import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { StayUpdatedComponent } from '../stay-updated/stay-updated.component';
@Component({
  selector: 'app-dashboard-profile',
  standalone: true,
  imports: [StayUpdatedComponent,DashboardComponent],
  templateUrl: './dashboard-profile.component.html',
  styleUrl: './dashboard-profile.component.css'
})
export class DashboardProfileComponent {

}
