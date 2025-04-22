# School Management API

A RESTful API for managing school information with proximity-based search functionality.

## Description

This API allows users to add school information including name, address, and geographic coordinates. It also provides the ability to search for schools and sort them based on proximity to a user's location.

## Features

- Add new schools with name, address, latitude, and longitude
- Retrieve schools sorted by distance from a given location
- Distance calculation using the Haversine formula for accurate results

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```
PORT=3000
DB_HOST=your_db_host
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

## Database Setup

The application uses MySQL. You'll need to create a table named `schools` with the following structure:

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL
);
```

## Running the Application

Start the server using:

```bash
node app.js
```

The server will run on port 3000 by default, or the port specified in your `.env` file.

## API Documentation

### Add a School

- **URL**: `/addSchool`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.345678,
    "longitude": 98.765432
  }
  ```
- **Success Response**: 
  - Status: 201
  - Content: `{ "message": "School added successfully", "id": 1 }`

### List Schools by Proximity

- **URL**: `/listSchools?latitude=12.345678&longitude=98.765432`
- **Method**: `GET`
- **Query Parameters**: 
  - `latitude`: User's latitude
  - `longitude`: User's longitude
- **Success Response**: 
  - Status: 200
  - Content: Array of schools sorted by distance

## Technologies Used

- [Express.js](https://expressjs.com/) - Web framework
- [MySQL2](https://github.com/sidorares/node-mysql2) - MySQL client for Node.js
- [Dotenv](https://github.com/motdotla/dotenv) - Environment variable management
- [CORS](https://github.com/expressjs/cors) - Cross-Origin Resource Sharing middleware
