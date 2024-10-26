import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { EventService } from '../services/event.service';
import { StayUpdatedComponent } from "../stay-updated/stay-updated.component";

@Component({
  selector: 'app-featured-events',
  standalone: true,
  imports: [CommonModule, StayUpdatedComponent],
  templateUrl: './featured-events.component.html',
  styleUrl: './featured-events.component.css'
})
export class FeaturedEventsComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data.map(event => ({ ...event, liked: false }));
      },
      error: (err) => {
        console.error('Error fetching events:', err);
      }
    });
  }

  toggleLike(event: any): void {
    event.liked = !event.liked; 
  }

  viewEventDetails(eventId: string): void {
    this.router.navigate(['/event-details', eventId]);
  }
}
