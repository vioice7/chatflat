# Resident Live Chat Flat Documentation

## Server

### Description

This is the backend server for the Resident Live Chat Flat application.

It is built with:

-   Node.js
-   Express
-   Socket.IO

The server allows multiple users to send and receive messages in real
time, without being stored in a database.

------------------------------------------------------------------------

### How It Works

- A user connects to the server trough WebSockets.
- When a user sends a message, it is emitted as "chatMessage".
- The server receives the message and broadcasts the message to all connected users.

------------------------------------------------------------------------

### Installation & Maintenance

-  Install dependencies:


    ```npm install```

-  Start the server:

    ```node server.js```
    

-  The server runs on:

    ```http://localhost:3000```
