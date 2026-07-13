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

<img width="1365" height="603" alt="Login" src="https://github.com/user-attachments/assets/69c1b017-6b76-43be-8511-0b4e66c22281" />
*Figure 1: Login interface for Admin and Employee authentication.*

---

## Admin Dashboard

<img width="1366" height="744" alt="Admin Dashboard" src="https://github.com/user-attachments/assets/47736a10-d37e-4c9c-b7d7-45f970c09982" />
*Figure 2: Admin Dashboard showing task creation and employee management.*

---

## Employee Dashboard

<img width="1362" height="603" alt="Employee Dashboard" src="https://github.com/user-attachments/assets/421dc57f-e84f-4dba-bbe5-00cad033a210" />
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
