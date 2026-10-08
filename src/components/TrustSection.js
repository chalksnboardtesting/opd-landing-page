/**
 * Trust & Security Section Component
 */
export function renderTrustSection() {
  return `
    <section class="section trust-section" id="trust">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">Enterprise Standards</div>
          <h2 class="section-title">Built for Healthcare. Designed for Trust.</h2>
          <p class="section-subtitle">We prioritize data security, patient privacy consent, and auditable communication workflows.</p>
        </div>

        <div class="trust-cards-grid">
          <div class="trust-card">
            <div class="trust-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
            <h4>Secure Communication</h4>
            <p>Encrypted data transit for all patient enquiry records and communication touchpoints.</p>
          </div>

          <div class="trust-card">
            <div class="trust-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <h4>Controlled Access</h4>
            <p>Role-based access controls for hospital administrators, marketing leads, and counsellors.</p>
          </div>

          <div class="trust-card">
            <div class="trust-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
            <h4>Data Protection</h4>
            <p>Adherence to healthcare privacy principles and secure lead storage protocols.</p>
          </div>

          <div class="trust-card">
            <div class="trust-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
            <h4>Patient Consent</h4>
            <p>Explicit consent verification during AI and counsellor communication interactions.</p>
          </div>

          <div class="trust-card">
            <div class="trust-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><circle cx="11" cy="14" r="3"/><line x1="13.2" y1="16.2" x2="16" y2="19"/></svg></div>
            <h4>Auditability</h4>
            <p>Transparent communication logs for complete operational review and quality control.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
