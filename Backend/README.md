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