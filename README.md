This project is a simple server built using Express.js and MongoDB. It allows users to submit their details (name, email, phone number, and use case) to be notified for a product or service launch. The collected data is stored in a MongoDB database. This project serves as a foundational implementation that can be expanded with more features later.

Features
Collects user information: name, email, phone number, and use case (individual, team, enterprise, student).
Validates incoming data before storing.
Checks if an email is already registered to prevent duplicate entries.
Uses MongoDB as the database with Mongoose for data modeling.

Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Body-Parser
CORS

Installation and Setup
Prerequisites
Node.js installed on your machine.
MongoDB running locally or accessible through a cloud provider (e.g., MongoDB Atlas).

Install the dependencies: npm install
Start the server:node index.js
