/**
 * Google Apps Script for DigitalOPD Lead Capture Form
 * 
 * INSTRUCTIONS TO SET UP GOOGLE SHEETS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1gwlZTJqnKX-xKqMmgIenmkg30CK81j9WUSvnVeVZPsE/edit?gid=0#gid=0
 * 2. Click on "Extensions" -> "Apps Script" in the top menu.
 * 3. Delete any existing code in Code.gs and paste this entire code block into Code.gs.
 * 4. Click "Save" (disk icon).
 * 5. Click "Deploy" -> "New deployment".
 * 6. Click the gear icon next to "Select type" and choose "Web app".
 * 7. Set:
 *    - Description: "DigitalOPD Lead Webhook"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (CRITICAL for receiving form submissions without authentication)
 * 8. Click "Deploy", then authorize permissions if prompted.
 * 9. Copy the generated "Web App URL" (e.g. https://script.google.com/macros/s/.../exec).
 * 10. Paste the Web App URL into src/utils/googleSheetService.js in your website code.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getActiveSheet();

    // Check if header row exists, if not create headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Hospital Name",
        "Work Email",
        "Phone Number",
        "City",
        "Hospital Type",
        "Source"
      ]);
      // Format header row
      var headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0F172A");
      headerRange.setFontColor("#FFFFFF");
    }

    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }

    var timestamp = new Date();
    var fullName = data.fullName || data.name || "";
    var hospitalName = data.hospitalName || "";
    var workEmail = data.workEmail || data.email || "";
    var phoneNumber = data.phoneNumber || data.phone || "";
    var city = data.city || "";
    var hospitalType = data.hospitalType || "";
    var source = data.source || "DigitalOPD Website";

    sheet.appendRow([
      timestamp,
      fullName,
      hospitalName,
      workEmail,
      phoneNumber,
      city,
      hospitalType,
      source
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ "status": "DigitalOPD Apps Script API is active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
