import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventService } from '../services/event.service';
import { AuthService } from '../services/auth.services';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-interest-modal',
  standalone: true,
  imports: [CommonModule, FormsModule,  RouterModule],
  templateUrl: './interest-modal.component.html',
  styleUrls: ['./interest-modal.component.css']
})
export class InterestModalComponent {
  @Input() showModal: boolean = false;
  @Input() eventId!: string; 
  @Output() closeModal: EventEmitter<void> = new EventEmitter();

  email: string = '';
  fullName: string = '';
  phoneNumber: string = '';
  numberOfAttendees: number = 1;
  agreeToEmails: boolean = false;
  showSuccessModal: boolean = false;

  constructor(
    private eventService: EventService,
    private authService: AuthService 
  ) {}

  onSubmit(): void {
    const token = this.authService.getToken(); 
    // console.log(token  , "1")

    if (!token) {
      alert('User is not authenticated. Please log in.');
      return;
     
    }
    // console.log(token  , "2")
    if (!this.eventId) {  // Check if eventId is set
      alert('Event ID is missing. Please try again.');
      return;
    }

    this.eventService.indicateInterest(this.eventId, this.numberOfAttendees, token).subscribe({
      next: (response) => {
        console.log(response.message);
        this.showSuccessModal = true;
      },
      error: (error) => {
        console.error('Error booking the event:', error);
        if (error.status === 401) {
          alert('Unauthorized: Please log in again.');
        } else {
          alert('There was an error booking the event. Please try again later.');
        }
      }
    });
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
    this.closeModal.emit();
  }
}
