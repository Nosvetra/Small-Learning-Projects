# Markdown Note Taking App

A full-stack note-taking application built with a Node.js/Express backend and a React + Vite frontend shell. The backend is the functional part of the project; it exposes authenticated note and user APIs backed by MongoDB.

## Overview

This project allows users to:

- sign up and sign in securely
- receive JWT access and refresh tokens
- create, read, update, and delete markdown-based notes
- manage their profile through authenticated routes
- fetch recent notes from the home route

The backend follows a layered architecture using:

- Express for routing and HTTP handling
- MongoDB via Mongoose for persistence
- JWT for authentication
- bcrypt for password hashing
- REST-style controllers, services, and repositories

## Project structure

```text
markdown-noteTaking-app/
├── backend/
│   ├── .env
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── config/
│   │   ├── database.js
│   │   └── index.js
│   ├── controller/
│   │   ├── articleController.js
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── middleware.js
│   ├── models/
│   │   ├── note.js
│   │   └── userModel.js
│   ├── repository/
│   │   ├── baseRepo.js
│   │   └── userRepo.js
│   ├── router/
│   │   ├── articleRoutes.js
│   │   ├── homePage.js
│   │   ├── indexRoute.js
│   │   └── loginRoutes.js
│   └── services/
│       ├── articleServices.js
│       ├── authServices.js
│       └── userServices.js
├── FrontEnd/
│   ├── package.json
│   ├── src/
│   ├── index.html
│   └── vite.config.js
└── README.md
```

## Backend architecture

The backend is organized into a classic MVC-like pattern with service and repository layers.

### Models

- `userModel.js`
  - stores user details: `name`, `username`, `password`, `role`
  - `username` is unique
  - timestamps are enabled

- `note.js`
  - stores notes with `title`, `description`, `markdown`, and `createdBy`
  - `createdBy` references the user who created the note

### Middleware

- `middleware.js`
  - verifies the incoming JWT token from the `Authorization` header
  - accepts the format: `Authorization: Bearer <token>`
  - attaches the decoded payload to `req.user`

### Services

- `authServices.js`
  - hashes passwords with bcrypt
  - generates JWT access and refresh tokens
  - creates new access tokens from refresh tokens

- `userServices.js`
  - verifies login credentials
  - issues fresh JWT tokens after successful sign-in
  - updates, fetches, and deletes user records

- `articleServices.js`
  - wraps note repository operations for create, fetch, update, delete, and recent list retrieval

### Repository layer

- `baseRepo.js`
  - contains general CRUD logic for notes

- `userRepo.js`
  - handles user-specific database queries such as username lookup and user updates

### Controllers

- `authController.js`
  - handles user registration and token refresh requests

- `userController.js`
  - handles sign-in, user lookup, update, and delete

- `articleController.js`
  - handles note CRUD operations for article resources

## API endpoints

Base URL for the backend: `http://localhost:5000`

### Authentication / user routes

| Method | Route              | Auth required | Description                                     |
| ------ | ------------------ | ------------- | ----------------------------------------------- |
| POST   | `/login/signup`    | No            | Register a new user                             |
| POST   | `/login/signin`    | No            | Sign in and return JWT tokens                   |
| POST   | `/login/refresh`   | No            | Exchange a refresh token for a new access token |
| GET    | `/login/:username` | Yes           | Get user details                                |
| PATCH  | `/login/:username` | Yes           | Update user profile                             |
| DELETE | `/login/:username` | Yes           | Delete user                                     |

Example signup payload:

```json
{
  "name": "John Doe",
  "username": "johndoe",
  "password": "secret123"
}
```

Example sign-in payload:

```json
{
  "username": "johndoe",
  "password": "secret123"
}
```

Example refresh payload:

```json
{
  "refreshToken": "<refresh-token>"
}
```

### Note routes

| Method | Route                         | Auth required | Description                                 |
| ------ | ----------------------------- | ------------- | ------------------------------------------- |
| GET    | `/`                           | No            | Returns a limited list of notes (home page) |
| POST   | `/articles/new`               | Yes           | Create a new note                           |
| GET    | `/articles/:articleId`        | Yes           | Get one note by ID                          |
| PATCH  | `/articles/:articleId/edit`   | Yes           | Update a note                               |
| DELETE | `/articles/:articleId/delete` | Yes           | Delete a note                               |

Example note payload:

```json
{
  "title": "My First Note",
  "description": "A short summary",
  "markdown": "# Hello world\n\nThis is a markdown note."
}
```

## Authentication flow

The app uses two JWT tokens:

- access token: short-lived, used for protected API calls
- refresh token: longer-lived, used to generate a new access token

### JWT payload structure

The JWT payload does not include the username or password. Instead, the token is signed with the MongoDB user id:

```js
jwt.sign({ userId: user._id }, secretKey, { expiresIn: "15m" });
```

This means the payload contains the authenticated user's MongoDB ObjectId, which is later decoded and attached to `req.user` during authentication.

The access token is validated in `middleware.js`, and successful validation attaches the decoded user to `req.user`.

## Environment variables

The backend expects a `.env` file in the `backend` directory with values similar to:

```env
PORT=5000
MONGODB_CONNECT_URI="mongodb://127.0.0.1:27017/markdownNt"
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
CORS_ORIGIN=*
```

The project includes a `.env` file with example values already populated for local development.

## Setup instructions

### 1. Install backend dependencies

```bash
cd markdown-noteTaking-app/backend
npm install
```

### 2. Start the backend server

```bash
node server.js
```

The backend listens on port `5000` by default.

### 3. Run the frontend

```bash
cd markdown-noteTaking-app/FrontEnd
npm install
npm run dev
```

The frontend runs with Vite and is available in development mode on the Vite local port.

## Notes on current state

- The backend is the core working application and contains the full authentication and note management logic.
- The frontend folder is currently a Vite React starter and is not yet fully wired to the backend API.
- The current backend uses MongoDB and is ready for local testing when a MongoDB instance is running.

## Technologies used

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcrypt
- React
- Vite

## License

This project is for local learning and development use.
