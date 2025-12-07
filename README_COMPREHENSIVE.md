# 📚 Smart Attendance Management System

A comprehensive full-stack application for tracking student attendance with real-time notifications, automated alerts, and detailed analytics. Perfect for educational institutions needing an efficient attendance management solution.

## 🎯 Project Overview

The Smart Attendance Management System is a complete web-based solution designed to streamline attendance tracking in educational settings. Teachers can manage multiple classes, mark attendance efficiently, generate detailed reports, and receive automated notifications about low attendance students. The system combines modern web technologies with robust backend services to provide a seamless user experience.

**Key Purpose:** Eliminate manual attendance tracking and provide instant insights into student attendance patterns.

---

## 🛠️ Comprehensive Tech Stack

### **Frontend Technologies**

- **React 18.2** - Modern UI library with functional components and hooks
- **React Router v6** - Client-side routing for multi-page navigation
- **Axios** - Promise-based HTTP client for API communication
- **Context API** - State management for authentication and class data
- **CSS3** - Custom styling with responsive design
- **Vercel** - Cloud deployment platform with automatic CI/CD

### **Backend Technologies**

- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Lightweight and flexible web application framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Object Data Modeling (ODM) for MongoDB
- **JWT (jsonwebtoken)** - Secure token-based authentication
- **bcryptjs** - Password hashing and encryption
- **Multer** - Middleware for handling file uploads (CSV import)
- **Express Async Errors** - Better error handling for async/await
- **Render** - Container-based deployment platform

### **External Services & APIs**

- **MongoDB Atlas** - Cloud-hosted MongoDB database with backup and scaling
- **Twilio** - WhatsApp API for SMS/messaging notifications
- **Nodemailer** - Email service for automated alerts and notifications
- **Cloudflare** - DNS, caching, and security layer

---

## 📁 Detailed Project Structure

```
attendance_tracking/
├── backend/
│   ├── config/
│   │   └── database.js           # MongoDB connection configuration
│   ├── controllers/
│   │   ├── authController.js     # Registration, login, authentication
│   │   ├── classController.js    # Class management (CRUD operations)
│   │   ├── studentController.js  # Student management and CSV import
│   │   ├── attendanceController.js # Mark, update, retrieve attendance
│   │   ├── reportController.js   # Generate and retrieve reports
│   │   └── notificationController.js # Send notifications
│   ├── models/
│   │   ├── Teacher.js            # Teacher schema with validation
│   │   ├── Student.js            # Student details and info
│   │   ├── Class.js              # Class information
│   │   ├── Attendance.js         # Daily attendance records
│   │   └── Report.js             # Generated report data
│   ├── routes/
│   │   ├── auth.js               # Auth endpoints (register, login)
│   │   ├── classes.js            # Class management routes
│   │   ├── students.js           # Student management routes
│   │   ├── attendance.js         # Attendance marking routes
│   │   ├── reports.js            # Report generation routes
│   │   └── notifications.js      # Notification routes
│   ├── middleware/
│   │   ├── auth.js               # JWT token verification
│   │   └── errorHandler.js       # Centralized error handling
│   ├── services/
│   │   └── notificationService.js # Logic for sending notifications
│   ├── utils/
│   │   ├── jwt.js                # JWT token generation & verification
│   │   ├── csvValidator.js       # CSV file validation for imports
│   │   └── reportGenerator.js    # PDF report generation logic
│   ├── scripts/
│   │   ├── seed.js               # Database seeding with sample data
│   │   └── cleardb.js            # Clear database for fresh start
│   ├── uploads/                  # User uploaded files storage
│   ├── server.js                 # Express app initialization
│   ├── .env                      # Environment variables (not committed)
│   └── package.json              # Node dependencies and scripts
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Alert.js          # Notification/alert component
│   │   │   ├── Modal.js          # Reusable modal dialog
│   │   │   ├── LoadingSpinner.js # Loading indicator
│   │   │   ├── LowAttendanceAlert.js # Low attendance warning
│   │   │   └── ProtectedRoute.js # Route protection wrapper
│   │   ├── pages/
│   │   │   ├── Landing.js        # Home/landing page
│   │   │   ├── Login.js          # Teacher login page
│   │   │   ├── Register.js       # Teacher registration page
│   │   │   ├── Dashboard.js      # Main dashboard with classes
│   │   │   ├── ClassView.js      # View single class details
│   │   │   ├── AttendanceScreen.js # Mark attendance interface
│   │   │   └── AttendanceReport.js # View and export reports
│   │   ├── context/
│   │   │   ├── AuthContext.js    # Authentication state management
│   │   │   └── ClassContext.js   # Class-related state management
│   │   ├── services/
│   │   │   └── apiClient.js      # Centralized API client with axios
│   │   ├── styles/
│   │   │   ├── Landing.css       # Landing page styles
│   │   │   ├── AuthPages.css     # Login/Register styles
│   │   │   ├── Dashboard.css     # Dashboard styles
│   │   │   ├── Attendance.css    # Attendance marking styles
│   │   │   ├── ClassView.css     # Class view styles
│   │   │   ├── Reports.css       # Reports page styles
│   │   │   ├── components.css    # Reusable component styles
│   │   │   ├── Modal.css         # Modal styles
│   │   │   ├── Alert.css         # Alert styles
│   │   │   └── LoadingSpinner.css # Spinner styles
│   │   ├── utils/
│   │   │   ├── helpers.js        # Utility functions (date, formatting)
│   │   │   └── validators.js     # Form validation logic
│   │   ├── App.js                # Main app component with routing
│   │   └── index.js              # React entry point
│   ├── public/
│   │   ├── index.html            # HTML template
│   │   └── manifest.json         # PWA manifest
│   └── package.json              # React dependencies
│
├── DEPLOYMENT_GUIDE.md           # Step-by-step deployment instructions
├── DEBUGGING_GUIDE.md            # Troubleshooting and debugging
├── README.md                     # This file
├── sample_students.csv           # Sample data for bulk import
└── .gitignore                    # Git ignore rules
```

