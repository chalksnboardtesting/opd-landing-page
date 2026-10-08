/**
 * OPD Conversion Section Component
 */
export function renderOPDConversionSection() {
  return `
    <section class="section opd-section" id="opd-conversion">
      <div class="container">
        <div class="opd-grid">
          <div class="opd-visual-col">
            <div class="appointment-card-mockup">
              <div class="appointment-header">
                <div class="dept-badge">CARDIOLOGY</div>
                <span class="status-badge-confirmed">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  Appointment Confirmed
                </span>
              </div>

              <div class="doctor-profile-row">
                <div class="doctor-avatar">DM</div>
                <div class="doctor-details">
                  <h3>Dr. Mehta</h3>
                  <p>Senior Consultant • Interventional Cardiology</p>
                  <span class="hosp-tag">City Heart & Super-Specialty Hospital</span>
                </div>
              </div>

              <div class="appointment-details-grid">
                <div class="detail-box">
                  <span class="lbl">Consultation Type</span>
                  <span class="val">Physical OPD</span>
                </div>
                <div class="detail-box">
                  <span class="lbl">Date</span>
                  <span class="val highlight">18 May</span>
                </div>
                <div class="detail-box">
                  <span class="lbl">Time</span>
                  <span class="val highlight">10:30 AM</span>
                </div>
                <div class="detail-box">
                  <span class="lbl">OPD Token #</span>
                  <span class="val">#14</span>
                </div>
              </div>

              <div class="appointment-footer">
                <div class="sms-status">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span>SMS & WhatsApp Confirmation Sent to Patient</span>
                </div>
              </div>
            </div>
          </div>

          <div class="opd-text-col">
            <div class="section-tag emerald-tag">OPD Conversion Focus</div>
            <h2>Turn Qualified Enquiries Into OPD Appointments</h2>
            <p>DigitalOPD bridges the gap between marketing inquiries and real doctor consultations. By keeping patients engaged and giving them effortless scheduling touchpoints, hospitals maximize OPD slot utilization.</p>

            <ul class="opd-benefit-list">
              <li>
                <div class="list-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
                <div>
                  <strong>Direct Specialty Slot Booking</strong>
                  <span>Map patient inquiries directly to doctor availability schedules.</span>
                </div>
              </li>
              <li>
                <div class="list-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
                <div>
                  <strong>Automated Appointment Reminders</strong>
                  <span>Reduce OPD no-show rates with timely SMS & WhatsApp alerts.</span>
                </div>
              </li>
              <li>
                <div class="list-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
                <div>
                  <strong>Complete Attribution Tracking</strong>
                  <span>Know exactly which marketing campaign generated which doctor consultation.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}
