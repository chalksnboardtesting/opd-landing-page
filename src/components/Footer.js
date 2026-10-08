/**
 * Footer Component - Redesigned to match Poppins typography and theme
 */
export function renderFooter() {
  return `
    <section class="final-cta-section" id="contact">
      <div class="cta-glow"></div>
      <div class="container text-center">
        <div class="nordic-pill-badge light-pill mx-auto mb-4">
          <span class="badge-txt">START CONVERTING MARKETING INTO APPOINTMENTS</span>
        </div>
        <h2 class="final-title">Turn More Hospital Enquiries Into OPD Consultations</h2>
        <p class="final-subtitle">Build a connected patient acquisition journey with DigitalOPD today. Request a private demo with our healthcare growth specialists.</p>

        <div class="final-btn-group">
          <button class="btn btn-primary btn-large cyan-gradient-btn open-demo-modal shadow-hover" id="finalCtaBtn">
            <span>Book a Demo</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a href="#" class="logo-group mb-3">
            <img src="/logo.png" alt="DigitalOPD Logo" class="footer-logo-image" />
          </a>
          <p class="brand-tagline">Connected Digital Hospital — Turning Marketing Into OPD Appointments.</p>
          <div class="footer-copy">© 2026 DigitalOPD. All rights reserved.</div>
        </div>

        <div class="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a href="#journey">Patient Journey</a></li>
            <li><a href="#solution">Connected Solution</a></li>
            <li><a href="#ai-calling">AI Communication</a></li>
            <li><a href="#opd-conversion">OPD Conversion</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>How It Works</h4>
          <ul>
            <li><a href="#features">Hospital Marketing</a></li>
            <li><a href="#features">Enquiry Capture</a></li>
            <li><a href="#features">Human Counselling</a></li>
            <li><a href="#features">Follow-Up Workflows</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#why-us">Multi-Specialty Hospitals</a></li>
            <li><a href="#why-us">Specialty Hospitals</a></li>
            <li><a href="#why-us">Hospital Groups</a></li>
            <li><a href="#why-us">Healthcare Networks</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Legal & Trust</h4>
          <ul>
            <li><a href="#trust">Privacy Policy</a></li>
            <li><a href="#trust">Terms of Service</a></li>
            <li><a href="#trust">Data Protection</a></li>
            <li><a href="#trust">Security & Audit</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `;
}
