# 🚀 EmployWise 

EmployWise is a web-based employee management system built with **React.js** and **Tailwind CSS**.  
It allows users to **log in**, **view employee data**, **edit employee details**, and **log out securely** while providing **real-time notifications** via **React Toastify**.

---

## 📌 Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Folder Structure](#folder-structure)
- [Usage Guide](#usage-guide)
- [API Used](#api-used)
- [State Management](#state-management)
- [Project Considerations](#project-considerations)
- [Possible Enhancements](#possible-enhancements)
- [Author](#author)
- [Contributing](#contributing)

---

## 📖 About the Project

EmployWise is a **React-based CRUD** application that manages employee records.  
It fetches **user data** from an API and enables **editing user details**.  
State management is handled via **Context API** to maintain updates across the app.  

This project demonstrates **React Router, API Integration, Local Storage Authentication, Toast Notifications, and State Management**.

---

## ✨ Features

✅ **User Authentication**: Simulated login using `localStorage`.  
✅ **Fetch Employee List**: Data retrieved from `reqres.in` API.  
✅ **Edit Employee Details**: User details updated dynamically.  
✅ **Context API for State Management**: Ensures data persistence across components.  
✅ **Toast Notifications**: Displays login, logout, and update messages.  
✅ **Secure Logout**: Clears session and redirects to the login page.  
✅ **Protected Routes**: Prevents unauthorized access to employee data.  
✅ **Responsive UI**: Styled with Tailwind CSS for a modern look.  

---

## 🛠 Technologies Used

- **React.js** - Frontend framework
- **React Router** - Handles navigation
- **Context API** - Manages global state
- **Axios** - API requests
- **React Toastify** - Toast notifications
- **Tailwind CSS** - Styling framework

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
