// Thank You Page Entry Script
document.addEventListener('DOMContentLoaded', () => {
  console.log('DigitalOPD Thank You Page Loaded Successfully');
  
  // Track Meta Pixel Lead event if available
  if (window.fbq) {
    window.fbq('track', 'Lead');
  }
});
