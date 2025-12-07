# Deployment Guide: Render + Vercel

## 📋 Prerequisites

- GitHub account
- Render account (https://render.com)
- Vercel account (https://vercel.com)
- MongoDB Atlas account (https://www.mongodb.com/cloud/atlas)

---

## 🚀 PART 1: DEPLOY BACKEND ON RENDER

### Step 1: Push Code to GitHub

```bash
cd attendance_tracking
git init
git add .
git commit -m "Initial commit for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/attendance_tracking.git
git push -u origin main
```

### Step 2: Create Render Account & Web Service

1. Go to https://render.com and sign up
2. Click **"New +"** → **"Web Service"**
3. Select **"Deploy an existing repository"**
4. Connect your GitHub account and select your repository
5. Fill in the details:
   - **Name:** attendance-tracker-backend
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free (or paid for production)

### Step 3: Add Environment Variables on Render

In Render dashboard for your service:

1. Go to **Environment** tab
2. Add these variables:

```
PORT=5000
NODE_ENV=production
MONGODB_URI=<your MongoDB connection string>
JWT_SECRET=<strong random secret>
FRONTEND_URL=https://your-frontend.vercel.app
TWILIO_SID=<your Twilio SID>
TWILIO_AUTH_TOKEN=<your Twilio auth token>
TWILIO_PHONE=<your Twilio phone>
WHATSAPP_FROM=<your WhatsApp from number>
EMAIL_USER=<your Gmail>
EMAIL_PASSWORD=<your Gmail app password>
```

3. Click **"Save changes"**
4. Render will auto-deploy

### Step 4: Copy Your Backend URL

- Once deployed, you'll see: `https://attendance-tracker-backend.onrender.com`
- Save this URL for the frontend configuration

---

## 🎨 PART 2: DEPLOY FRONTEND ON VERCEL

### Step 1: Create Vercel Account

1. Go to https://vercel.com and sign up with GitHub

### Step 2: Deploy Frontend

1. Click **"Add New..."** → **"Project"**
2. Select your repository
3. Configure project:
   - **Framework:** Create React App
   - **Root Directory:** `frontend`

### Step 3: Add Environment Variables

Before deploying, add in Vercel dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add:

```
REACT_APP_API_URL=https://attendance-tracker-backend.onrender.com/api
```

3. Click **"Save"** and **"Deploy"**

### Step 4: Verify Frontend

- Your frontend will be at: `https://your-project.vercel.app`

---

## 🔗 CONNECT FRONTEND TO BACKEND

### Option 1: Environment Variable (Recommended)

Already set `REACT_APP_API_URL` on Vercel

### Option 2: Manual Update

Edit `frontend/src/services/apiClient.js`:

```javascript
const API_URL = "https://attendance-tracker-backend.onrender.com/api";
```

---

## ✅ TESTING CHECKLIST

- [ ] Backend health check: `https://attendance-tracker-backend.onrender.com/api/health`
- [ ] Frontend loads: `https://your-project.vercel.app`
- [ ] Login page displays
- [ ] Can login with `john@example.com / password123`
- [ ] Dashboard loads successfully
- [ ] API calls work (check browser console for errors)

---

## 🛠️ TROUBLESHOOTING

### Backend shows "Application Error"

- Check Render logs: Dashboard → Logs
- Verify all environment variables are set
- Ensure `npm start` runs successfully

### Frontend shows blank page

- Open browser DevTools (F12) → Console
- Check for CORS errors
- Verify `REACT_APP_API_URL` is correct
- Rebuild: In Vercel, trigger manual redeploy

### MongoDB connection fails

- Verify connection string in `.env`
- Check MongoDB Atlas IP whitelist (add `0.0.0.0/0` for all IPs)
- Test connection locally first

### CORS errors

- Backend now accepts requests from `FRONTEND_URL`
- Ensure `FRONTEND_URL` is set on Render

---

## 📝 IMPORTANT NOTES

1. **Render Free Tier:** Services spin down after 15 min of inactivity (cold start delay)
2. **Keep credentials safe:** Never commit `.env` file to GitHub
3. **MongoDB Atlas:** Keep database credentials secure
4. **Update URLs:** If you change Vercel URL, update `FRONTEND_URL` on Render
5. **Redeploy:** Changes auto-deploy when you push to `main` branch

---

## 🔄 CI/CD Flow

1. Make changes locally
2. Push to GitHub: `git push origin main`
3. Render auto-deploys backend
4. Vercel auto-deploys frontend
5. Done! No manual steps needed
