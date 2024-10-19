# E-Learning-Website

## Overview
The *Eclipse E-Learning Platform* is a comprehensive, web-based learning platform designed to provide structured computer science education. The platform offers both free and premium interactive courses to enhance the learning experience for students, educators, and administrators. It includes a wide array of features such as course management, enrollment tracking, payment processing, and user role management, making it a complete solution for modern education needs.

---

## Key Features

### 1. User Management
- *Registration & Authentication*: Secure user registration and login using JSON Web Tokens (JWT).
- *Role-Based Access Control*: Custom roles for Admin, Student, and Teacher, each with distinct permissions and access rights.

### 2. Course Management
- *Course Creation*: Allows educators to create and delete courses.
- *Enrollment Tracking*: Monitor students' progress, course completion, and performance with real-time tracking.

### 3. Payment Processing
- *Payments*: OTP-based simulated payment system for premium content access.
- *Access Control*: Premium content is secured and only accessible to paid users.

### 4. Admin Dashboard
- *Statistical Overview*: Key performance indicators such as user registrations, course completion rates, and other useful statistics are displayed.
- *Data Visualization: Visual insights provided through **Recharts* for easy analysis of user behavior and course performance.

---

## System Architecture

### Authentication
- *JWT Authentication*: Stateless, secure authentication via JWT to maintain user sessions and protect resources.
  
### API Security
- *Middleware Protection*: APIs are protected by middleware to ensure secure access for authenticated users.
- *Data Integrity*: Prevent unauthorized access and protect data with stringent token validation and role-based security.

### Data Management
- *Discriminator for Inheritance*: MongoDB discriminators are used to manage different user roles (Admin, Teacher, Student) efficiently.

### State Management
- *Context API*: Efficient context management ensures seamless state transitions and user experience across the platform.

---
## Diagrams

![image](https://github.com/user-attachments/assets/b7c8a92c-82e5-43d3-9044-72ce661bc77e)

![image](https://github.com/user-attachments/assets/54df3d1f-f406-4580-84ce-294eef1f43fa)

![image](https://github.com/user-attachments/assets/c842ba9b-50c5-4c02-8e17-713040136d21)
---

## Technology Stack

### Backend
- *Node.js* with *Express* for RESTful APIs
- *MongoDB* with Mongoose for data handling
- *JWT* for secure authentication and session management

### Frontend
- *React.js* for building a dynamic and interactive user interface
- *Recharts* for data visualization


## Installation & Setup

1. *Clone the Repository*:
   bash
   git clone https://github.com/HodaTouny/E-Learning-Website.git
   

2. *Install Dependencies*:
   Navigate to the project directory and run:
   bash
   npm install
   

4. *Run the Application*:
   Start the development server:
   bash
   npm start
   

5. *Visit the App*:
   Navigate to http://localhost:3000 to access the application.

---


## Contact
For more information, feel free to reach out at:
- Emails:
  
        1.Hoda Samir Touny               hodasammiir@gmail.com
  
        2.Mennatallah Ahmed Abd Elkhalek  mennatallahahmed892@gmail.com
  
        3.Arwa Mohammed Ramadan           arwamohmd.32@gmail.com
  
        4.Menna Mohammed                  menna.mohamedd2023@gmail.com

