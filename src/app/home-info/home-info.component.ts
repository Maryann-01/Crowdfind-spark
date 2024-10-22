import { Component } from '@angular/core';
import { FeaturedEventsComponent } from "../featured-events/featured-events.component";
import { FaqComponent } from "../faq/faq.component";

@Component({
  selector: 'app-home-info',
  standalone: true,
  imports: [FeaturedEventsComponent, FaqComponent],
  templateUrl: './home-info.component.html',
  styleUrl: './home-info.component.css'
})
export class HomeInfoComponent {

}
