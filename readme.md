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

---

### How It Works

- A user connects to the server trough WebSockets.
- When a user sends a message, it is emitted as "chatMessage".
- The server receives the message and broadcasts the message to all connected users.

---

### Installation & Maintenance

-  Install dependencies:


    ```npm install```

-  Start the server:

    ```node server.js```
    

-  The server runs on:

    ```http://localhost:3000```

---

## Client

### Description

This is the frontend application for the Resident Live Chat Flat project.

It is built with:

- Angular
- Socket.IO Client

The client connects to the backend server (running on port 3000) and allows users to send and receive messages in real time.

The client runs on: http://localhost:4210

---

### Run the Client

- Install dependencies:

```
npm install
```

- Start the development server:

```
ng serve
```

- Open your browser and go to:

```
http://localhost:4210
```

The page will automatically reload when you modify the source files.

---

### Build the Project

To build the application for production:

```
ng build
```

The build files are generated in the `dist/` folder.
