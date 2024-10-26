import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventService } from '../services/event.service';
import { FooterComponent } from '../footer/footer.component';
import { StayUpdatedComponent } from '../stay-updated/stay-updated.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, FooterComponent, StayUpdatedComponent, NavbarComponent],
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any = { liked: false };  
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.eventService.getEventById(eventId).subscribe({
        next: (data) => {
          console.log('Fetched event:', data);  
          this.event = data.event; 
        },
        error: (err) => console.error('Error fetching event details:', err)
      });
    }
  }
  

  toggleLike(): void {
    this.event.liked = !this.event.liked;
  }
}
