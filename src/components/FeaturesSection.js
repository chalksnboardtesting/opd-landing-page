/**
 * Features Section Component - 6 Visual Capability Cards
 */
export function renderFeaturesSection() {
  return `
    <section class="section features-section" id="features">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">Key Capabilities</div>
          <h2 class="section-title">How DigitalOPD Drives Hospital Patient Growth</h2>
          <p class="section-subtitle">A comprehensive suite of tools designed specifically for hospital administrators, marketing teams, and counsellors.</p>
        </div>

        <div class="features-grid">
          <!-- Card 1 -->
          <div class="feature-card">
            <div class="card-head">
              <div class="feature-icon bg-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              <span class="card-badge">Step 1</span>
            </div>
            <h3>Hospital Marketing</h3>
            <p>Reach potential patients through digital campaigns, treatment promotion, doctor promotion and healthcare content.</p>
            <div class="card-mini-mockup">
              <div class="mock-tag">Campaign Focus: Orthopedics & Cardiology</div>
              <div class="mock-bar"><div class="mock-fill" style="width: 82%;"></div></div>
              <div class="mock-meta"><span>Active Ads: 12</span> <span>Reach: 45.2k</span></div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="feature-card">
            <div class="card-head">
              <div class="feature-icon bg-cyan">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
              </div>
              <span class="card-badge">Step 2</span>
            </div>
            <h3>Capture Every Enquiry</h3>
            <p>Bring patient enquiries into a connected lead journey with zero lead leakage or missed form submissions.</p>
            <div class="card-mini-mockup">
              <div class="mock-lead-item">
                <div class="lead-avatar">AV</div>
                <div class="lead-info">
                  <span class="name">Anand Verma</span>
                  <span class="dept">Neuro Consultation • 2m ago</span>
                </div>
                <span class="status-pill green">Captured</span>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="feature-card">
            <div class="card-head">
              <div class="feature-icon bg-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
              </div>
              <span class="card-badge">Step 3</span>
            </div>
            <h3>AI-Powered Engagement</h3>
            <p>Use AI communication to engage and nurture patient enquiries instantly around the clock, answering FAQs and verifying interest.</p>
            <div class="card-mini-mockup">
              <div class="ai-call-mini">
                <div class="wave-lines">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
                <span class="ai-txt">AI calling lead: "Hello Amit, regarding your Knee Pain enquiry..."</span>
              </div>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="feature-card">
            <div class="card-head">
              <div class="feature-icon bg-teal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <span class="card-badge">Step 4</span>
            </div>
            <h3>Human Counselling</h3>
            <p>Move relevant, high-intent conversations to human hospital counsellors when complex queries or empathy is required.</p>
            <div class="card-mini-mockup">
              <div class="counsel-transfer">
                <span class="badge-sm">AI ➔ Senior Counsellor</span>
                <span class="txt">Context Synced: Patient prefers morning slot.</span>
              </div>
            </div>
          </div>

          <!-- Card 5 -->
          <div class="feature-card">
            <div class="card-head">
              <div class="feature-icon bg-emerald">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/></svg>
              </div>
              <span class="card-badge">Step 5</span>
            </div>
            <h3>OPD Conversion</h3>
            <p>Move qualified patient enquiries directly into scheduled OPD appointments with clear doctor allocations.</p>
            <div class="card-mini-mockup">
              <div class="opd-slot-mini">
                <span class="doc-title">Dr. S. Sharma (Oncology)</span>
                <span class="slot-badge">Wed, 10:00 AM • OPD Token #08</span>
              </div>
            </div>
          </div>

          <!-- Card 6 -->
          <div class="feature-card">
            <div class="card-head">
              <div class="feature-icon bg-indigo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
              </div>
              <span class="card-badge">Step 6</span>
            </div>
            <h3>Follow-Up</h3>
            <p>Continue communication after consultation and treatment to ensure post-care satisfaction and follow-up consultation retention.</p>
            <div class="card-mini-mockup">
              <div class="followup-mini">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Automated Day-3 Post-OPD Check-in Sent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
