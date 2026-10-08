/**
 * Solution Section Component - End-to-End Connected Journey Pipeline
 */
export function renderSolutionSection() {
  return `
    <section class="section solution-section" id="solution">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">The DigitalOPD Solution</div>
          <h2 class="section-title">One Connected Journey From Marketing to OPD</h2>
          <p class="section-subtitle">DigitalOPD connects the patient acquisition journey so hospitals can engage, nurture and move patient enquiries toward consultation.</p>
        </div>

        <div class="solution-flow-box" id="journey-flow">
          <div class="flow-header">
            <span class="flow-title">The End-to-End Hospital Patient Acquisition Pipeline</span>
            <div class="flow-badges">
              <span class="tag-pill">AI Automation</span>
              <span class="tag-pill">Human Counselling</span>
              <span class="tag-pill">OPD Scheduling</span>
            </div>
          </div>

          <div class="flow-pipeline-track">
            <div class="pipeline-card">
              <div class="card-num">01</div>
              <div class="card-icon-wrapper blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3>MARKETING</h3>
              <p>Meta, Google & local campaigns generate patient interest.</p>
            </div>

            <div class="pipeline-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>

            <div class="pipeline-card">
              <div class="card-num">02</div>
              <div class="card-icon-wrapper cyan">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <h3>LEADS</h3>
              <p>Instant capture into single unified patient journey repository.</p>
            </div>

            <div class="pipeline-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>

            <div class="pipeline-card">
              <div class="card-num">03</div>
              <div class="card-icon-wrapper purple">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3>AI CALLING</h3>
              <p>Immediate automated calling, qualification & query answering.</p>
            </div>

            <div class="pipeline-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>

            <div class="pipeline-card">
              <div class="card-num">04</div>
              <div class="card-icon-wrapper teal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3>NURTURING</h3>
              <p>Automated reminders, treatment details & trust-building info.</p>
            </div>

            <div class="pipeline-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>

            <div class="pipeline-card">
              <div class="card-num">05</div>
              <div class="card-icon-wrapper indigo">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>COUNSELLING</h3>
              <p>Seamless handoff to human hospital counsellors when required.</p>
            </div>

            <div class="pipeline-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>

            <div class="pipeline-card active-card">
              <div class="card-num">06</div>
              <div class="card-icon-wrapper emerald">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/></svg>
              </div>
              <h3>OPD</h3>
              <p>Scheduled OPD consultation slot confirmed with patient.</p>
            </div>

            <div class="pipeline-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>

            <div class="pipeline-card">
              <div class="card-num">07</div>
              <div class="card-icon-wrapper blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-2v-2h2zm0-4h-2V7h2z"/></svg>
              </div>
              <h3>DOCTOR</h3>
              <p>Patient visits hospital & meets specialist for consultation.</p>
            </div>

            <div class="pipeline-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>

            <div class="pipeline-card">
              <div class="card-num">08</div>
              <div class="card-icon-wrapper rose">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3>TREATMENT</h3>
              <p>Recommended diagnostic tests or procedure initiated.</p>
            </div>

            <div class="pipeline-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>

            <div class="pipeline-card">
              <div class="card-num">09</div>
              <div class="card-icon-wrapper teal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
              </div>
              <h3>FOLLOW-UP</h3>
              <p>Post-consultation follow-up, feedback & re-visit management.</p>
            </div>
          </div>

          <!-- Doctor & Patient Online Meet Call Visual Showcase -->
          <div class="solution-online-meet-banner" style="margin-top: 2.5rem; border-radius: var(--radius-xl); border: 1px solid rgba(0, 163, 224, 0.35); box-shadow: var(--shadow-card); background: #FFFFFF; overflow: hidden; padding: 1rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem; padding: 0.25rem 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
              <div class="nordic-pill-badge light-pill" style="margin-bottom: 0;">
                <span class="live-dot-teal"></span>
                <span class="badge-txt">LIVE TELE-HEALTH & ONLINE OPD CONSULTATION MEET</span>
              </div>
              <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-cyan);">Direct Digital Patient-Doctor Connection</span>
            </div>
            
            <div style="border-radius: var(--radius-lg); overflow: hidden; border: 1px solid #E2E8F0; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06); width: 100%; aspect-ratio: 16 / 9;">
              <img src="/doctor-patient-online-meet.jpg" alt="Doctor and patient having online video meet consultation" style="width: 100%; height: 100%; aspect-ratio: 16 / 9; object-fit: cover; display: block;" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
