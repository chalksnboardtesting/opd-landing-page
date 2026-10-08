/**
 * Hero Component - Light Clinical Theme matching reference branding
 */
export function renderHero() {
  return `
    <section class="hero-section hero-light-theme" id="hero">
      <div class="hero-bg-mesh"></div>
      
      <!-- Ambient Gradient Background Orbs -->
      <div class="ambient-orb orb-cyan" style="top: -5%; left: -10%;"></div>
      <div class="ambient-orb orb-rose" style="bottom: 10%; right: -5%;"></div>
      <div class="ambient-orb orb-purple" style="top: 40%; left: 30%;"></div>
      
      <div class="container hero-grid-split" style="position: relative; z-index: 1;">
        <!-- Hero Left Column -->
        <div class="hero-left-content">
          <div class="nordic-pill-badge light-pill">
            <span class="nordic-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            </span>
            <span class="badge-txt">Enterprise Healthcare Acquisition • Purpose-Built For Hospitals</span>
          </div>

          <h1 class="hero-title-main light-title">
            Turn Hospital Marketing Into <br/>
            <span class="gradient-text-cyan">OPD</span> <span class="gradient-text-rose">Appointments.</span>
          </h1>

          <p class="hero-description light-desc">
            DigitalOPD helps hospitals generate patient enquiries, nurture them with AI and human engagement, and move them seamlessly toward scheduled OPD consultations.
          </p>

          <!-- Video / Interactive Visual Showcase Card (16:9 Aspect Ratio) -->
          <div class="hero-video-card light-video-card">
            <div class="video-thumbnail-container light-thumb ratio-16-9" style="background: url('/doctor-consultation-hero.jpg') center/cover no-repeat;">
              <div class="video-overlay-gradient" style="background: linear-gradient(180deg, rgba(10, 25, 49, 0.45) 0%, rgba(10, 25, 49, 0.75) 100%);"></div>
              
              <!-- Video Badge Branding -->
              <div class="video-top-brand" style="position: relative; z-index: 2;">
                <div class="brand-mini-badge light-brand-badge">
                  <span class="pulse-dot"></span>
                  <span>DigitalOPD Patient-Doctor Connection Demo</span>
                </div>
              </div>

              <!-- Play Button Center -->
              <button class="video-play-btn open-demo-modal" aria-label="Play Demo Video" style="position: relative; z-index: 2;">
                <div class="play-icon-circle cyan-play-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <span class="play-label light-play-lbl">Watch Digital Consultation Flow</span>
              </button>

              <!-- Video Feature Tags at Bottom -->
              <div class="video-bottom-tags" style="position: relative; z-index: 2;">
                <div class="v-tag light-vtag">⚡ Voice AI Callback &lt; 30s</div>
                <div class="v-tag light-vtag">🩺 OPD Attribution</div>
                <div class="v-tag light-vtag">📈 +42% Consultations</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Hero Right Column: Embedded Lead Capture Card -->
        <div class="hero-right-form-wrapper">
          <div class="hero-form-card light-form-card">
            <div class="form-card-header">
              <h2>Book a Hospital Demo</h2>
              <p>Fill out the form below and our healthcare growth strategist will contact you.</p>
            </div>

            <form id="heroLeadForm" class="embedded-hero-form">
              <div class="form-group">
                <label for="hFullName">Full Name <span class="req">*</span></label>
                <input type="text" id="hFullName" placeholder="Enter full name" required>
              </div>

              <div class="form-row-2col">
                <div class="form-group">
                  <label for="hHospitalName">Hospital Name <span class="req">*</span></label>
                  <input type="text" id="hHospitalName" placeholder="Hospital name" required>
                </div>
                <div class="form-group">
                  <label for="hHospitalType">Hospital Type <span class="req">*</span></label>
                  <select id="hHospitalType" required>
                    <option value="Multi-Specialty Hospital">Multi-Specialty Hospital</option>
                    <option value="Specialty Hospital">Specialty Hospital</option>
                    <option value="Hospital Group">Hospital Group</option>
                    <option value="Clinic / Polyclinic">Clinic / Polyclinic</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div class="form-row-2col">
                <div class="form-group">
                  <label for="hCity">City <span class="req">*</span></label>
                  <input type="text" id="hCity" placeholder="e.g. Gurgaon / Mumbai" required>
                </div>
                <div class="form-group">
                  <label for="hPhone">Phone Number <span class="req">*</span></label>
                  <input type="tel" id="hPhone" placeholder="10-digit mobile number" required>
                </div>
              </div>

              <div class="form-group">
                <label for="hEmail">Work Email Address <span class="req">*</span></label>
                <input type="email" id="hEmail" placeholder="e.g. director@hospital.com" required>
              </div>

              <button type="submit" class="btn btn-primary btn-full btn-large cyan-gradient-btn">
                <span>Request a Demo</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>

            <div class="hero-form-success" id="heroFormSuccess">
              <div class="success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3>Demo Request Submitted!</h3>
              <p>Your details have been saved to your Google Sheet. A DigitalOPD specialist will reach out shortly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
