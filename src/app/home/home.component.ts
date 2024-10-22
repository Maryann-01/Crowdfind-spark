import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeInfoComponent } from '../home-info/home-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HomeInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
