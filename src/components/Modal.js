/**
 * Modal Component for Book a Demo popup
 */
export function renderModal() {
  return `
    <div class="modal-overlay" id="demoModal">
      <div class="modal-card">
        <button class="modal-close" id="closeModalBtn" aria-label="Close modal">&times;</button>
        <div class="modal-header">
          <span class="modal-tag">DigitalOPD Demo</span>
          <h3>Book a DigitalOPD Demo</h3>
          <p>Schedule a live 1-on-1 walkthrough with a hospital patient acquisition strategist.</p>
        </div>

        <form id="modalDemoForm" class="modal-form">
          <div class="form-group">
            <label for="mFullName">Full Name *</label>
            <input type="text" id="mFullName" placeholder="e.g. Dr. Rajesh Kumar" required>
          </div>
          <div class="form-group">
            <label for="mHospitalName">Hospital Name *</label>
            <input type="text" id="mHospitalName" placeholder="Apollo Multi-Specialty Hospital" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="mWorkEmail">Work Email *</label>
              <input type="email" id="mWorkEmail" placeholder="doctor@hospital.com" required>
            </div>
            <div class="form-group">
              <label for="mPhone">Phone Number *</label>
              <input type="tel" id="mPhone" placeholder="+91 98765 43210" required>
            </div>
          </div>
          <div class="form-group">
            <label for="mCity">City *</label>
            <input type="text" id="mCity" placeholder="Mumbai / Delhi / Gurgaon" required>
          </div>
          <button type="submit" class="btn btn-primary btn-full">
            <span>Submit Demo Request</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </form>

        <div class="modal-success" id="modalSuccessState">
          <div class="success-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3>Request Received!</h3>
          <p>Your details have been recorded. Our healthcare growth advisor will contact you within 24 hours to arrange your customized DigitalOPD demo.</p>
          <button class="btn btn-secondary btn-full" id="closeModalSuccess">Close</button>
        </div>
      </div>
    </div>
  `;
}