---

## 🎯 Core Features in Detail

### **1. Authentication & Authorization**

- Teacher registration with email verification
- Secure login with JWT tokens
- Password hashing with bcryptjs
- Session management and token refresh
- Protected API routes with middleware

### **2. Class Management**

- Create and manage multiple classes
- View all enrolled students
- Class-specific attendance records
- Delete classes with related data cleanup

### **3. Attendance Marking**

- Mark attendance for entire class at once
- Individual student attendance status (Present/Absent/Leave)
- Real-time synchronization with database
- Attendance history tracking
- Bulk attendance import capability

### **4. Student Management**

- Add students individually or via CSV bulk import
- Edit student information
- View student attendance records
- Track low attendance students
- Student deletion with data cleanup

### **5. Reporting & Analytics**

- Generate comprehensive attendance reports
- PDF export functionality
- Monthly and weekly statistics
- Low attendance alerts (below 75%)
- Detailed attendance breakdown by student

### **6. Notifications**

- WhatsApp notifications via Twilio
- Email alerts for low attendance
- Customizable notification templates
- Batch notification sending

---

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v14+)
- npm or yarn
- MongoDB Atlas account
- Git
- Code editor (VS Code recommended)

### **Quick Start - Local Development**

**Step 1: Clone Repository**

```bash
git clone https://github.com/Pushkar3112/attendance_tracking.git
cd attendance_tracking
```

**Step 2: Setup Backend**

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials:
# - MONGODB_URI: MongoDB connection string
# - JWT_SECRET: Random secret key
# - TWILIO_SID, TWILIO_AUTH_TOKEN: Twilio credentials
# - EMAIL_USER, EMAIL_PASSWORD: Gmail app password

