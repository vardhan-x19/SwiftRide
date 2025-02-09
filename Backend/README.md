# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password. The password will be hashed before storing it in the database.

### Required Data:
- `fullname.firstname` (string): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string): The last name of the user.
- `email` (string): The email address of the user. Must be a valid email format.
- `password` (string): The password for the user account. Must be at least 8 characters long.

### Status Codes:
- `200 OK`: User registered successfully. Returns a JSON object containing the user token and user details.
- `400 Bad Request`: Validation error. Returns a JSON object containing the validation errors.
- `500 Internal Server Error`: Server error. Returns a JSON object containing the error message.

### Example Request:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

# User Login Endpoint Documentation

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to log in an existing user. It requires the user's email and password. The password will be compared with the hashed password stored in the database.

### Required Data:
- `email` (string): The email address of the user. Must be a valid email format.
- `password` (string): The password for the user account. Must be at least 8 characters long.

### Status Codes:
- `200 OK`: User logged in successfully. Returns a JSON object containing the user token and user details.
- `400 Bad Request`: Validation error. Returns a JSON object containing the validation errors.
- `401 Unauthorized`: Invalid email or password. Returns a JSON object containing the error message.
- `500 Internal Server Error`: Server error. Returns a JSON object containing the error message.

### Example Request:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```
# User Profile Endpoint Documentation

## Endpoint: `/users/profile`

### Method: GET

### Description:
This endpoint is used to get the profile of the logged-in user. It requires a valid authentication token.

### Required Headers:
- `Authorization` (string): The Bearer token for the authenticated user.

### Status Codes:
- `200 OK`: User profile retrieved successfully. Returns a JSON object containing the user details.
- `401 Unauthorized`: Invalid or missing authentication token. Returns a JSON object containing the error message.

### Example Request:
```http
GET /users/profile HTTP/1.1
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Example Response:
```json
{
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

# User Logout Endpoint Documentation

## Endpoint: `/users/logout`

### Method: GET

### Description:
This endpoint is used to log out the user. It requires a valid authentication token.

### Required Headers:
- `Authorization` (string): The Bearer token for the authenticated user.

### Status Codes:
- `200 OK`: User logged out successfully. Returns a JSON object containing the success message.
- `401 Unauthorized`: Invalid or missing authentication token. Returns a JSON object containing the error message.

### Example Request:
```http
GET /users/logout HTTP/1.1
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Example Response:
```json
{
  "message": "logged out successfully"
}
```
# Captain Registration Endpoint Documentation

## Endpoint: `/captains/register`

### Method: POST

### Description:
This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, status, and vehicle details. The password will be hashed before storing it in the database.

### Required Data:
- `fullname.firstname` (string): The first name of the captain. Must be at least 3 characters long.
- `fullname.lastname` (string): The last name of the captain. Must be at least 3 characters long.
- `email` (string): The email address of the captain. Must be a valid email format.
- `password` (string): The password for the captain's account. Must be at least 8 characters long.
- `status` (string): The status of the captain. Must be either 'active' or 'inactive'.
- `vehicle.color` (string): The color of the vehicle. Must be at least 3 characters long.
- `vehicle.plate` (string): The plate number of the vehicle. Must be at least 3 characters long.
- `vehicle.capacity` (number): The capacity of the vehicle. Must be a number.
- `vehicle.vehicleType` (string): The type of the vehicle. Must be either 'car', 'motorcycle', or 'auto'.

### Status Codes:
- `200 OK`: Captain registered successfully. Returns a JSON object containing the captain token and captain details.
- `400 Bad Request`: Validation error. Returns a JSON object containing the validation errors.
- `500 Internal Server Error`: Server error. Returns a JSON object containing the error message.

### Example Request:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "status": "active",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "status": "active",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

# Captain Profile Endpoint Documentation

## Endpoint: `/captains/profile`

### Method: GET

### Description:
This endpoint is used to get the profile of the logged-in captain. It requires a valid authentication token.

### Required Headers:
- `Authorization` (string): The Bearer token for the authenticated captain.

### Status Codes:
- `200 OK`: Captain profile retrieved successfully. Returns a JSON object containing the captain details.
- `401 Unauthorized`: Invalid or missing authentication token. Returns a JSON object containing the error message.

### Example Request:
```http
GET /captains/profile HTTP/1.1
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Example Response:
```json
{
  "captain": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "status": "active",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

# Captain Logout Endpoint Documentation

## Endpoint: `/captains/logout`

### Method: GET

### Description:
This endpoint is used to log out the captain. It requires a valid authentication token.

### Required Headers:
- `Authorization` (string): The Bearer token for the authenticated captain.

### Status Codes:
- `200 OK`: Captain logged out successfully. Returns a JSON object containing the success message.
- `401 Unauthorized`: Invalid or missing authentication token. Returns a JSON object containing the error message.

### Example Request:
```http
GET /captains/logout HTTP/1.1
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Example Response:
```json
{
  "message": "Logout successfully"
}
```