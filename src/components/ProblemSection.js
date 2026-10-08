/**
 * Problem Section Component
 */
export function renderProblemSection() {
  return `
    <section class="section problem-section" id="problem">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag warning">The Hospital Growth Challenge</div>
          <h2 class="section-title">Your Hospital Is Generating Enquiries. Are You Converting Them?</h2>
          <p class="section-subtitle">Hospitals spend millions on patient acquisition marketing, yet a massive percentage of patient enquiries fall through the cracks due to delayed responses and un-nurtured touchpoints.</p>
        </div>

        <div class="leakage-flow-card">
          <div class="leak-step">
            <div class="leak-number">01</div>
            <div class="leak-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
            <h4>Marketing Spend</h4>
            <p>Digital ads & healthcare marketing bring initial patient interest.</p>
          </div>

          <div class="leak-arrow">➔</div>

          <div class="leak-step">
            <div class="leak-number">02</div>
            <div class="leak-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
            <h4>Patient Enquiries</h4>
            <p>Form fills, website leads, and phone call queries come in.</p>
          </div>

          <div class="leak-arrow warning">➔</div>

          <div class="leak-step alert-step">
            <div class="leak-number">03</div>
            <div class="leak-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.68 13.31a16 16 0 0 0 3.41 3.41l2.36-2.36a1 1 0 0 1 1.05-.24 11.4 11.4 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.07l-2.14 2.14z"/><line x1="1" y1="1" x2="23" y2="23"/></svg></div>
            <h4>Missed Calls</h4>
            <p>Front desk overload leads to unanswered enquiries during peak hours.</p>
          </div>

          <div class="leak-arrow warning">➔</div>

          <div class="leak-step alert-step">
            <div class="leak-number">04</div>
            <div class="leak-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <h4>Delayed Follow-ups</h4>
            <p>Slow manual follow-ups cause patient interest to cool down rapidly.</p>
          </div>

          <div class="leak-arrow danger">➔</div>

          <div class="leak-step alert-step danger">
            <div class="leak-number">05</div>
            <div class="leak-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg></div>
            <h4>Unqualified Leads</h4>
            <p>Lack of systematic nurturing leaves leads un-categorized.</p>
          </div>

          <div class="leak-arrow danger">➔</div>

          <div class="leak-step danger-final">
            <div class="leak-number">06</div>
            <div class="leak-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg></div>
            <h4>Lost OPD Opportunity</h4>
            <p>Patients choose competitor hospitals with faster response times.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
