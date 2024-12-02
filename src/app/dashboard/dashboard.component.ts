import { Component ,OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  profilePicture: string = 'assets/images/user-profile.png'; // Default image
  firstName: string = 'Jessica';
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    
    this.profileService.profilePicture$.subscribe((newProfilePicture) => {
      this.profilePicture = newProfilePicture;
    });
  }
}
