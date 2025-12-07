# 📚 Smart Attendance Management System

A modern full-stack application for tracking student attendance with real-time notifications and comprehensive reporting.

## 🎯 Project Overview

This is a complete attendance management solution with role-based access, automated notifications, and detailed analytics. Teachers can mark attendance, generate reports, and receive alerts for low attendance students.

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18.2** - UI library with hooks
- **React Router v6** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling (no framework)
- **Vercel** - Deployment platform

### **Backend**
- **Node.js** - Runtime environment
- **Express.js** - Web server framework
- **MongoDB** - NoSQL database (Atlas)
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Render** - Deployment platform

### **External Services**
- **MongoDB Atlas** - Cloud database
- **Twilio** - WhatsApp notifications
- **Nodemailer** - Email alerts
- **Cloudflare** - DNS & caching

---

## 📁 Project Structure

```
attendance_tracking/
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/      # Business logic (auth, attendance, reports)
│   ├── models/          # MongoDB schemas (Teacher, Student, Attendance)
│   ├── routes/          # API endpoints
│   ├── middleware/      # Auth, error handling
│   ├── services/        # Notification logic
│   ├── scripts/         # Database seeding
│   ├── utils/           # JWT, CSV validation, report generation
│   ├── server.js        # Entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI (Alert, Modal, Spinner)
│   │   ├── pages/       # Main screens (Login, Dashboard, Attendance)
│   │   ├── context/     # React Context (Auth, Class state)
│   │   ├── services/    # API client
│   │   ├── styles/      # CSS files
│   │   ├── utils/       # Helpers & validators
│   │   ├── App.js       # Main component
│   │   └── index.js     # React entry point
│   ├── public/          # Static files
│   └── package.json
│
└── sample_students.csv  # Sample data for import
```

---

## 🚀 Features

### **Teacher Dashboard**
- ✅ Manage multiple classes
- ✅ Mark attendance with real-time sync
- ✅ Generate attendance reports (PDF export)
- ✅ View low attendance alerts
- ✅ Bulk import students via CSV

### **Authentication & Security**
- ✅ JWT-based authentication
- ✅ Password hashing (bcryptjs)
- ✅ Protected routes
- ✅ Role-based access control

### **Notifications**
- ✅ WhatsApp notifications (Twilio)
- ✅ Email alerts for low attendance
- ✅ Real-time attendance updates

### **Reporting**
- ✅ Detailed attendance reports
- ✅ PDF generation
- ✅ Monthly/weekly analytics
- ✅ Low attendance tracking

---

## 🔧 Setup & Installation

### **Local Development**

**1. Clone & Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
# Update MongoDB URI and other env variables
npm run seed    # Seed sample data
npm start       # Runs on http://localhost:5000
```

**2. Setup Frontend**
```bash
cd frontend
npm install
npm start       # Runs on http://localhost:3000
```

### **Test Credentials**
- Email: `john@example.com`
- Password: `password123`

---

## 📦 Environment Variables

**Backend (.env)**
```
PORT=5000
NODE_ENV=production
MONGODB_URI=<mongodb_connection>
JWT_SECRET=<secure_key>
FRONTEND_URL=<vercel_frontend_url>
TWILIO_SID=<twilio_sid>
TWILIO_AUTH_TOKEN=<token>
EMAIL_USER=<gmail>
EMAIL_PASSWORD=<app_password>
```

---

## 🌐 Deployment

### **Backend (Render)**
- Push to GitHub
- Connect Render → Select repository
- Build Command: `npm install`
- Start Command: `npm start`
- Add environment variables
- Auto-deploys on git push

**Live:** https://hospital-mangement-system-anc4.onrender.com

### **Frontend (Vercel)**
- Import GitHub repo
- Root Directory: `frontend`
- Environment Variable: `REACT_APP_API_URL=<backend_url>`
- Auto-deploys on git push

---

## 🧪 Testing

```bash
# Backend health check
curl https://backend-url/api/health

# Login
POST /api/auth/login
Body: { email, password }

# Mark attendance
POST /api/attendance/mark
Body: { classId, studentId, date, status }
```

---

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Create teacher account |
| POST | `/api/auth/login` | Teacher login |
| GET | `/api/classes` | Get all classes |
| POST | `/api/attendance/mark` | Mark attendance |
| GET | `/api/reports` | Get attendance reports |
| POST | `/api/students/import` | Import students CSV |

---

## 🔐 Security Features

- ✅ JWT authentication tokens
- ✅ bcryptjs password hashing
- ✅ CORS protection
- ✅ Environment variable secrets
- ✅ Input validation & sanitization
- ✅ Error handling middleware

---

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| CORS Error | Update `FRONTEND_URL` on Render |
| MongoDB Connection | Whitelist IP in MongoDB Atlas |
| 400 Validation Error | Check required fields (name, email, password) |
| Token Expired | Re-login to get new token |

---

## 📝 License

ISC License - Feel free to use for learning & projects

---

## 👤 Author

Built by **Pushkar** | Attendance Management System | 2024