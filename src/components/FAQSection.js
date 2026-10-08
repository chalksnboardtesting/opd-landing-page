/**
 * FAQ Section Component
 */
export function renderFAQSection() {
  return `
    <section class="section faq-section" id="faq">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">Common Questions</div>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">Everything you need to know about DigitalOPD patient acquisition technology.</p>
        </div>

        <div class="faq-accordion">
          <div class="faq-item active">
            <button class="faq-question">
              <span>What is DigitalOPD?</span>
              <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>DigitalOPD is a healthcare patient acquisition and OPD conversion technology platform. It helps hospitals capture marketing enquiries, engage them instantly using AI communication, nurture leads through structured workflows, and convert qualified inquiries into scheduled OPD consultations.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>How does DigitalOPD help hospitals generate patient enquiries?</span>
              <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>DigitalOPD connects directly with your hospital's digital marketing campaigns (Meta Ads, Google Ads, website landing forms, and local campaigns) to ensure every single enquiry is captured into a unified pipeline without any lead drop-off.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>How does AI calling help hospitals?</span>
              <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>AI calling reaches out to patient enquiries in under 30 seconds. It answers basic non-clinical queries regarding doctor availability, hospital location, and consultation hours, verifying patient intent so your team only spends time on high-converting OPD appointments.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Does DigitalOPD replace hospital counsellors?</span>
              <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>No. DigitalOPD empowers hospital counsellors by handling repetitive initial outreach and qualification automatically. When a patient requires high-touch guidance or has complex treatment questions, DigitalOPD seamlessly transfers the context-rich lead to human counsellors.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Can DigitalOPD work with existing hospital systems?</span>
              <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p>Yes. DigitalOPD is designed to integrate cleanly into existing hospital marketing workflows, front desk procedures, and counselling channels with zero disruption to daily clinical operations.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Does DigitalOPD make medical or clinical decisions?</span>
              <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer">
              <p><strong>No.</strong> DigitalOPD supports communication, engagement, qualification and administrative workflows. Clinical diagnosis and treatment decisions remain strictly with qualified healthcare professionals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
