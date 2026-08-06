# Employee Task Management System

A React-based Employee Task Management System developed as an academic project. The application provides role-based authentication for Admins and Employees, allowing administrators to assign tasks and employees to manage their assigned work efficiently.

---

## Project Overview

The Employee Task Management System is designed to simplify task assignment and tracking within an organization. The system provides two different dashboards based on user roles:

- **Admin Dashboard**
- **Employee Dashboard**

The application uses React Context API for state management and Local Storage for persistent data storage.

---

## Features

### Authentication
- Admin Login
- Employee Login
- Role-based Dashboard Access
- Session persistence using Local Storage

### Admin Module
- Create New Tasks
- Assign Tasks to Employees
- View Employee Task Details
- Track Overall Task Status

### Employee Module
- View Assigned Tasks
- Accept New Tasks
- Complete Tasks
- Mark Tasks as Failed
- View Task Statistics

### Task Status Management
- New Tasks
- Active Tasks
- Completed Tasks
- Failed Tasks

### Data Persistence
- Local Storage Integration
- Tasks remain available after page refresh

---

# Tech Stack

| Technology | Usage |
|------------|-------|
| React.js | Frontend |
| Context API | State Management |
| JavaScript | Programming Language |
| Tailwind CSS | Styling |
| Local Storage | Data Persistence |
| Vite | Development Environment |

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Mehwish-Afsar/Employee-Management-System.git
```

---

## Go to Project Folder

```bash
cd Employee-Management-System
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

# Login Credentials

## Admin

**Email**

```text
admin@me
```

**Password**

```text
123
```

---

## Employee

Example Employee Account

**Email**

```text
ali@example.com
```

**Password**

```text
123
```

You can also use any employee credentials available in the LocalStorage data.

---

# Application Workflow

1. User logs into the system.
2. Admin is redirected to the Admin Dashboard.
3. Employee is redirected to the Employee Dashboard.
4. Admin assigns tasks.
5. Employee receives assigned tasks.
6. Employee updates task status.
7. Changes are automatically stored in Local Storage.

---

# Screenshots

## Login Page

<img width="1365" height="596" alt="Login_page" src="https://github.com/user-attachments/assets/56b501ed-d827-4bb2-9c87-827e1f6cb68a" />
*Figure 1: Login interface for Admin and Employee authentication.*

---

## Admin Dashboard

<img width="1366" height="901" alt="Admin_Dashboard" src="https://github.com/user-attachments/assets/823aaa7b-ef92-4c6b-a475-8bdaee79248a" />
*Figure 2: Admin Dashboard showing task creation and employee management.*

---

## Employee Dashboard

<img width="1345" height="599" alt="Employee_Dashboard" src="https://github.com/user-attachments/assets/7759bd21-d50e-48de-a3ca-19ac277c1587" />
*Figure 3: Employee Dashboard displaying assigned tasks and task statistics.*

---

# Future Enhancements

- Backend Integration
- MongoDB Database
- JWT Authentication
- REST APIs
- Email Notifications
- Task Due Date Reminders
- Search and Filter Tasks
- Task Priority Levels
- Admin Analytics Dashboard

---

# Learning Outcomes

This project demonstrates understanding of:

- React Components
- React Hooks
- Context API
- State Management
- Conditional Rendering
- Local Storage
- Component Reusability
- Role-Based Authentication
- CRUD Operations
- Tailwind CSS

---

# Author

**Mehwish Afsar**

Software Engineering Student

Jinnah University for Women

---