npm run seed        # Load sample data
npm start           # Runs on http://localhost:5000
```

**Step 3: Setup Frontend**

```bash
cd ../frontend
npm install
# Create .env.local (optional, defaults to localhost:5000)
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env.local
npm start           # Runs on http://localhost:3000
```

**Step 4: Test Login**

```
Email: john@example.com
Password: password123
```

---

## 🌐 Production Deployment

### **Deploy Backend to Render**

1. Push code to GitHub
2. Go to render.com → New Web Service
3. Select your GitHub repository
4. Set build command: `npm install`
5. Set start command: `npm start`
6. Add all environment variables
7. Deploy! Auto-redeploys on git push

**Backend URL:** https://hospital-mangement-system-anc4.onrender.com

### **Deploy Frontend to Vercel**

1. Go to vercel.com → New Project
2. Import GitHub repository
3. Set root directory: `frontend`
4. Add environment variable: `REACT_APP_API_URL=<backend_url>`
5. Deploy! Auto-redeploys on git push

---

## 📊 API Reference

### **Authentication Endpoints**

```
POST /api/auth/register    # Register new teacher
POST /api/auth/login       # Login teacher
```

### **Class Management**

```
GET /api/classes           # Get all classes
POST /api/classes          # Create new class
PUT /api/classes/:id       # Update class
DELETE /api/classes/:id    # Delete class
```

### **Student Management**

```
GET /api/students          # Get all students
POST /api/students         # Add new student
POST /api/students/import  # Bulk import via CSV
DELETE /api/students/:id   # Delete student
```

### **Attendance Management**

```
POST /api/attendance/mark  # Mark attendance
GET /api/attendance/:classId # Get class attendance
PUT /api/attendance/:id    # Update attendance record
```

### **Reporting**

```
GET /api/reports           # Get all reports
POST /api/reports/generate # Generate new report
GET /api/reports/export/:id # Export report as PDF
```

### **Notifications**

```
POST /api/notifications/send # Send notification
GET /api/notifications      # Get notification history
```

---

## 🔒 Security Best Practices Implemented

- ✅ Never commit `.env` files to repository
- ✅ Use strong JWT secrets (minimum 32 characters)
- ✅ Validate all user inputs on frontend and backend
- ✅ Use HTTPS in production (enforced by Vercel/Render)
- ✅ Whitelist MongoDB Atlas IPs in production
- ✅ Implement rate limiting on API endpoints
- ✅ Regular security audits and updates
- ✅ Hash passwords with bcryptjs
- ✅ Use secure cookies with httpOnly flag

---

## 🐛 Common Issues & Solutions

| Issue                     | Cause                | Solution                                               |
| ------------------------- | -------------------- | ------------------------------------------------------ |
| CORS Error                | Origin mismatch      | CORS is configured to accept all origins in production |
| MongoDB Connection Failed | IP not whitelisted   | Whitelist 0.0.0.0/0 in MongoDB Atlas Network Access    |
| Token Expired             | JWT token expired    | Clear localStorage and re-login                        |
| File Upload Error         | Large file size      | Check multer size limits in backend                    |
| Email Not Sending         | Gmail security       | Use app-specific password, enable less secure apps     |
| Render Service Sleeping   | Free tier inactivity | Service sleeps after 15 mins, will wake on request     |

---

## 📈 Performance Optimization

- Lazy loading of components
- Database indexing for queries
- Compressed API responses
- Client-side caching with localStorage
- Image optimization in uploads
- CDN for static assets via Cloudflare

---

## 🧪 Testing Checklist

- [ ] Backend health check: `GET /api/health`
- [ ] User registration and validation
- [ ] User login and JWT token generation
- [ ] Create/edit/delete classes
- [ ] Add students and bulk import
- [ ] Mark attendance for class
- [ ] Generate attendance reports
- [ ] Low attendance alerts trigger
- [ ] Email notifications send
- [ ] WhatsApp notifications (if configured)

---

## 📝 Environment Variables Reference

```env
# Backend
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/db
JWT_SECRET=your_super_secret_key_min_32_chars
FRONTEND_URL=https://your-vercel-frontend.vercel.app

# Twilio (WhatsApp)
TWILIO_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE=+1...
WHATSAPP_FROM=whatsapp:+1...

# Gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request with detailed description

---

## 📞 Support & Documentation

- **Deployment Guide:** See `DEPLOYMENT_GUIDE.md`
- **Debugging Guide:** See `DEBUGGING_GUIDE.md`
- **API Documentation:** See this README's API Reference section
- **Issues:** Open an issue on GitHub

---

## 📄 License

ISC License - Open source and free to use for educational and commercial purposes

---

## 👤 Developer Info

**Project Name:** Smart Attendance Management System  
**Version:** 1.0.0  
**Author:** Pushkar  
**Created:** December 2024  
**Status:** Production Ready ✅

---

**Happy Attendance Tracking! 🎓**
