# Chattify

Chattify is a full-stack real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. It provides a seamless real-time messaging experience with user authentication, profile customization, and responsive design.

## Features

- **Real-Time Messaging**: Instant message delivery and real-time updates using Socket.io.
- **User Authentication**: Secure signup, login, and JWT-based authentication.
- **Image Sharing**: Support for uploading and sending images, powered by Cloudinary.
- **Online Status**: See which users are currently online in real time.
- **Global State Management**: Efficient state management on the frontend using Zustand.
- **Responsive UI**: Beautiful, fully responsive user interface built with TailwindCSS and DaisyUI.

## Tech Stack

### Frontend
- **Framework**: React 18 (Vite)
- **Routing**: React Router DOM v7
- **State Management**: Zustand
- **Styling**: TailwindCSS, DaisyUI
- **Real-time Client**: Socket.io-client
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Real-time Server**: Socket.io
- **Authentication**: JSON Web Tokens (JWT) & bcrypt
- **Media Storage**: Cloudinary

## Installation & Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed along with a [MongoDB](https://www.mongodb.com/) instance running. You will also need a [Cloudinary](https://cloudinary.com/) account for image uploads.

### 1. Clone the repository
```bash
git clone https://github.com/Aryan716/Chattify-main.git
cd fullstack-chatApp
```

### 2. Install dependencies
From the root directory, run the build script to install dependencies for both the frontend and backend:
```bash
npm run build
```
*(This command runs `npm install` for both the backend and frontend directories.)*

### 3. Environment Variables
Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 4. Running the Application
From the root directory, you can start both the backend server and the frontend development server simultaneously:
```bash
npm start
```
The backend will run on `http://localhost:5001` (or your defined `PORT`), and the frontend will be accessible at the local Vite development server address.

## Scripts (Root)
- `npm run build`: Installs all dependencies in `backend/` and `frontend/` and builds the frontend.
- `npm start`: Starts the backend server and frontend development server concurrently.
