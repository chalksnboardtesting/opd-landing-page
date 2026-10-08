/**
 * Audience Section Component
 */
export function renderAudienceSection() {
  return `
    <section class="section audience-section">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag">Target Audience</div>
          <h2 class="section-title">Built for Modern Healthcare Organizations</h2>
          <p class="section-subtitle">Empowering healthcare leadership and growth teams across all major facility scales.</p>
        </div>

        <div class="audience-grid">
          <div class="audience-card">
            <div class="card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4"/></svg></div>
            <h3>Multi-Specialty Hospitals</h3>
            <p>Drive OPD volume across Cardiology, Orthopedics, Neurology, Gastroenterology, and Oncology departments.</p>
          </div>

          <div class="audience-card">
            <div class="card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00F2FE" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
            <h3>Specialty Hospitals</h3>
            <p>Maximize conversions for single-specialty centers such as Eye Care, Maternity, Dental, and IVF centers.</p>
          </div>

          <div class="audience-card">
            <div class="card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
            <h3>Hospital Groups</h3>
            <p>Unify patient acquisition and lead nurturing across multi-city hospital networks.</p>
          </div>

          <div class="audience-card">
            <div class="card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></div>
            <h3>Healthcare Networks</h3>
            <p>Scale regional marketing initiatives with centralized lead tracking and counselling standards.</p>
          </div>

          <div class="audience-card">
            <div class="card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F472B6" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
            <h3>Polyclinics & Clinics</h3>
            <p>Ensure every patient call and enquiry is captured and converted into scheduled consults.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
