# EmployWise - Employee Management System

EmployWise is a **React.js** application designed to manage employee records efficiently. It features authentication, CRUD operations, state management using Context API, and toast notifications using React Toastify.

## 📌 Features

- 🔐 **Authentication**: Login and logout functionality using local storage.
- 📄 **User Management**: View, edit, and update employee details.
- 📦 **State Management**: Uses Context API to maintain global state.
- 🔄 **API Integration**: Fetches employee data from `reqres.in`.
- 🔔 **Real-time Notifications**: Uses React Toastify for success/error messages.
- 🎨 **Styled with Tailwind CSS** for a modern UI.

## 🛠️ Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v14+ recommended)
- npm or yarn

### Clone the Repository
```bash
 git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
 cd YOUR_REPO_NAME
```

### Install Dependencies
```bash
 npm install  # or yarn install
```

### Run the Application
```bash
 npm start  # or yarn start
```

The application will be available at `http://localhost:3000/`.

## 🚀 Usage Guide

1. **Login**: Use any credentials (mock authentication).
2. **View Employees**: Fetch and display user list from API.
3. **Edit Employee**: Update user details dynamically.
4. **Logout**: Clears session and redirects to login page.

## 📁 Folder Structure

 📂 EmployWise  
 ├── 📂 src  
 │   ├── 📂 components        # Reusable components  
 │   │   ├── Navbar.js  
 │   ├── 📂 context           # Context API for global state management  
 │   │   ├── UserContext.js  
 │   ├── 📂 pages             # Application pages  
 │   │   ├── LoginPage.js  
 │   │   ├── UserList.js  
 │   │   ├── EditUser.js  
 │   ├── App.js               # Main application component  
 ├── package.json  
 ├── README.md  
 ├── .gitignore  


## 🔗 API Details
- Uses `https://reqres.in/api/users` as a mock backend.
- Note: The API does **not** persist updates, so changes reset on refresh.

## 🏗️ Assumptions & Considerations
- **Authentication is mock-based** (no real user validation).
- **State management is handled using Context API** instead of Redux.
- **Data updates are local only** (not persisted to backend).
- **Responsive UI** using Tailwind CSS.

## 🔄 Future Enhancements
- 🔹 Implement real backend & database.
- 🔹 Use JWT authentication for secure login.
- 🔹 Add search & filter functionality.
- 🔹 Improve error handling for API calls.



