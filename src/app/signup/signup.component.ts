import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  termsAccepted: boolean = false;
  showSuccessModal: boolean = false;

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.password === this.confirmPassword && this.termsAccepted) {
      this.showSuccessModal = true;
      setTimeout(() => {
        this.closeModal();
        // You might want to navigate to another page here
      }, 3000); // Redirect or close after 3 seconds
    } else {
      alert('Please make sure passwords match and terms are accepted.');
    }
  }

  closeModal(): void {
    this.showSuccessModal = false;
  }
}
