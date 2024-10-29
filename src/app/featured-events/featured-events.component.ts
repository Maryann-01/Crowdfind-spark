import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { Clipboard } from '@angular/cdk/clipboard';
import { EventService } from '../services/event.service';
import { StayUpdatedComponent } from "../stay-updated/stay-updated.component";

@Component({
  selector: 'app-featured-events',
  standalone: true,
  imports: [CommonModule, StayUpdatedComponent], 
  templateUrl: './featured-events.component.html',
  styleUrls: ['./featured-events.component.css']
})
export class FeaturedEventsComponent implements OnInit {
  events: any[] = []; 
  displayedEvents: any[] = [];
  increment: number = 6; 
  startIndex: number = 0; 

  constructor(
    private router: Router, 
    private eventService: EventService,
    private clipboard: Clipboard // Inject the Clipboard service
  ) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
      this.displayedEvents = this.events.slice(this.startIndex, this.increment); 
    });
  }

  viewEventDetails(event: any): void {
    this.router.navigate(['/event-details', event._id]); 
  }

  toggleLike(event: any): void {
    event.liked = !event.liked;
    console.log('Event liked status:', event.liked);
  }

  shareEventLink(event: any): void {
    const eventUrl = `${window.location.origin}/event-details/${event._id}`;
    this.clipboard.copy(eventUrl);
    console.log('Event link copied to clipboard:', eventUrl);
    alert('Event link copied to clipboard!');
  }

  loadMore(): void {
    
    this.startIndex += this.increment;

    
    const moreEvents = this.events.slice(this.startIndex, this.startIndex + this.increment);
    this.displayedEvents = [...this.displayedEvents, ...moreEvents];
  }
}
