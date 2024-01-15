# [Social Media Analytics Microservice]

## Video Demonstration

For a detailed walkthrough and demonstration of the Social Media Analytics Microservice, please watch the following video: <br>
[Social Media Analytics Microservice Demo](https://www.loom.com/share/b9b1ee393adc480c8ea3ea08ee89c3de?sid=d38e7132-aafc-4919-8405-149cf7ef8c68).

### Deployed Link
[Deployed Link ](https://socialmedia-analytics-lquw.onrender.com)

## Introduction

Welcome to the Social Media Analytics Microservice! The Social Media Analytics Platform Backend is a robust application engineered to manage social media posts, deliver insightful analytics, and ensure scalability. This project is developed using JavaScript, specifically NodeJS and ExpressJS. Additionally, it leverages Redis for both database operations and efficient caching, contributing to a powerful and scalable foundation.

## Technologies Used

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [Mongoose](https://mongoosejs.com/)
- [IoRedis](https://github.com/luin/ioredis)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)

### Prerequisites

Ensure you have Node.js and npm installed on your system.

### Installation

1. Clone the GitHub repository.
2. Open your preferred code editor (preferably VS Code).
3. Create a `.env` file and add the necessary details (refer to `.envSample`).
4. Install dependencies: `npm install`.

## API Endpoints

- **Post Creation**
  - Endpoint: `POST /api/v1/posts/`
    - Request Payload: JSON payload with text content and a unique identifier.
    - Response:
      - Success (Status Code 200): The post creation is successful.
      - Failure (Status Code 500): Internal Server Error.
    - Example:
      ```json
      {
        "content": "This is Sample Text",
        "id": "33538"
      }
      ```

- **GET Analysis**
  - Endpoint: `GET /api/v1/posts/{id}/analysis/`
    - Response: JSON file containing post content, word count, and average word length.
    - Example:
      ```json
      {
        "wordCount": 5,
        "averageWordLength": 6
      }
      ```

## Rate Limiting

Utilizing Express.js middleware, the application enforces rate limits based on individual IP addresses.

## Caching Technique

To ensure fast data retrieval, the assignment incorporates Redis Database, leveraging the primary memory of the system. This choice facilitates an efficient caching mechanism within the application.

## Running the Application

Ensure you've completed the installation steps, then run `nodemon app.js` to start the server.
