import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventService } from '../services/event.service';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-interest-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, HomeComponent, RouterModule],
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

  constructor(private eventService: EventService) {}

  onSubmit(): void {
    const token = '<your_token_here>'; // Replace  this token dynamically

    this.eventService.indicateInterest(this.eventId, this.numberOfAttendees, token).subscribe({
      next: (response) => {
        console.log(response.message);
        this.showSuccessModal = true;
      },
      error: (error) => {
        console.error('Error booking the event:', error);
        alert('There was an error booking the event. Please try again later.');
      }
    });
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
    this.closeModal.emit();
  }
}
