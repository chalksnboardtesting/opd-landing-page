/**
 * Journey Section Component - Step-by-Step 9 Milestone Timeline
 */
export function renderJourneySection() {
  return `
    <section class="section journey-section" id="journey">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">Step-by-Step Experience</div>
          <h2 class="section-title">From Click to Consultation</h2>
          <p class="section-subtitle">How DigitalOPD guides every potential patient seamlessly through 9 structured milestones.</p>
        </div>

        <div class="timeline-container">
          <div class="timeline-grid">
            <div class="timeline-step">
              <div class="step-circle">1</div>
              <div class="step-content">
                <h4>Patient discovers hospital</h4>
                <p>Sees digital ad, social post, or search result for specialty care.</p>
              </div>
            </div>

            <div class="timeline-step">
              <div class="step-circle">2</div>
              <div class="step-content">
                <h4>Patient submits enquiry</h4>
                <p>Fills form or requests callback regarding consultation.</p>
              </div>
            </div>

            <div class="timeline-step">
              <div class="step-circle">3</div>
              <div class="step-content">
                <h4>DigitalOPD captures enquiry</h4>
                <p>Instant unification into hospital lead pipeline within seconds.</p>
              </div>
            </div>

            <div class="timeline-step">
              <div class="step-circle">4</div>
              <div class="step-content">
                <h4>AI engages the patient</h4>
                <p>Automated voice/chat engagement to verify intent & availability.</p>
              </div>
            </div>

            <div class="timeline-step">
              <div class="step-circle">5</div>
              <div class="step-content">
                <h4>Lead is nurtured</h4>
                <p>Sends doctor profiles, hospital credentials & location details.</p>
              </div>
            </div>

            <div class="timeline-step">
              <div class="step-circle">6</div>
              <div class="step-content">
                <h4>Counsellor engages when needed</h4>
                <p>Human counsellor steps in for high-value specialty discussions.</p>
              </div>
            </div>

            <div class="timeline-step">
              <div class="step-circle">7</div>
              <div class="step-content">
                <h4>OPD is scheduled</h4>
                <p>Confirmed appointment slot allocated for chosen doctor.</p>
              </div>
            </div>

            <div class="timeline-step">
              <div class="step-circle">8</div>
              <div class="step-content">
                <h4>Patient meets doctor</h4>
                <p>Physical OPD consultation & clinical diagnosis completed.</p>
              </div>
            </div>

            <div class="timeline-step highlight-step">
              <div class="step-circle font-bold">9</div>
              <div class="step-content">
                <h4>Follow-up continues</h4>
                <p>Post-consultation check-in & repeat visit reminders scheduled.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
