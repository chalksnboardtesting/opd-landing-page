/**
 * Medical Tourism Section Component - High-Impact Market Intelligence, Trends & Visual Hub
 * Based on latest October 2026 Global Healthcare Overview Data
 */

export function renderMedicalTourismSection() {
  return `
    <section class="section medical-tourism-section" id="medical-tourism">
      <!-- Ambient Glow Orbs -->
      <div class="ambient-orb orb-cyan" style="top: 10%; right: -5%;"></div>
      <div class="ambient-orb orb-rose" style="bottom: 15%; left: -5%;"></div>

      <div class="container relative-z">
        <!-- Section Header -->
        <div class="section-header text-center">
          <div class="section-tag glow-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
            Global Market Intelligence • October 2026 Overview
          </div>
          <h2 class="section-title">
            Medical Tourism: <span class="gradient-text-cyan">Market, Trends & Key Destinations</span>
          </h2>
          <p class="section-subtitle">
            Exploring the multi-billion dollar global patient movement. Patients travel internationally to cut costs by 50–85%, avoid long waiting lists, and access specialized world-class medical procedures.
          </p>
        </div>

        <!-- Visual Hero Showcase Banner -->
        <div class="tourism-hero-card">
          <div class="tourism-hero-grid">
            <div class="tourism-hero-content">
              <span class="badge-pill-cyan mb-3">GLOBAL PATIENT ACQUISITION</span>
              <h3>Capturing International Patient Demand for Modern Hospitals</h3>
              <p>
                With over <strong>17.3 million international patient trips</strong> annually and an average spend of <strong>$4,400 per trip</strong>, global health travel is experiencing double-digit CAGR growth. 
              </p>
              
              <div class="key-metrics-pills">
                <div class="metric-mini-box">
                  <span class="metric-num gradient-text-cyan">17.3M</span>
                  <span class="metric-lbl">Annual Patient Trips</span>
                </div>
                <div class="metric-mini-box">
                  <span class="metric-num gradient-text-rose">$4,400</span>
                  <span class="metric-lbl">Avg Spend / Trip</span>
                </div>
                <div class="metric-mini-box">
                  <span class="metric-num gradient-text-emerald">50-85%</span>
                  <span class="metric-lbl">Procedure Savings</span>
                </div>
                <div class="metric-mini-box">
                  <span class="metric-num gradient-text-cyan">69%</span>
                  <span class="metric-lbl">Private Sector Share</span>
                </div>
              </div>

              <div class="hero-forms-categories">
                <div class="form-type-pill"><span class="dot-inbound"></span> <strong>Inbound:</strong> Foreign patients visiting for surgery</div>
                <div class="form-type-pill"><span class="dot-outbound"></span> <strong>Outbound:</strong> Residents traveling abroad for treatment</div>
                <div class="form-type-pill"><span class="dot-domestic"></span> <strong>Domestic:</strong> Inter-state specialized care travel</div>
              </div>
            </div>

            <div class="tourism-hero-image-wrapper">
              <img src="/medical-tourism-hero.jpg" alt="Global Medical Tourism Center" class="tourism-hero-img" />
              <div class="floating-img-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C4B4" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <div>
                  <strong>High Growth Market</strong>
                  <span>Forecast up to $258.3 Billion</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 1. Market Size & Growth Forecast Section -->
        <div class="tourism-sub-block mt-5">
          <div class="block-header-title text-center mb-4">
            <span class="sub-tag">2025 Baseline & Future Projections</span>
            <h3>Global Market Size & Forecasted Growth (CAGR)</h3>
            <p>Industry research reports confirm double-digit annual growth driven by global patient mobility.</p>
          </div>

          <div class="market-reports-grid">
            <div class="report-card">
              <div class="report-source">Mordor Intelligence (Apr 2026)</div>
              <div class="report-value-group">
                <div class="baseline-val">$93.7B <span>(2025)</span></div>
                <div class="arrow-grow">➜</div>
                <div class="forecast-val">$258.3B <span>(by 2031)</span></div>
              </div>
              <div class="cagr-badge gradient-bg-cyan">
                <span>Implied CAGR</span> <strong>18.4%</strong>
              </div>
            </div>

            <div class="report-card highlight-card">
              <div class="report-source">Fortune Business Insights (Jul 2026)</div>
              <div class="report-value-group">
                <div class="baseline-val">$38.2B <span>(2025)</span></div>
                <div class="arrow-grow">➜</div>
                <div class="forecast-val">$250.0B <span>(by 2034)</span></div>
              </div>
              <div class="cagr-badge gradient-bg-rose">
                <span>Implied CAGR</span> <strong>23.3%</strong>
              </div>
            </div>

            <div class="report-card">
              <div class="report-source">Ken Research (Jul 2026)</div>
              <div class="report-value-group">
                <div class="baseline-val">$76.0B <span>(2025)</span></div>
                <div class="arrow-grow">➜</div>
                <div class="forecast-val">$144.0B <span>(by 2031)</span></div>
              </div>
              <div class="cagr-badge gradient-bg-emerald">
                <span>Implied CAGR</span> <strong>11.2%</strong>
              </div>
            </div>

            <div class="report-card">
              <div class="report-source">Grand View Research Style</div>
              <div class="report-value-group">
                <div class="baseline-val">$34.0B <span>(2025)</span></div>
                <div class="arrow-grow">➜</div>
                <div class="forecast-val">$126.2B <span>(by 2035)</span></div>
              </div>
              <div class="cagr-badge gradient-bg-indigo">
                <span>Implied CAGR</span> <strong>14.1%</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Why Patients Travel (6 Core Motivators) -->
        <div class="tourism-sub-block mt-5">
          <div class="block-header-title text-center mb-4">
            <span class="sub-tag">Patient Motivations</span>
            <h3>6 Primary Reasons Patients Seek Healthcare Abroad</h3>
          </div>

          <div class="motivators-grid">
            <div class="motivator-card">
              <div class="motivator-icon-box bg-rose-light">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5E7E" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h4>1. Substantial Cost Savings</h4>
              <p>Savings of <strong>50% to 80%</strong> are commonly achieved for major elective surgeries and dental care, even after accounting for international airfare & luxury accommodation.</p>
            </div>

            <div class="motivator-card">
              <div class="motivator-icon-box bg-cyan-light">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A3E0" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4>2. Shorter Waiting Times</h4>
              <p>Patients living in countries with public health systems avoid long waiting lists of 6 to 18 months by scheduling immediate elective surgery abroad.</p>
            </div>

            <div class="motivator-card">
              <div class="motivator-icon-box bg-teal-light">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C4B4" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h4>3. Specialised Medical Expertise</h4>
              <p>Direct access to world-renowned specialists in complex cardiac procedures, advanced oncology, IVF fertility, and intricate reconstructive surgery.</p>
            </div>

            <div class="motivator-card">
              <div class="motivator-icon-box bg-emerald-light">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>4. Accreditation & Technology</h4>
              <p>Leading private international hospitals feature JCI accreditation, state-of-the-art robotic surgical suites, and advanced diagnostic imagery.</p>
            </div>

            <div class="motivator-card">
              <div class="motivator-icon-box bg-purple-light">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2"><path d="M17.5 19.5 22 15l-4.5-4.5"/><path d="M2 12h20"/></svg>
              </div>
              <h4>5. Combining Care & Recovery</h4>
              <p>Destinations such as Thailand and Turkey package clinical treatments alongside premium resort recovery stays for peace of mind.</p>
            </div>

            <div class="motivator-card">
              <div class="motivator-icon-box bg-indigo-light">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>6. Employer & Insurance Alignment</h4>
              <p>Global employers and insurance providers are increasingly incorporating cross-border healthcare into corporate cost-management strategies.</p>
            </div>
          </div>
        </div>

        <!-- 3. Key Destinations Visual Infographic & Detailed Matrix -->
        <div class="tourism-sub-block mt-5">
          <div class="block-header-title text-center mb-4">
            <span class="sub-tag">Top Global Medical Hubs</span>
            <h3>Key Destinations & Indicative Cost Savings</h3>
            <p>Comparing surgical specialties and indicative savings vs Western / US baseline prices.</p>
          </div>

          <!-- Feature 3D Infographic Visual -->
          <div class="destinations-infographic-card mb-4">
            <img src="/medical-destinations-visual.jpg" alt="Medical Tourism Key Destinations 3D Map Visual" class="destinations-visual-img" />
            <div class="infographic-overlay-tag">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Global Medical Hub Comparison Matrix
            </div>
          </div>

          <!-- Destinations Cards Grid -->
          <div class="destinations-cards-grid">
            <div class="dest-card">
              <div class="dest-header">
                <span class="dest-flag">🇹🇭</span>
                <div>
                  <h4>Thailand</h4>
                  <span class="dest-stats">2M+ Foreign Patients / Year</span>
                </div>
                <div class="savings-pill glow-cyan">50% – 70% Savings</div>
              </div>
              <p class="dest-desc">Known for cosmetic & orthopaedic surgery, full dental packages, and luxury medical wellness recovery resorts.</p>
              <div class="dest-tags">
                <span class="mini-tag">Cosmetic</span>
                <span class="mini-tag">Dental</span>
                <span class="mini-tag">Orthopaedics</span>
                <span class="mini-tag">Wellness</span>
              </div>
            </div>

            <div class="dest-card highlight-dest">
              <div class="dest-header">
                <span class="dest-flag">🇮🇳</span>
                <div>
                  <h4>India</h4>
                  <span class="dest-stats">Highest Cost Savings Hub</span>
                </div>
                <div class="savings-pill glow-rose">65% – 85% Savings</div>
              </div>
              <p class="dest-desc">Renowned for high-complexity surgeries including adult & pediatric cardiac care, organ transplants, and advanced oncology.</p>
              <div class="dest-tags">
                <span class="mini-tag">Cardiac Surgery</span>
                <span class="mini-tag">Organ Transplants</span>
                <span class="mini-tag">Oncology</span>
              </div>
            </div>

            <div class="dest-card">
              <div class="dest-header">
                <span class="dest-flag">🇹🇷</span>
                <div>
                  <h4>Turkey</h4>
                  <span class="dest-stats">Bridge Between Europe & ME</span>
                </div>
                <div class="savings-pill glow-emerald">50% – 75% Savings</div>
              </div>
              <p class="dest-desc">World leader in hair transplantation, cosmetic surgery, dental care, and specialized gastroenterology.</p>
              <div class="dest-tags">
                <span class="mini-tag">Hair Transplants</span>
                <span class="mini-tag">Aesthetics</span>
                <span class="mini-tag">Dental</span>
              </div>
            </div>

            <div class="dest-card">
              <div class="dest-header">
                <span class="dest-flag">🇲🇽</span>
                <div>
                  <h4>Mexico</h4>
                  <span class="dest-stats">Top Hub for US & Canada Patients</span>
                </div>
                <div class="savings-pill glow-purple">40% – 65% Savings</div>
              </div>
              <p class="dest-desc">Highly accessible destination for North American patients seeking bariatric surgery, dental implants, and orthopaedics.</p>
              <div class="dest-tags">
                <span class="mini-tag">Bariatric</span>
                <span class="mini-tag">Dental</span>
                <span class="mini-tag">Orthopaedics</span>
              </div>
            </div>

            <div class="dest-card">
              <div class="dest-header">
                <span class="dest-flag">🇰🇷</span>
                <div>
                  <h4>South Korea</h4>
                  <span class="dest-stats">Record 2.01M Patients in 2025</span>
                </div>
                <div class="savings-pill glow-blue">30% – 60% Savings</div>
              </div>
              <p class="dest-desc">Global capital for advanced aesthetic & reconstructive surgery, cutting-edge oncology, and neurology.</p>
              <div class="dest-tags">
                <span class="mini-tag">Reconstructive</span>
                <span class="mini-tag">Oncology</span>
                <span class="mini-tag">Neurology</span>
              </div>
            </div>

            <div class="dest-card">
              <div class="dest-header">
                <span class="dest-flag">🇸🇬</span>
                <div>
                  <h4>Singapore</h4>
                  <span class="dest-stats">Premium Ultra-Specialty Care</span>
                </div>
                <div class="savings-pill">Minimal Savings</div>
              </div>
              <p class="dest-desc">Attracts international patients seeking elite specialty cancer care and complex clinical trials rather than discount pricing.</p>
              <div class="dest-tags">
                <span class="mini-tag">Cancer Care</span>
                <span class="mini-tag">Complex Trials</span>
              </div>
            </div>
          </div>

          <!-- Additional Notable Hubs Banner -->
          <div class="emerging-hubs-banner mt-4">
            <div class="hub-item">
              <strong>🇦🇪 🇸🇦 Gulf States (UAE & Saudi Arabia):</strong> Emerging regional hubs with institutions like Cleveland Clinic Abu Dhabi & King Salman Medical City in Riyadh.
            </div>
            <div class="hub-divider"></div>
            <div class="hub-item">
              <strong>🇵🇱 🇭🇺 🇨🇿 Eastern Europe (Poland, Hungary, Czechia):</strong> Major European hubs for high-quality dental rehabilitation and cosmetic procedures.
            </div>
          </div>
        </div>

        <!-- 4. Popular Treatment Categories -->
        <div class="tourism-sub-block mt-5">
          <div class="block-header-title text-center mb-4">
            <span class="sub-tag">Medical Demand</span>
            <h3>Most Requested Medical Travel Categories</h3>
          </div>

          <div class="treatment-categories-grid">
            <div class="treatment-pill-card">
              <span class="treatment-icon">🦷</span>
              <div class="treatment-info">
                <h5>Dental Care</h5>
                <span>Implants, crowns, full-mouth restoration</span>
              </div>
            </div>

            <div class="treatment-pill-card">
              <span class="treatment-icon">💄</span>
              <div class="treatment-info">
                <h5>Cosmetic & Plastic Surgery</h5>
                <span>Aesthetic & reconstructive procedures</span>
              </div>
            </div>

            <div class="treatment-pill-card">
              <span class="treatment-icon">🦴</span>
              <div class="treatment-info">
                <h5>Orthopaedics</h5>
                <span>Knee/hip replacement & spine surgeries</span>
              </div>
            </div>

            <div class="treatment-pill-card">
              <span class="treatment-icon">🫀</span>
              <div class="treatment-info">
                <h5>Cardiac Procedures</h5>
                <span>Bypass, valve repair & angioplasty</span>
              </div>
            </div>

            <div class="treatment-pill-card">
              <span class="treatment-icon">🎗️</span>
              <div class="treatment-info">
                <h5>Oncology</h5>
                <span>Advanced chemotherapy, radiation & immunotherapy</span>
              </div>
            </div>

            <div class="treatment-pill-card">
              <span class="treatment-icon">👶</span>
              <div class="treatment-info">
                <h5>Fertility & IVF</h5>
                <span>In-vitro fertilization & egg freezing</span>
              </div>
            </div>

            <div class="treatment-pill-card">
              <span class="treatment-icon">⚖️</span>
              <div class="treatment-info">
                <h5>Bariatric Surgery</h5>
                <span>Gastric sleeve & weight-loss surgery</span>
              </div>
            </div>

            <div class="treatment-pill-card">
              <span class="treatment-icon">🫁</span>
              <div class="treatment-info">
                <h5>Organ Transplants</h5>
                <span>Kidney, liver & specialized transplants</span>
              </div>
            </div>

            <div class="treatment-pill-card">
              <span class="treatment-icon">🌿</span>
              <div class="treatment-info">
                <h5>Wellness & Alternative Medicine</h5>
                <span>Holistic recovery & longevity therapies</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. Key Industry Trends & Analytics Dashboard Visual -->
        <div class="tourism-sub-block mt-5">
          <div class="block-header-title text-center mb-4">
            <span class="sub-tag">Industry Dynamics</span>
            <h3>Key Market Trends Shaping Medical Travel</h3>
          </div>

          <div class="trends-dashboard-wrapper">
            <div class="trends-visual-side">
              <img src="/medical-growth-analytics.jpg" alt="Medical Tourism Trends Analytics Dashboard" class="trends-visual-img" />
              <div class="visual-caption">
                <span class="dot-live"></span> Live Digital Patient Acquisition & Analytics Dashboard
              </div>
            </div>

            <div class="trends-list-side">
              <div class="trend-item-box">
                <div class="trend-num">01</div>
                <div>
                  <h5>Post-Pandemic Specialty Growth</h5>
                  <p>Travel volumes have fully rebounded, shifting towards digitally coordinated, specialty-led clinical care.</p>
                </div>
              </div>

              <div class="trend-item-box">
                <div class="trend-num">02</div>
                <div>
                  <h5>Rise of Online Facilitator Platforms</h5>
                  <p>Digital travel-style platforms connect international patients directly with hospital OPDs, quotes, and travel logistics.</p>
                </div>
              </div>

              <div class="trend-item-box">
                <div class="trend-num">03</div>
                <div>
                  <h5>Proactive Government Support</h5>
                  <p>Countries are streamlining fast-track medical visas, healthcare marketing, and foreign hospital partnerships.</p>
                </div>
              </div>

              <div class="trend-item-box">
                <div class="trend-num">04</div>
                <div>
                  <h5>Medical Financing & Digital Payments</h5>
                  <p>Fintech providers and payment gateways are creating cross-border medical installment options.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 6. Risks, Challenges & DigitalOPD Handoff Solution -->
        <div class="tourism-sub-block mt-5">
          <div class="risk-solution-container">
            <div class="risk-card-side">
              <h4 class="risk-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5E7E" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Key Industry Challenges
              </h4>
              <ul class="risk-list">
                <li><strong>Complications & Follow-up Care:</strong> Responsibility after returning home.</li>
                <li><strong>Quality & Credential Variation:</strong> Verifying hospital standards.</li>
                <li><strong>Cross-Border Legal Recourse:</strong> Complex malpractice recourse.</li>
                <li><strong>Language & Cultural Barriers:</strong> Communication for informed consent.</li>
                <li><strong>Hidden Package Costs:</strong> Unquoted extra stays or companion costs.</li>
              </ul>
            </div>

            <div class="digitalopd-solution-side">
              <span class="badge-pill-teal">HOW DIGITALOPD EMPOWERS HOSPITALS</span>
              <h3>Turn International Patient Enquiries Into OPD Consultations</h3>
              <p>
                DigitalOPD gives hospitals the AI-powered infrastructure to capture cross-border leads, answer multi-lingual medical queries 24/7, provide transparent cost quotes, and hand off qualified international cases seamlessly to hospital counsellors.
              </p>

              <div class="cta-actions-row">
                <button class="btn btn-primary cyan-gradient-btn open-demo-modal shadow-hover">
                  <span>Schedule Medical Tourism Demo</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
