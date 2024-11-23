import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { StayUpdatedComponent } from '../stay-updated/stay-updated.component';
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [StayUpdatedComponent, CommonModule],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent{
  events: any[] = []; 
  displayedEvents: any[] = [];
  increment: number = 5; 
  startIndex: number = 0; 
  loading: boolean = true;

  constructor(
    private router: Router, 
    private eventService: EventService,
    private clipboard: Clipboard 
  ) {}
  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.loading = true; 
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
      this.displayedEvents = this.events.slice(this.startIndex, this.increment); 
      this.loading = false; 
    });
  }

  viewEventDetails(event: any): void {
    this.router.navigate(['dashboard/dashboard-event-details', event._id]); 
  }

  toggleLike(event: any): void {
    event.liked = !event.liked;
    console.log('Event liked status:', event.liked);
  }

  shareEventLink(event: any): void {
    const eventUrl = `${window.location.origin}/dashboard/dashboard-event-details/${event._id}`;
    this.clipboard.copy(eventUrl);
    console.log('Event link copied to clipboard:', eventUrl);
    alert('Event link copied to clipboard!');
  }

  // loadMore(): void {
  //   this.startIndex += this.increment;
  //   const moreEvents = this.events.slice(this.startIndex, this.startIndex + this.increment);
  //   this.displayedEvents = [...this.displayedEvents, ...moreEvents];
  // }
  loadMore(): void {
    const moreEvents = this.events.slice(this.startIndex, this.startIndex + this.increment);
    this.displayedEvents = [...this.displayedEvents, ...moreEvents];
    this.startIndex += this.increment; // Update the starting index
  }
  
}
