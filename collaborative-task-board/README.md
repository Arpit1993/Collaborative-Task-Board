# Steps to run the project: 

1. Go to the collaborative-task-board directory

2. Once in the directory run "npm install"

3. Once all the dependencies are installed run "npm run dev"

================================================================

# Vercel Link: 

https://collaborative-task-board-egm3.vercel.app/

================================================================

# For Real time synchronization I would do the following 

### 1. Choose a Real-Time Backend ###
   For real-time communication, I would opt for Socket.IO because:

   It offers reliable WebSocket abstraction.

   It supports rooms, event broadcasting, and reconnection handling.

   It's easy to integrate with a Node.js server and React frontend.


### 2. Set Up the Socket.IO Server ###
   Create a simple Node.js + Express backend.

   Add socket.io and configure a WebSocket server.

   Store and broadcast updates like column creation, task movement, etc.

### 3. Connect React App to WebSocket ###
   Install socket.io-client in the frontend.

   Initialize a WebSocket connection when the app mounts.

   Store socket in a global store like React Context or Zustand for global access.

### 4. Emit Events on Local State Changes ###
   Whenever a task or column is updated locally (via drag-and-drop or form input), emit an event via socket.emit:

### 5. Listen for Real-Time Updates ###
   Set up socket.on(...) listeners to handle incoming events.

   Apply updates to the local store/state accordingly.

### 6. Apply Optimistic Updates ###
   On drag-and-drop or form submission, update the UI immediately.

   Emit the socket event in the background.

   Optionally, rollback the UI if the server fails or times out.

### 7. Handle User Presence ###
   On connect, emit a user:join event with user info.

   On disconnect, broadcast user:left.

   Maintain a list of online users in memory and broadcast changes.

### 8. Sync on Reconnection ###
   When a client reconnects (after a drop), fetch the latest board state from the server or rejoin the socket room.

   This ensures that no updates are missed due to disconnection.
