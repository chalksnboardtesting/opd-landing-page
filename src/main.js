// ==========================================================================
// DigitalOPD Main Application Entry & Component Loader
// ==========================================================================

import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderSolutionSection } from './components/SolutionSection.js';
import { renderAICallingSection } from './components/AICallingSection.js';
import { renderFeaturesSection } from './components/FeaturesSection.js';
import { renderMedicalTourismSection } from './components/MedicalTourismSection.js';
import { renderWhyUsSection } from './components/WhyUsSection.js';
import { renderFAQSection } from './components/FAQSection.js';
import { renderFooter } from './components/Footer.js';
import { renderModal } from './components/Modal.js';

import { submitLeadToGoogleSheet } from './utils/googleSheetService.js';

// Render Modular Components into DOM Root Elements
function mountComponents() {
  document.getElementById('header-root').innerHTML = renderHeader();
  document.getElementById('hero-root').innerHTML = renderHero();
  document.getElementById('solution-root').innerHTML = renderSolutionSection();
  document.getElementById('ai-calling-root').innerHTML = renderAICallingSection();
  document.getElementById('features-root').innerHTML = renderFeaturesSection();
  document.getElementById('medical-tourism-root').innerHTML = renderMedicalTourismSection();
  document.getElementById('why-us-root').innerHTML = renderWhyUsSection();
  document.getElementById('faq-root').innerHTML = renderFAQSection();
  document.getElementById('footer-root').innerHTML = renderFooter();
  document.getElementById('modal-root').innerHTML = renderModal();
}

// Bind Interactions & Event Listeners
function bindInteractions() {
  // 1. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  // 2. Modal Handlers
  const modal = document.getElementById('demoModal');
  const openModalBtns = document.querySelectorAll('.open-demo-modal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const closeModalSuccessBtn = document.getElementById('closeModalSuccess');

  const openModal = () => {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => {
        const modalForm = document.getElementById('modalDemoForm');
        const modalSuccess = document.getElementById('modalSuccessState');
        if (modalForm) modalForm.style.display = 'flex';
        if (modalSuccess) modalSuccess.classList.remove('active');
      }, 300);
    }
  };

  openModalBtns.forEach(btn => btn.addEventListener('click', openModal));
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (closeModalSuccessBtn) closeModalSuccessBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // 3. Embedded Hero Lead Form Submission -> Google Sheet Integration
  const heroForm = document.getElementById('heroLeadForm');
  const heroSuccess = document.getElementById('heroFormSuccess');

  if (heroForm) {
    heroForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const payload = {
        fullName: document.getElementById('hFullName')?.value || '',
        hospitalName: document.getElementById('hHospitalName')?.value || '',
        hospitalType: document.getElementById('hHospitalType')?.value || '',
        city: document.getElementById('hCity')?.value || '',
        phoneNumber: document.getElementById('hPhone')?.value || '',
        workEmail: document.getElementById('hEmail')?.value || '',
        source: 'DigitalOPD Hero Form'
      };

      const submitBtn = heroForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.querySelector('span').innerText = 'Submitting...';
      }

      await submitLeadToGoogleSheet(payload);

      if (window.fbq) {
        window.fbq('track', 'Lead');
      }

      heroForm.style.display = 'none';
      if (heroSuccess) heroSuccess.style.display = 'flex';
      
      // Redirect to thank you page
      window.location.href = '/thankyou';
    });
  }

  // 4. Modal Lead Form Submission -> Google Sheet Integration
  const modalForm = document.getElementById('modalDemoForm');
  const modalSuccess = document.getElementById('modalSuccessState');

  if (modalForm) {
    modalForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const payload = {
        fullName: document.getElementById('mFullName')?.value || '',
        hospitalName: document.getElementById('mHospitalName')?.value || '',
        workEmail: document.getElementById('mWorkEmail')?.value || '',
        phoneNumber: document.getElementById('mPhone')?.value || '',
        city: document.getElementById('mCity')?.value || '',
        hospitalType: 'Demo Request',
        source: 'DigitalOPD Modal Form'
      };

      const submitBtn = modalForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.querySelector('span').innerText = 'Submitting...';
      }

      await submitLeadToGoogleSheet(payload);

      if (window.fbq) {
        window.fbq('track', 'Lead');
      }

      modalForm.style.display = 'none';
      if (modalSuccess) modalSuccess.classList.add('active');

      // Redirect to thank you page
      window.location.href = '/thankyou';
    });
  }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  mountComponents();
  bindInteractions();
});
