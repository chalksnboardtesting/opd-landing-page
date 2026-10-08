/**
 * Service to handle form submission to Google Sheets via Google Apps Script
 */

// Deployed Google Apps Script Web App URL:
export const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxTn822zKFkTXr1XR_8WeT4HeVN-BUJbP_IebTlmEECRRrS_yRCchQhu0HRLz-PWYGNpg/exec";

export async function submitLeadToGoogleSheet(formData) {
  try {
    const response = await fetch(GOOGLE_SHEET_WEBAPP_URL, {
      method: "POST",
      mode: "no-cors", // Google Apps Script Web App requires no-cors mode for cross-domain POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting lead to Google Sheet:", error);
    return { success: false, error: error.message };
  }
}
