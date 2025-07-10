# EXE Backend

This is the backend for the EXE application, built with Node.js and MongoDB.

## Setup Instructions

1. Install dependencies:
```
npm install
```

2. Set up environment variables:
- Create a `.env` file in the root of the backend directory
- Add the following variables:
  ```
  PORT=5000
  NODE_ENV=development
  MONGODB_URI=mongodb://localhost:27017/exe_database
  JWT_SECRET=your_jwt_secret_key
  JWT_EXPIRE=30d
  ```

3. Start the server:
```
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create a new event (requires authentication)
- `PUT /api/events/:id` - Update an event (requires authentication)
- `DELETE /api/events/:id` - Delete an event (requires authentication)

### Posts (Forum)
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create a new post (requires authentication)
- `PUT /api/posts/:id` - Update a post (requires authentication)
- `DELETE /api/posts/:id` - Delete a post (requires authentication)

### File Upload
- `POST /api/upload` - Upload a file (requires authentication)

## Database Connection

The application connects to MongoDB using the connection string specified in the `.env` file. 
Make sure MongoDB is installed and running on your system, or use MongoDB Atlas for cloud hosting.
