import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.services'; // Ensure this import is correct

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, RouterModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false; 

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  onSubmit() {
    const loginData = { email: this.email, password: this.password };
    this.http.post<{ token: string }>('https://crowdfind-backend.onrender.com/api/auth/login', loginData)
      .subscribe({
        next: (response) => {
          this.authService.login(response.token);  
          this.router.navigate(['/home']);  
        },
        error: (error) => {
          console.error("Login failed", error);
        }
      });
  }
}
