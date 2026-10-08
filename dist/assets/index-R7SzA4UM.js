(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function m(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(e){if(e.ep)return;e.ep=!0;const a=m(e);fetch(e.href,a)}})();function k(){return`
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
  `}function x(){return`
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
            <div class="video-container-wrapper ratio-16-9" style="position: relative; width: 100%; aspect-ratio: 16 / 9; overflow: hidden; background: #0A1931; border-radius: var(--radius-xl); box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/vP45yi220gU?rel=0" 
                title="DigitalOPD Patient-Doctor Connection Demo" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: var(--radius-xl);"
              ></iframe>
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
  `}function D(){return`
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
  `}function C(){return`
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
  `}function q(){return`
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
  `}function M(){return`
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
  `}function B(){return`
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
  `}function P(){return`
    <section class="final-cta-section" id="contact">
      <div class="cta-glow"></div>
      <div class="container text-center">
        <div class="nordic-pill-badge light-pill mx-auto mb-4">
          <span class="badge-txt">START CONVERTING MARKETING INTO APPOINTMENTS</span>
        </div>
        <h2 class="final-title">Turn More Hospital Enquiries Into OPD Consultations</h2>
        <p class="final-subtitle">Build a connected patient acquisition journey with DigitalOPD today. Request a private demo with our healthcare growth specialists.</p>

        <div class="final-btn-group">
          <button class="btn btn-primary btn-large cyan-gradient-btn open-demo-modal shadow-hover" id="finalCtaBtn">
            <span>Book a Demo</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a href="#" class="logo-group mb-3">
            <img src="/logo.png" alt="DigitalOPD Logo" class="footer-logo-image" />
          </a>
          <p class="brand-tagline">Connected Digital Hospital — Turning Marketing Into OPD Appointments.</p>
          <div class="footer-copy">© 2026 DigitalOPD. All rights reserved.</div>
        </div>

        <div class="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a href="#journey">Patient Journey</a></li>
            <li><a href="#solution">Connected Solution</a></li>
            <li><a href="#ai-calling">AI Communication</a></li>
            <li><a href="#opd-conversion">OPD Conversion</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>How It Works</h4>
          <ul>
            <li><a href="#features">Hospital Marketing</a></li>
            <li><a href="#features">Enquiry Capture</a></li>
            <li><a href="#features">Human Counselling</a></li>
            <li><a href="#features">Follow-Up Workflows</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#why-us">Multi-Specialty Hospitals</a></li>
            <li><a href="#why-us">Specialty Hospitals</a></li>
            <li><a href="#why-us">Hospital Groups</a></li>
            <li><a href="#why-us">Healthcare Networks</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Legal & Trust</h4>
          <ul>
            <li><a href="#trust">Privacy Policy</a></li>
            <li><a href="#trust">Terms of Service</a></li>
            <li><a href="#trust">Data Protection</a></li>
            <li><a href="#trust">Security & Audit</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `}function E(){return`
    <div class="modal-overlay" id="demoModal">
      <div class="modal-card">
        <button class="modal-close" id="closeModalBtn" aria-label="Close modal">&times;</button>
        <div class="modal-header">
          <span class="modal-tag">DigitalOPD Demo</span>
          <h3>Book a DigitalOPD Demo</h3>
          <p>Schedule a live 1-on-1 walkthrough with a hospital patient acquisition strategist.</p>
        </div>

        <form id="modalDemoForm" class="modal-form">
          <div class="form-group">
            <label for="mFullName">Full Name *</label>
            <input type="text" id="mFullName" placeholder="e.g. Dr. Rajesh Kumar" required>
          </div>
          <div class="form-group">
            <label for="mHospitalName">Hospital Name *</label>
            <input type="text" id="mHospitalName" placeholder="Apollo Multi-Specialty Hospital" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="mWorkEmail">Work Email *</label>
              <input type="email" id="mWorkEmail" placeholder="doctor@hospital.com" required>
            </div>
            <div class="form-group">
              <label for="mPhone">Phone Number *</label>
              <input type="tel" id="mPhone" placeholder="+91 98765 43210" required>
            </div>
          </div>
          <div class="form-group">
            <label for="mCity">City *</label>
            <input type="text" id="mCity" placeholder="Mumbai / Delhi / Gurgaon" required>
          </div>
          <button type="submit" class="btn btn-primary btn-full">
            <span>Submit Demo Request</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </form>

        <div class="modal-success" id="modalSuccessState">
          <div class="success-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3>Request Received!</h3>
          <p>Your details have been recorded. Our healthcare growth advisor will contact you within 24 hours to arrange your customized DigitalOPD demo.</p>
          <button class="btn btn-secondary btn-full" id="closeModalSuccess">Close</button>
        </div>
      </div>
    </div>
  `}const O="https://script.google.com/macros/s/AKfycbxTn822zKFkTXr1XR_8WeT4HeVN-BUJbP_IebTlmEECRRrS_yRCchQhu0HRLz-PWYGNpg/exec";async function b(r){try{const i=await fetch(O,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});return{success:!0}}catch(i){return console.error("Error submitting lead to Google Sheet:",i),{success:!1,error:i.message}}}function S(){document.getElementById("header-root").innerHTML=k(),document.getElementById("hero-root").innerHTML=x(),document.getElementById("solution-root").innerHTML=D(),document.getElementById("ai-calling-root").innerHTML=C(),document.getElementById("features-root").innerHTML=q(),document.getElementById("why-us-root").innerHTML=M(),document.getElementById("faq-root").innerHTML=B(),document.getElementById("footer-root").innerHTML=P(),document.getElementById("modal-root").innerHTML=E()}function I(){const r=document.querySelectorAll(".faq-item");r.forEach(t=>{const s=t.querySelector(".faq-question");s&&s.addEventListener("click",()=>{const o=t.classList.contains("active");r.forEach(l=>l.classList.remove("active")),o||t.classList.add("active")})});const i=document.getElementById("demoModal"),m=document.querySelectorAll(".open-demo-modal"),d=document.getElementById("closeModalBtn"),e=document.getElementById("closeModalSuccess"),a=()=>{i&&(i.classList.add("active"),document.body.style.overflow="hidden")},n=()=>{i&&(i.classList.remove("active"),document.body.style.overflow="",setTimeout(()=>{const t=document.getElementById("modalDemoForm"),s=document.getElementById("modalSuccessState");t&&(t.style.display="flex"),s&&s.classList.remove("active")},300))};m.forEach(t=>t.addEventListener("click",a)),d&&d.addEventListener("click",n),e&&e.addEventListener("click",n),i&&i.addEventListener("click",t=>{t.target===i&&n()});const u=document.getElementById("heroLeadForm"),f=document.getElementById("heroFormSuccess");u&&u.addEventListener("submit",async t=>{var l,c,p,v,h,y;t.preventDefault();const s={fullName:((l=document.getElementById("hFullName"))==null?void 0:l.value)||"",hospitalName:((c=document.getElementById("hHospitalName"))==null?void 0:c.value)||"",hospitalType:((p=document.getElementById("hHospitalType"))==null?void 0:p.value)||"",city:((v=document.getElementById("hCity"))==null?void 0:v.value)||"",phoneNumber:((h=document.getElementById("hPhone"))==null?void 0:h.value)||"",workEmail:((y=document.getElementById("hEmail"))==null?void 0:y.value)||"",source:"DigitalOPD Hero Form"},o=u.querySelector('button[type="submit"]');o&&(o.disabled=!0,o.querySelector("span").innerText="Submitting..."),await b(s),window.fbq&&window.fbq("track","Lead"),u.style.display="none",f&&(f.style.display="flex")});const g=document.getElementById("modalDemoForm"),w=document.getElementById("modalSuccessState");g&&g.addEventListener("submit",async t=>{var l,c,p,v,h;t.preventDefault();const s={fullName:((l=document.getElementById("mFullName"))==null?void 0:l.value)||"",hospitalName:((c=document.getElementById("mHospitalName"))==null?void 0:c.value)||"",workEmail:((p=document.getElementById("mWorkEmail"))==null?void 0:p.value)||"",phoneNumber:((v=document.getElementById("mPhone"))==null?void 0:v.value)||"",city:((h=document.getElementById("mCity"))==null?void 0:h.value)||"",hospitalType:"Demo Request",source:"DigitalOPD Modal Form"},o=g.querySelector('button[type="submit"]');o&&(o.disabled=!0,o.querySelector("span").innerText="Submitting..."),await b(s),window.fbq&&window.fbq("track","Lead"),g.style.display="none",w&&w.classList.add("active")})}document.addEventListener("DOMContentLoaded",()=>{S(),I()});
