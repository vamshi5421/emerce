# 🚀 Formspree Setup Guide for Emerce Contact Forms

## What is Formspree?
Formspree is a form backend service that handles form submissions without requiring server setup. It can:
- Send email notifications
- Integrate with Google Sheets
- Provide spam protection
- Store submissions in a dashboard

## 📋 Step-by-Step Setup

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Click "Get Started" 
3. Sign up with your email
4. Verify your email address

### Step 2: Create Your Form
1. In your Formspree dashboard, click "New Form"
2. Name it "Emerce Contact Form"
3. Copy the form endpoint URL (looks like: `https://formspree.io/f/xdkogkvo`)

### Step 3: Update Environment Variables
1. In your project, create/update `.env.local`:
\`\`\`
FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID_HERE
\`\`\`
2. Replace `YOUR_FORM_ID_HERE` with your actual form ID

### Step 4: Configure Form Settings
In your Formspree dashboard:

#### Email Notifications
- ✅ Enable email notifications
- Set notification email to: `info@emerce.com`
- Customize email template if desired

#### Google Sheets Integration (Optional)
1. Go to "Integrations" tab
2. Click "Add Integration" → "Google Sheets"
3. Connect your Google account
4. Select/create a spreadsheet
5. Map form fields to columns:
   - Name → Column A
   - Email → Column B  
   - Phone → Column C
   - Message → Column D
   - DateTime → Column E
   - Timestamp → Column F

#### Spam Protection
- ✅ Enable reCAPTCHA (recommended)
- ✅ Enable honeypot protection
- Set submission limits if needed

### Step 5: Test Your Forms
1. Submit a test form on your website
2. Check your email for notifications
3. Verify data appears in Google Sheets (if configured)
4. Check Formspree dashboard for submissions

## 🎯 Current Integration Status

### ✅ What's Already Set Up:
- Contact form on homepage (`/`)
- Property inquiry form on vacancy page (`/vacancy`)
- Error handling and validation
- Success/error messages
- Form reset after submission
- Loading states

### 📊 Data Collected:
- **Name** - Customer's full name
- **Email** - Contact email address
- **Phone** - Phone number with country code
- **Message** - Customer inquiry/requirements
- **DateTime** - Submission time (India timezone)
- **Timestamp** - ISO timestamp
- **Property** - Which property they're inquiring about (vacancy page)
- **Inquiry Type** - Type of inquiry for categorization

## 💡 Pro Tips

### Free Plan Limits:
- 50 submissions/month
- Basic integrations
- Email notifications

### Paid Plan Benefits ($8/month):
- Unlimited submissions
- Advanced integrations
- File uploads
- Custom redirects
- Webhook support

### Best Practices:
1. **Test thoroughly** before going live
2. **Set up email notifications** immediately
3. **Use Google Sheets** for easy data management
4. **Enable spam protection** to avoid fake submissions
5. **Monitor your dashboard** regularly

## 🔧 Troubleshooting

### Common Issues:
1. **Form not submitting**: Check form endpoint URL
2. **No email notifications**: Verify email settings in dashboard
3. **Google Sheets not updating**: Check integration configuration
4. **Spam submissions**: Enable reCAPTCHA and honeypot

### Support:
- Formspree documentation: [docs.formspree.io](https://docs.formspree.io)
- Email support: help@formspree.io
- Status page: [status.formspree.io](https://status.formspree.io)

## 🎉 You're All Set!

Once configured, your forms will:
- ✅ Collect all customer inquiries
- ✅ Send you email notifications
- ✅ Store data in Google Sheets
- ✅ Provide a great user experience
- ✅ Handle errors gracefully

Your warehouse rental business now has professional contact forms that work reliably!
