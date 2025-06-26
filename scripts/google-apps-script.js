// Google Apps Script code to deploy as a web app
// This should be deployed in Google Apps Script and the URL should replace YOUR_SCRIPT_ID in the contact action

function doPost(e) {
  try {
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents)

    // Open the Google Sheet (replace with your sheet ID)
    const sheet = SpreadsheetApp.openById("YOUR_GOOGLE_SHEET_ID").getActiveSheet()

    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([["Name", "Email", "Phone", "Message", "Date & Time", "Timestamp"]])
    }

    // Add the new row with form data
    sheet.appendRow([data.name, data.email, data.phone, data.message, data.dateTime, data.timestamp])

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() })).setMimeType(
      ContentService.MimeType.JSON,
    )
  }
}

// Allow CORS for web requests
function doOptions(e) {
  return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.TEXT).setHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type",
  })
}
