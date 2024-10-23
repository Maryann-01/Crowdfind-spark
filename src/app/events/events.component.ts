import { Component ,OnInit} from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { EventService } from '../services/event.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { StayUpdatedComponent } from '../stay-updated/stay-updated.component';

import { HomeInfoSharedComponent } from '../home-info-shared/home-info-shared.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NavbarComponent,HomeInfoSharedComponent,FooterComponent,CommonModule,StayUpdatedComponent],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
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
