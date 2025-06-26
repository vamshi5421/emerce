# Google Sheets Integration Setup

## Current Status
The form is currently using a **mock implementation** that logs submissions to the console. Follow these steps to set up real Google Sheets integration:

## Option 1: Google Apps Script (Recommended)

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Emerce Contact Form Submissions"
4. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)

### Step 2: Set up Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Replace the default code with the code from `scripts/google-apps-script.js`
4. Replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID
5. Save the project

### Step 3: Deploy as Web App
1. Click "Deploy" > "New deployment"
2. Choose "Web app" as the type
3. Set execute as "Me"
4. Set access to "Anyone"
5. Click "Deploy"
6. Copy the Web App URL

### Step 4: Update Contact Action
1. In `app/actions/contact.ts`, uncomment the Google Sheets section
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` with your Web App URL
3. Comment out the mock implementation

## Option 2: Formspree (Easier Alternative)

### Step 1: Sign up for Formspree
1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy your form endpoint URL

### Step 2: Connect to Google Sheets
1. In Formspree dashboard, go to your form settings
2. Add Google Sheets integration
3. Connect your Google account
4. Select your spreadsheet

### Step 3: Update Contact Action
1. In `app/actions/contact.ts`, uncomment the Formspree section
2. Replace `YOUR_FORM_ID` with your Formspree form ID
3. Comment out the mock implementation

## Testing
- The current mock implementation will show success messages
- Check browser console to see logged form data
- Once you implement either option, test with real submissions
