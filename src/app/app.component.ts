import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { HomeInfoSharedComponent } from './home-info-shared/home-info-shared.component';
import { FooterComponent } from './footer/footer.component';
// import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,EventsComponent,HomeInfoSharedComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [provideHttpClient()]
})
export class AppComponent {

  title = 'crowdfind-spark-mini-project';
}
