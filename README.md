<h1 align="center">💬 Chattify</h1>

<p align="center">
  A full-stack, real-time chat application built with the MERN stack & Socket.io
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Socket.io-Real--time-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io" />
  <img src="https://img.shields.io/badge/TailwindCSS-DaisyUI-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
</p>

---

## 📖 About

**Chattify** is a feature-rich, real-time messaging application that delivers a seamless chat experience. It combines secure JWT-based authentication, live online-status tracking, image sharing via Cloudinary, and a beautiful, themeable UI — all powered by the MERN stack and WebSockets.

---

## ✨ Features

| Feature | Description |
|---|---|
| 💬 **Real-Time Messaging** | Instant message delivery powered by Socket.io WebSockets |
| 🔐 **Authentication** | Secure signup & login with JWT tokens and bcrypt password hashing |
| 🖼️ **Image Sharing** | Upload and send images in chat, stored on Cloudinary |
| 🟢 **Online Status** | Real-time online/offline indicators for all users |
| 🎨 **32+ Themes** | Customizable UI with 32+ DaisyUI themes (dark, synthwave, cyberpunk, nord, etc.) |
| 👤 **Profile Management** | Update profile picture and view account details |
| 📱 **Responsive Design** | Fully responsive UI that works on desktop, tablet, and mobile |
| 🔔 **Toast Notifications** | User-friendly feedback with react-hot-toast |
| ⚡ **Global State** | Efficient client-side state management with Zustand |
| 🛡️ **Protected Routes** | Route guards ensuring authenticated access to private pages |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI framework (via Vite) |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [Zustand](https://zustand-demo.pmnd.rs/) | Lightweight state management |
| [TailwindCSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [DaisyUI](https://daisyui.com/) | Component library & theming |
| [Socket.io Client](https://socket.io/) | Real-time WebSocket client |
| [Axios](https://axios-http.com/) | HTTP client |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |

### Backend
| Technology | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) | JavaScript runtime |
| [Express.js](https://expressjs.com/) | Web framework |
| [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/) | Database & ODM |
| [Socket.io](https://socket.io/) | Real-time WebSocket server |
| [JWT](https://jwt.io/) | Token-based authentication |
| [bcrypt](https://www.npmjs.com/package/bcrypt) | Password hashing |
| [Cloudinary](https://cloudinary.com/) | Cloud-based image storage |
| [cookie-parser](https://www.npmjs.com/package/cookie-parser) | Cookie handling |
| [CORS](https://www.npmjs.com/package/cors) | Cross-origin resource sharing |

---

## 📁 Project Structure

```
fullstack-chatApp/
├── backend/
│   └── src/
│       ├── controllers/       # Route handler logic
│       │   ├── auth.js        # Signup, login, logout, profile update
│       │   └── message.js     # Send & retrieve messages
│       ├── lib/
│       │   ├── cloudnary.js   # Cloudinary config
│       │   ├── db.js          # MongoDB connection
│       │   ├── socket.js      # Socket.io server setup
│       │   └── utils.js       # JWT helper utilities
│       ├── middleware/        # Auth middleware (JWT verification)
│       ├── models/
│       │   ├── userModel.js   # User schema (email, name, password, avatar)
│       │   └── messageModel.js # Message schema (sender, receiver, text, image)
│       ├── routes/
│       │   ├── auth.js        # /api/auth routes
│       │   └── message.js     # /api/messages routes
│       ├── seeds/             # Database seed scripts
│       └── index.js           # Express server entry point
│
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── ChatContainer.jsx    # Main chat view
│       │   ├── ChatHeader.jsx       # Chat header with user info
│       │   ├── MessagesInput.jsx    # Message input with image upload
│       │   ├── Navbar.jsx           # Top navigation bar
│       │   ├── NoChatSelected.jsx   # Empty state placeholder
│       │   ├── Sidebar.jsx          # Contacts sidebar with online filter
│       │   ├── AuthImagePattern.jsx # Decorative auth page pattern
│       │   └── skeletons/           # Loading skeleton components
│       ├── constants/
│       │   └── index.js       # Theme list (32+ themes)
│       ├── lib/               # Axios instance config
│       ├── pages/
│       │   ├── HomePage.jsx   # Main chat page
│       │   ├── LoginPage.jsx  # Login form
│       │   ├── SignUpPage.jsx  # Registration form
│       │   ├── ProfilePage.jsx    # User profile management
│       │   └── SettingsPage.jsx   # Theme customization
│       ├── store/
│       │   ├── useAuthStore.js    # Auth state (login, signup, profile)
│       │   ├── useChatStore.js    # Chat state (messages, contacts)
│       │   └── useThemeStore.js   # Theme persistence
│       ├── App.jsx            # Root component with routing
│       └── main.jsx           # App entry point
│
├── package.json               # Root scripts (build & start)
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) instance (local or [Atlas](https://www.mongodb.com/atlas))
- [Cloudinary](https://cloudinary.com/) account (free tier works)

### 1. Clone the Repository

```bash
git clone https://github.com/Aryan716/Chattify-main.git
cd Chattify-main
```

### 2. Set Up Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

### 3. Install Dependencies

From the root directory, run:

```bash
npm run build
```

This installs dependencies for both `backend/` and `frontend/` and builds the frontend production bundle.

### 4. Run the Application

```bash
npm start
```

| Service | URL |
|---|---|
| Backend API | `http://localhost:5001` |
| Frontend Dev | `http://localhost:5173` |

---

## 📡 API Endpoints

### Authentication — `/api/auth`

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/signup` | Register a new user |
| `POST` | `/login` | Login with credentials |
| `POST` | `/logout` | Logout and clear cookies |
| `PUT` | `/update-profile` | Update profile picture |
| `GET` | `/check` | Verify authentication status |

### Messages — `/api/messages`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/users` | Get all users for sidebar |
| `GET` | `/:id` | Get chat history with a user |
| `POST` | `/send/:id` | Send a message (text/image) |

---

## 🎨 Themes

Chattify supports **32+ built-in themes** powered by DaisyUI. Switch themes instantly from the Settings page — your preference is saved locally.

<details>
<summary>Available Themes</summary>

`light` · `dark` · `cupcake` · `bumblebee` · `emerald` · `corporate` · `synthwave` · `retro` · `cyberpunk` · `valentine` · `halloween` · `garden` · `forest` · `aqua` · `lofi` · `pastel` · `fantasy` · `wireframe` · `black` · `luxury` · `dracula` · `cmyk` · `autumn` · `business` · `acid` · `lemonade` · `night` · `coffee` · `winter` · `dim` · `nord` · `sunset`

</details>

---

## 🔌 Real-Time Architecture

```
┌─────────────┐         WebSocket          ┌─────────────┐
│   Client A   │◄─────────────────────────►│             │
│  (React +    │                            │  Socket.io  │
│  Socket.io)  │     ┌──────────────┐       │   Server    │
└─────────────┘     │   MongoDB    │       │  (Node.js)  │
                     │              │◄─────►│             │
┌─────────────┐     └──────────────┘       └─────────────┘
│   Client B   │◄─────────────────────────►       ▲
│  (React +    │         WebSocket                 │
│  Socket.io)  │                            ┌──────┴──────┐
└─────────────┘                            │  Cloudinary  │
                                            │  (Images)    │
                                            └─────────────┘
```

- **Online tracking**: A server-side `userSocketMap` maps user IDs to socket IDs, broadcasting online status to all clients in real time.
- **Instant delivery**: Messages are emitted directly to the receiver's socket for zero-delay delivery.
- **Persistent storage**: All messages are saved to MongoDB so chat history is preserved across sessions.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/Aryan716">Aryan</a>
</p>
