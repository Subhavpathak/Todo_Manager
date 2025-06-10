# 📝 Todo Manager

A full-stack Todo Manager app built using **MERN Stack** (MongoDB, Express, React, Node.js). Users can create, view, and delete todos in real-time with persistent storage using MongoDB.

---

## 📁 Project Structure

todo-manager/
├── client/ # React frontend
├── server/ # Node.js + Express backend
├── .env # Environment variables (not committed)
├── .gitignore
└── README.md


---

## 🚀 Features

- ✅ Create new todos
- 📋 View all saved todos
- ❌ Delete completed or unwanted todos
- 🌐 RESTful API integration
- 💾 Persistent data using MongoDB

---

## ⚙️ Technologies Used

**Frontend (client):**
- React
- Axios
- CSS

**Backend (server):**
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv

---

## 📦 Installation & Setup

 - clone_repo:
    -- command: "git clone https://github.com/YOUR_USERNAME/todo-manager.git"
    -- change_directory: "cd todo-manager"
  
  - backend_setup:
    step_1: "cd server"
    step_2: "npm install"
    env_file:
      location: "server/.env"
      variables:
        MONGODB_URI: "your_mongodb_connection_string"
        PORT: "5000"
    start_command: "npm start"

 - frontend_setup:
    step_1: "cd ../client"
    step_2: "npm install"
    step_3: "npm start"
    runs_on: "http://localhost:3000"



---

## API ENDPOINTS:
  - Method: GET
    Endpoint: "/api/todos"
    Description: "Get all todos"
  - Method: POST
    Endpoint: "/api/todos"
    Description: "Create a new todo"
  - Method: DELETE
    Endpoint: "/api/todos/:id"
    Description: "Delete a specific todo"


## Future_enhancements:
  - "✏️ Edit todos"
  - "🟢 Mark as complete/incomplete"
  - "🔐 User login and authentication"
  - "📱 Mobile-responsive design"

## 🙌 Author

**Made by [Subhav Kumar](https://github.com/subhav-code)**  
**Reg. No:** CS23B1071  
**Institute:** Indian Institute of Information Technology (IIIT)
---

## 📜 License

This project is **free to use**..  
For collaboration or questions, feel free to contact me at: **subhavpathak18@gmail.com**

---
