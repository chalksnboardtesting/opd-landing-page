/**
 * AI Calling Section Component
 */
export function renderAICallingSection() {
  return `
    <section class="section ai-calling-section" id="ai-calling">
      <div class="container">
        <div class="ai-showcase-grid">
          <div class="ai-text-col">
            <div class="section-tag purple-tag">AI Communication Engine</div>
            <h2>Every Enquiry Deserves a Response</h2>
            <p>DigitalOPD helps hospitals engage patient enquiries immediately through AI-powered communication and systematic follow-up. No lead is left waiting, even outside hospital working hours.</p>

            <div class="ai-feature-list">
              <div class="ai-feat">
                <div class="feat-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                <div>
                  <strong>Sub-30 Second Response Time</strong>
                  <span>Reaches out to new enquiries before patient interest dissipates.</span>
                </div>
              </div>
              <div class="ai-feat">
                <div class="feat-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                <div>
                  <strong>Pre-Consultation Qualification</strong>
                  <span>Verifies specialty interest, preferred timing, and basic consultation readiness.</span>
                </div>
              </div>
            </div>

            <!-- Operational Boundary Disclaimer -->
            <div class="disclaimer-card">
              <div class="disclaimer-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              </div>
              <div class="disclaimer-text">
                <strong>Strict Operational Boundary:</strong>
                <span>DigitalOPD AI is strictly used for communication, qualification, engagement, and administrative workflows. Clinical diagnosis and treatment decisions remain exclusively with qualified healthcare professionals.</span>
              </div>
            </div>
          </div>

          <!-- Static AI Call Mockup & Image Showcase -->
          <div class="ai-visual-col">
            <!-- Doctor Patient Digital Connection Showcase Image -->
            <div class="ai-image-banner" style="border-radius: var(--radius-xl); overflow: hidden; margin-bottom: 1.25rem; border: 1px solid rgba(0, 163, 224, 0.3); box-shadow: var(--shadow-card); position: relative;">
              <img src="/doctor-patient-connection.jpg" alt="Doctor and patient connecting digitally on hospital platform" style="width: 100%; height: 210px; object-fit: cover; display: block;" />
              <div class="image-overlay-badge" style="position: absolute; bottom: 12px; left: 12px; right: 12px; background: rgba(10, 25, 49, 0.85); backdrop-filter: blur(10px); padding: 0.5rem 0.9rem; border-radius: var(--radius-md); border: 1px solid rgba(255, 255, 255, 0.2); display: flex; align-items: center; gap: 0.6rem; color: #FFFFFF; font-size: 0.78rem; font-weight: 600;">
                <span class="live-dot-teal"></span>
                <span>Real-Time OPD Schedule & Patient Consultation Handoff</span>
              </div>
            </div>

            <div class="ai-mockup-card">
              <div class="ai-card-header">
                <div class="ai-avatar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                </div>
                <div class="ai-call-meta">
                  <div class="ai-name">AI Assistant</div>
                  <div class="ai-status">Calling Patient...</div>
                </div>
                <span class="live-pill">LIVE VOICE CALL</span>
              </div>

              <div class="ai-audio-waveform">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>

              <div class="ai-data-fields">
                <div class="data-row">
                  <span class="lbl">Patient Interest:</span>
                  <span class="val font-semibold">Cardiology Consultation</span>
                </div>
                <div class="data-row">
                  <span class="lbl">Conversation Status:</span>
                  <span class="val badge-status green">Interested</span>
                </div>
                <div class="data-row">
                  <span class="lbl">Next Action:</span>
                  <span class="val badge-action blue">OPD Follow-up</span>
                </div>
              </div>

              <div class="ai-transcript-preview">
                <div class="chat-bubble ai">
                  <span class="speaker">AI Assistant:</span> "Good morning Mr. Patel. I am calling from City Hospital regarding your Cardiology OPD enquiry. Are you looking to schedule a consultation with Dr. Mehta this week?"
                </div>
                <div class="chat-bubble patient">
                  <span class="speaker">Patient:</span> "Yes, I need an appointment for Thursday morning if possible."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
