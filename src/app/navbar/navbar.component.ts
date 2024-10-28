import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventService } from '../services/event.service';

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

  constructor(private eventService: EventService, private router: Router) {}

  onSearch(): void {
    if (this.searchQuery.length > 0) {
      this.eventService.getEvents().subscribe(
        (events) => {
          console.log("Events fetched:", events);
          this.filteredEvents = events.filter((event) =>
            event.title?.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
          this.showDropdown = this.filteredEvents.length > 0;
        },
        (error) => {
          console.error("Error fetching events:", error);
          this.filteredEvents = [];
          this.showDropdown = false;
        }
      );
    } else {
      this.showDropdown = false;
    }
  }

  onSelectEvent(eventId: string | undefined): void {
    console.log("Event ID selected:", eventId);
    if (eventId) {
      this.searchQuery = '';  
      this.showDropdown = false; 

      this.router.navigate(['/event-details', eventId]).then(
        () => console.log("Navigation successful to:", `/event-details/${eventId}`),
        (error) => console.error("Navigation error:", error)
      );
    } else {
      console.error("Invalid event ID:", eventId);
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
