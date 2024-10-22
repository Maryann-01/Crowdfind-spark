import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    { question: 'How do I book an event?',
       answer: 'CrowdFind is a platform that helps people find lost items through community-driven efforts.', isOpen: false },
    { question: 'How do I receive my tickets?', answer: 'Once you’ve completed your booking, your tickets and confirmation will be sent to your email instantly.', isOpen: false },
    { question: 'Can I cancel or reschedule my booking?', answer: 'You can claim a found item by contacting the person who found it through our platform\'s secure messaging system.', isOpen: false },
    { question: 'How do I book an event?',
      answer: 'CrowdFind is a platform that helps people find lost items through community-driven efforts.', isOpen: false },
   { question: 'How do I receive my tickets?', answer: 'Once you’ve completed your booking, your tickets and confirmation will be sent to your email instantly.', isOpen: false },
   { question: 'Can I cancel or reschedule my booking?', answer: 'You can claim a found item by contacting the person who found it through our platform\'s secure messaging system.', isOpen: false },
  
  ];

  
  toggleAccordion(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

}
