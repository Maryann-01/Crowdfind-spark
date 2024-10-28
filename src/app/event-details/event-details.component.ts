import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventService } from '../services/event.service';
import { FooterComponent } from '../footer/footer.component';
import { StayUpdatedComponent } from '../stay-updated/stay-updated.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { InterestModalComponent } from '../interest-modal/interest-modal.component'; 

interface Event {
  _id: string;
  title: string;
  hostname: string;
  date: Date;
  img: string;
  liked: boolean;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, FooterComponent, StayUpdatedComponent, NavbarComponent, InterestModalComponent], // Add InterestModalComponent here
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: Event | undefined; 
  showModal: boolean = false; 

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id');
    
    if (eventId) {
      this.loadEventDetails(eventId);
    } else {
      console.error('No event ID found in route parameters.');
    }
  }

  loadEventDetails(id: string): void {
    this.eventService.getEvents().subscribe({
      next: (events) => {
        this.event = events.find((event) => event._id === id);
        if (this.event) {
          console.log('Fetched event details:', this.event); 
        } else {
          console.error('Event not found with ID:', id);
        }
      },
      error: (err) => {
        console.error('Error fetching events:', err);
      }
    });
  }

  toggleLike(): void {
    if (this.event) {
      this.event.liked = !this.event.liked; 
      console.log('Event liked status:', this.event.liked);
    }
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
