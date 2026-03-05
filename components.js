// ==============================================
//  SP DRIVING SCHOOL V2 — components.js
//  Shared: Logo SVG, Nav, Footer, Mobile CTA
// ==============================================

const PHONE = "08055385572";
const WA_NUM = "918055385572";
const WA_MSG = encodeURIComponent("Hi! I want to book a free trial lesson at SP Driving School.");
const ADDRESS = "Prasun Savoy Corner, Dhanori Road, Vishrantwadi, Pune – 411015";

const LOGO_SVG = `<img src="logo-new.jpg" alt="SP Driving School" style="height:58px;max-width:260px;object-fit:contain;" />`;

const NAV_ITEMS = [
  { label: "Home",     href: "index.html"   },
  { label: "Courses",  href: "courses.html" },
  { label: "Gallery",  href: "gallery.html" },
  { label: "About",    href: "about.html"   },
  { label: "Contact",  href: "contact.html" },
];

// ── Detect active page ─────────────────────────
function getActivePage() {
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';
  return file;
}

// ── Inject Navigation ──────────────────────────
function injectNav() {
  const active = getActivePage();
  const links = NAV_ITEMS.map(item => {
    const isActive = active === item.href || (active === '' && item.href === 'index.html');
    return `<li><a href="${item.href}" class="${isActive ? 'active' : ''}">${item.label}</a></li>`;
  }).join('');

  const mobileLinks = NAV_ITEMS.map(item => {
    const isActive = active === item.href || (active === '' && item.href === 'index.html');
    return `<a href="${item.href}" class="${isActive ? 'active' : ''}">${item.label}</a>`;
  }).join('');

  const navHTML = `
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="logo-wrap">
        ${LOGO_SVG}

      </a>
      <ul class="nav-links">${links}</ul>
      <div class="nav-right">
        <a href="tel:${PHONE}" class="nav-cta">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 12 19.79 19.79 0 011 3.18 2 2 0 013 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
          080553 85572
        </a>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
  <div class="trust-bar">
    <div class="trust-inner">
      <div class="trust-item"><span>★</span><span><strong>4.9/5</strong> Google</span></div>
      <div class="trust-sep">|</div>
      <div class="trust-item"><span>🏆</span><span><strong>434+</strong> Reviews</span></div>
      <div class="trust-sep">|</div>
      <div class="trust-item"><span>🎓</span><span>Govt. <strong>A-Grade</strong> Certified</span></div>
      <div class="trust-sep">|</div>
      <div class="trust-item"><span>📍</span><span>Dhanori & Vishrantwadi's <strong>Top Rated</strong></span></div>
    </div>
  </div>
  <div class="mobile-nav" id="mobileNav">
    ${mobileLinks}
    <a href="https://wa.me/${WA_NUM}?text=${WA_MSG}" class="m-cta" target="_blank">📲 WhatsApp Us</a>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Hamburger toggle
  document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('mobileNav').classList.toggle('open');
  });
  // Close on link click
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('hamburger').classList.remove('open');
      document.getElementById('mobileNav').classList.remove('open');
    });
  });
}

// ── Inject Footer ─────────────────────────────
function injectFooter() {
  const footerHTML = `
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand-col">
        <div style="display:flex;align-items:center;gap:.7rem;margin-bottom:.3rem;">
          ${LOGO_SVG}
          <div>
            <div class="footer-name">SP DRIVING SCHOOL</div>
            <div class="footer-tagline">Learn to fly…!</div>
          </div>
        </div>
        <p>Pune's most trusted driving school. Personalised 1-on-1 coaching with 12+ years of experience. Ghat road specialist.</p>
        <div class="footer-cert">🏅 All Gujarat Institute Certified · Maruti Suzuki</div>
        <div class="footer-social">
          <a href="https://www.instagram.com/schoolspdriving" target="_blank" class="social-btn social-ig">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Instagram
          </a>
          <a href="https://www.youtube.com/@spdrivingtrainingschool" target="_blank" class="social-btn social-yt">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YouTube
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <a href="index.html">Home</a>
        <a href="courses.html">Our Courses</a>
        <a href="gallery.html">Gallery</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Programs</h4>
        <a href="courses.html">Learner's Course</a>
        <a href="courses.html">Advanced Course</a>
        <a href="courses.html">Extended Sessions</a>
        <a href="courses.html">Night Sessions</a>
        <a href="courses.html">Weekend Batches</a>
        <a href="courses.html">Ghat Road Training</a>
      </div>
      <div class="footer-col">
        <h4>Contact Us</h4>
        <div class="footer-contact-item">
          <span class="icon">📍</span>
          <div><div class="label">Address</div><div class="val">${ADDRESS}</div></div>
        </div>
        <div class="footer-contact-item">
          <span class="icon">📞</span>
          <div><div class="label">Phone</div><div class="val"><a href="tel:${PHONE}">080553 85572</a></div></div>
        </div>
        <div class="footer-contact-item">
          <span class="icon">⏰</span>
          <div><div class="label">Hours</div><div class="val">Mon–Sat: 6AM–8PM<br/>Sunday: Appointment</div></div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 SP Driving Training School, Pune. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="contact.html">Contact</a>
        <a href="about.html">About</a>
        <a href="courses.html">Courses</a>
        <a href="sp-admin-panel.html" style="opacity:.2;font-size:.72rem;letter-spacing:.04em;" title="Admin">⚙</a>
        <a href="gallery-manager.html" style="opacity:.45;font-size:.72rem;font-weight:700;letter-spacing:.04em;color:var(--orange);" title="Gallery Manager">🖼 Gallery Manager</a>
      </div>
    </div>
  </footer>

  <!-- Mobile CTA Bar -->
  <div class="mobile-cta-bar">
    <a href="tel:${PHONE}" class="mobile-cta-call">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 12 19.79 19.79 0 011 3.18 2 2 0 013 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
      Call School
    </a>
    <a href="https://wa.me/${WA_NUM}?text=${WA_MSG}" class="mobile-cta-whatsapp" target="_blank">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      WhatsApp Us
    </a>
  </div>

  <!-- Floating WhatsApp (desktop) -->
  <a href="https://wa.me/${WA_NUM}?text=${WA_MSG}" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  </a>`;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// ── Scroll Animations ─────────────────────────
function initScrollAnimations() {
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Stagger within parent
        const siblings = Array.from(entry.target.parentElement.children)
          .filter(el => el.classList.contains('fade-in'));
        const index = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 90);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  fadeEls.forEach(el => observer.observe(el));

  // Fire hero immediately
  setTimeout(() => {
    document.querySelectorAll('.hero .fade-in').forEach(el => el.classList.add('visible'));
  }, 100);
}

// ── Navbar Scroll Shadow ───────────────────────
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── FAQ ────────────────────────────────────────
function toggleFaq(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ── Smooth Scroll ─────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 130;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── Counter Animation ─────────────────────────
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const step = target / (1500 / 16);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + suffix;
  }, 16);
}

function initCounters() {
  const strip = document.querySelector('.stats-strip');
  if (!strip) return;
  let done = false;
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !done) {
      done = true;
      strip.querySelectorAll('.stat-big').forEach(el => {
        const t = el.textContent;
        if (t.startsWith('350')) animateCounter(el, 434, '+');
        else if (t.startsWith('100')) animateCounter(el, 100, '%');
        else if (t.startsWith('12')) animateCounter(el, 12, '+');
      });
    }
  }, { threshold: 0.5 });
  obs.observe(strip);
}

// ── Gallery Tabs ───────────────────────────────
function initGalleryTabs() {
  const tabs = document.querySelectorAll('.gallery-tab');
  const panels = document.querySelectorAll('.gallery-panel');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
}

// ── INIT ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
  initNavbar();
  initScrollAnimations();
  initSmoothScroll();
  initCounters();
  initGalleryTabs();
});
