import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-featured-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-events.component.html',
  styleUrl: './featured-events.component.css'
})
export class FeaturedEventsComponent implements OnInit{
  events: any[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
      },
      error: (err) => {
        console.error('Error fetching events:', err);
      }
    });
  }
}
