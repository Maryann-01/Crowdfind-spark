# Crowdfind Frontend

Crowdfind is a web application that helps users discover events, book tickets, manage profiles, and save favorite events. This repository contains the **frontend** built with Angular.

## Project Overview

Crowdfind allows users to:

- Search and browse upcoming events  
- Book tickets and indicate interest  
- Manage user profiles with authentication  
- Save favorite events by clicking the love icon  
- Share event links with others  

The frontend is built using Angular 18.2.7 and communicates with a RESTful backend API.

## Features

- **Event Discovery:** View and search events with detailed information.  
- **User Authentication:** Register, log in, and manage sessions securely.  
- **Profile Management:** Update profile details and upload profile pictures.  
- **Favorite Events:** Save events for quick access later.  
- **Event Booking:** Indicate interest and book tickets for events.  
- **Responsive Design:** Works well on desktop and mobile devices.  

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)  
- Angular CLI (v18.2.7)  

### Steps

1. Clone the repository:
git clone [https://github.com/Maryann-01/Crowdfind.git](https://github.com/Maryann-01/Crowdfind.git)
cd Crowdfind

2. nstall dependencies:  
npm install


3. Configure environment variables:  
Create a `.env` or edit `src/environments/environment.ts` to set the backend API URL, for example:  
export const environment = {
production: false,
apiUrl: 'https://crowdfind-backend.onrender.com/api'
};


4. Run the development server:  
ng serve


5. Open your browser and navigate to [http://localhost:4200](http://localhost:4200).

## Usage

- Browse the homepage to see upcoming events.  
- Register or log in to access personalized features.  
- Click event titles to view details.  
- Use the heart-shaped icon to save favorite events.  
- Book tickets or indicate interest in events.  
- Manage your profile from the user dashboard.  

## API Integration

The frontend interacts with the backend REST API to fetch data and perform user actions.

- **Backend Base URL:** `https://crowdfind-backend.onrender.com/api`  
- **Authentication:** Uses JWT tokens stored in local storage and sent via Authorization headers.  
- **Key API Endpoints Used:**  
- User registration and login: `/auth/register`, `/auth/login`  
- Fetch events: `/event/`  
- Indicate interest/book event: `/event/:eventId/interest`  
- Save favorite events: `/auth/save-event/:eventId`  
- User profile: `/auth/profile`  


## Scripts

- `ng serve` - Run the development server  
- `ng build` - Build the project for production  
- `ng test` - Run unit tests via Karma  
- `ng e2e` - Run end-to-end tests  

