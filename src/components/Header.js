/**
 * Header Component - Sleek floating pill navbar with logo, live status & Demo CTA
 */
export function renderHeader() {
  return `
    <header class="navbar floating-header" id="navbar">
      <div class="container header-inner">
        <a href="#" class="logo-group" aria-label="DigitalOPD Home">
          <img src="/logo.png" alt="DigitalOPD Logo" class="header-logo-image" />
          <div class="brand-sub-badge">
            <span class="live-dot-teal"></span>
            <span class="sub-txt">CONNECTED HOSPITAL</span>
          </div>
        </a>

        <div class="header-right-actions">
          <div class="header-trust-pill desktop-only">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A3E0" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Enterprise B2B Technology</span>
          </div>
          <button class="btn btn-sm cyan-gradient-btn open-demo-modal shadow-hover">
            <span>Book a Demo</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </header>
  `;
}
