import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventService } from '../services/event.service';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [EventService],
})
export class NavbarComponent {
  searchQuery: string = '';
  filteredEvents: any[] = [];
  showDropdown: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private eventService: EventService, private router: Router, private authService: AuthService) {
    this.isLoggedIn = this.authService.loggedIn; 
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.loggedIn;
  }

  toggleLoginState(): void {
    if (this.isLoggedIn) {
      this.authService.logout();
      this.isLoggedIn = false;
      this.router.navigate(['/home']); // Navigate to the homepage after logging out
    } else {
      this.router.navigate(['/login']); // Navigate to the login page if not logged in
    }
  }
  onSearch(): void {
    if (this.searchQuery.length > 0) {
      this.eventService.getEvents().subscribe({
        next: (events) => {
          this.filteredEvents = events.filter((event) =>
            event.title?.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
          this.showDropdown = this.filteredEvents.length > 0;
        },
        error: (error) => {
          console.error('Error fetching events:', error);
          this.filteredEvents = [];
          this.showDropdown = false;
        }
      });
    } else {
      this.showDropdown = false;
    }
  }
  
  onSelectEvent(eventId: string | undefined): void {
    console.log('Event selected:', eventId);
    if (eventId) {
      this.searchQuery = '';
      this.showDropdown = false;
      this.router.navigate(['/event-details', eventId]); 
    }
  }
  

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const isDropdown = target.closest('.dropdown-menu') !== null;
    const isSearchInput = target.closest('.nav-form') !== null;

    if (!isDropdown && !isSearchInput) {
      this.showDropdown = false;
    }
  }
}
