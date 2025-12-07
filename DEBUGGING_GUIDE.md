# 🔍 CORS & Registration Debugging Guide

## Step-by-Step Troubleshooting

### **STEP 1: Check Your Current Vercel URL**
1. Go to https://vercel.com/dashboard
2. Click your project
3. Copy the **Production URL** at the top
4. It should look like: `https://attendance-tracking-xxxx-pushkar3112s-projects.vercel.app`

### **STEP 2: Verify Render FRONTEND_URL is Correct**
1. Go to https://dashboard.render.com
2. Click your backend service
3. Go to **Environment** tab
4. Check `FRONTEND_URL` value
5. **It MUST match your Vercel URL from Step 1**

### **STEP 3: Test CORS with curl**
Open PowerShell and run:
```powershell
$url = "https://hospital-mangement-system-anc4.onrender.com/api/health"
$headers = @{"Origin" = "https://attendance-tracking-xxxx-pushkar3112s-projects.vercel.app"}
Invoke-WebRequest -Uri $url -Headers $headers -UseBasicParsing
```

Expected response should have:
```
Access-Control-Allow-Origin: https://attendance-tracking-xxxx-pushkar3112s-projects.vercel.app
```

### **STEP 4: Check Browser Console Errors**
1. Go to your Vercel app
2. Press **F12** (Developer Tools)
3. Go to **Console** tab
4. Try to register
5. Look for the exact error message
6. Copy the FULL error and share it

### **STEP 5: Verify Request Headers**
In DevTools (F12):
1. Go to **Network** tab
2. Try to register
3. Click on the `auth/register` request
4. Go to **Request Headers** tab
5. Check if `Origin` header matches your Vercel URL

---

## Common Issues & Fixes

### **Issue 1: CORS Error with Old URL**
**Error:** "Access-Control-Allow-Origin header has a value... that is not equal to the supplied origin"

**Fix:**
- Your Vercel URL changed
- Update `FRONTEND_URL` on Render with NEW Vercel URL
- Wait 2-3 minutes for Render to redeploy

### **Issue 2: Backend Not Responding**
**Error:** "Failed to fetch" or "net::ERR_FAILED"

**Fix:**
- Check if backend is running: https://hospital-mangement-system-anc4.onrender.com/api/health
- If showing error, check Render logs
- Verify all environment variables on Render

### **Issue 3: Validation Failed on Register**
**Error:** "Validation failed" or "400 Bad Request"

**Fix:**
- Make sure you're filling ALL required fields:
  - Name (required)
  - Email (required, must be valid format)
  - Password (required, min 6 characters)
  - Phone (optional)
  - Department (optional)

---

## Quick Debug Checklist

- [ ] Vercel app is deployed and accessible
- [ ] Backend health check works: https://hospital-mangement-system-anc4.onrender.com/api/health
- [ ] MongoDB is connected (check Render logs)
- [ ] `FRONTEND_URL` on Render matches your Vercel URL
- [ ] Open F12 DevTools on Vercel app
- [ ] Look at exact CORS error message
- [ ] Check Console tab for specific validation errors

---

## What to Send Me Next

Copy & paste the following:

1. **Your Vercel URL:** (from dashboard)
2. **CORS Error Message:** (from browser console F12)
3. **Render FRONTEND_URL value:** (from environment variables)
4. **Last 20 lines from Render Logs:** (from backend service)

This will help me identify the exact issue!

