# SwiftRide

SwiftRide is a ride-hailing application that allows users to book rides, view ride suggestions, and manage their trips. The application consists of a frontend built with React and a backend built with Node.js and Express. The backend uses MongoDB for data storage and JWT for authentication.

## Features

### User Authentication
- **Login**: Users can log in using their credentials.
- **Logout**: Users can log out of their accounts.

### Ride Booking
- **Find a Trip**: Users can enter their pickup and drop-off locations to find available rides.
- **Ride Suggestions**: The application provides suggestions for pickup locations based on user input.
- **Fare Calculation**: The application calculates the fare for the trip based on the distance between the pickup and drop-off locations.
- **Confirm Ride**: Users can confirm their ride and view the details of the trip.

### Panels
- **Search Panel**: Displays suggestions for pickup and drop-off locations.
- **Vehicle Panel**: Displays available vehicle options and their respective fares.
- **Confirm Ride Panel**: Allows users to confirm their ride and view trip details.
- **Captain Waiting Panel**: Displays a waiting screen while the ride is being confirmed.

## Tools and Technologies

### Backend
- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **JWT**: JSON Web Tokens for authentication.
- **Google Maps API**: Used for location and distance calculations.
- **MVC Architecture**: The backend follows the Model-View-Controller architecture for better organization and maintainability.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **GSAP**: GreenSock Animation Platform for animations.
- **React-Redux**: State management library for React applications.

## Installation

### Prerequisites
- Node.js
- MongoDB

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following environment variables:
   ```env
   JWT_SECRET=your_jwt_secret
   MONGO_URI=your_mongodb_uri
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Log in using your credentials.
3. Enter your pickup and drop-off locations to find a trip.
4. View ride suggestions and select a vehicle.
5. Confirm your ride and view trip details.

## API Endpoints

### Authentication
- **POST /user/login**: Log in a user.
- **POST /user/logout**: Log out a user.

### Ride
- **POST /ride/create**: Create a new ride.
- **GET /ride/fare**: Get the fare for a trip.

### Maps
- **POST /maps/coordinates**: Get coordinates for an address.
- **POST /maps/get-distance**: Get the distance between two locations.
- **POST /maps/suggestion**: Get location suggestions based on user input.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License.
