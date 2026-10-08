/**
 * Why Us Section Component
 */
export function renderWhyUsSection() {
  return `
    <section class="section why-section" id="why-us">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">Key Benefits</div>
          <h2 class="section-title">Why Hospitals Choose DigitalOPD</h2>
          <p class="section-subtitle">Designed specifically to scale hospital patient volume while improving care communication.</p>
        </div>

        <div class="why-grid">
          <div class="why-card">
            <div class="why-icon blue"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
            <h3>Faster Response</h3>
            <p>Engage patient enquiries quickly before they reach out to rival hospitals.</p>
          </div>

          <div class="why-card">
            <div class="why-icon cyan"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
            <h3>Better Lead Nurturing</h3>
            <p>Keep patient conversations moving with structured information and gentle follow-ups.</p>
          </div>

          <div class="why-card">
            <div class="why-icon purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></div>
            <h3>Connected Patient Journey</h3>
            <p>Connect marketing campaigns, communication, counsellors, and OPD visits into one flow.</p>
          </div>

          <div class="why-card">
            <div class="why-icon teal"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div>
            <h3>Better Visibility</h3>
            <p>Understand which marketing channels produce high-conversion OPD consults.</p>
          </div>

          <div class="why-card">
            <div class="why-icon emerald"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <h3>AI + Human Engagement</h3>
            <p>Combine sub-minute automation with human counselling for high-touch specialties.</p>
          </div>

          <div class="why-card">
            <div class="why-icon indigo"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg></div>
            <h3>Follow-Up</h3>
            <p>Continue patient engagement beyond the first interaction for long-term health retention.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
