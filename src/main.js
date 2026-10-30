/**
 * BetaByte Labs — Main Application Logic
 * Interactive UI components, Hero Spotlight Slider, Budget Estimator,
 * Modals, Filtering, Form Validation, and Analytics telemetry.
 */

import './style.css';
import { 
  HERO_SLIDES, 
  TECHNOLOGIES, 
  SERVICES, 
  SOLUTIONS, 
  PROJECTS, 
  PROCESS_STEPS, 
  BLOG_POSTS 
} from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroSpotlight();
  initTechGrid();
  initServices();
  initSolutions();
  initProjects();
  initProcess();
  initEstimator();
  initBlog();
  initContactForm();
  initModals();
  initToasts();
});

/* ==========================================================================
   1. Header, Navigation & Mobile Drawer
   ========================================================================== */
function initHeader() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    if (mobileCloseBtn) {
      mobileCloseBtn.addEventListener('click', () => {
        closeMobileDrawer();
      });
    }

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });
  }

  function closeMobileDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  // Active section scrollspy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-nav') === sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

  // Smooth scroll dropdown shortcuts
  document.querySelectorAll('[data-service-select]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceId = btn.getAttribute('data-service-select');
      if (serviceId) {
        setTimeout(() => openServiceModal(serviceId), 400);
      }
    });
  });
}

/* ==========================================================================
   2. Hero Spotlight Feature Slider (Inspired by Reference UI Layout)
   ========================================================================== */
function initHeroSpotlight() {
  const spotlightTag = document.getElementById('spotlight-tag');
  const spotlightTitle = document.getElementById('spotlight-title');
  const spotlightDesc = document.getElementById('spotlight-desc');
  const dotsContainer = document.getElementById('spotlight-dots');
  const prevBtn = document.getElementById('spotlight-prev');
  const nextBtn = document.getElementById('spotlight-next');
  const heroSpotlightCard = document.getElementById('hero-spotlight');

  if (!spotlightTitle || !dotsContainer) return;

  let currentIndex = 0;
  let autoplayTimer = null;

  function renderSlide(index) {
    const slide = HERO_SLIDES[index];
    if (!slide) return;

    // Subtle fade transition
    spotlightTitle.style.opacity = '0';
    spotlightDesc.style.opacity = '0';

    setTimeout(() => {
      spotlightTag.textContent = slide.tag;
      spotlightTitle.textContent = slide.title;
      spotlightDesc.textContent = slide.description;
      spotlightTitle.style.opacity = '1';
      spotlightDesc.style.opacity = '1';

      // Update dots
      const dots = dotsContainer.querySelectorAll('.dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }, 150);

    currentIndex = index;
  }

  // Generate dots
  dotsContainer.innerHTML = HERO_SLIDES.map((_, i) => 
    `<button class="dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`
  ).join('');

  dotsContainer.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.target.getAttribute('data-index'), 10);
      renderSlide(idx);
      resetAutoplay();
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const prevIdx = (currentIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
      renderSlide(prevIdx);
      resetAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextIdx = (currentIndex + 1) % HERO_SLIDES.length;
      renderSlide(nextIdx);
      resetAutoplay();
    });
  }

  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      const nextIdx = (currentIndex + 1) % HERO_SLIDES.length;
      renderSlide(nextIdx);
    }, 5500);
  }

  function resetAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    startAutoplay();
  }

  if (heroSpotlightCard) {
    heroSpotlightCard.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
    heroSpotlightCard.addEventListener('mouseleave', () => startAutoplay());
  }

  startAutoplay();
}

/* ==========================================================================
   3. Trusted Technologies Grid
   ========================================================================== */
function initTechGrid() {
  const grid = document.getElementById('tech-grid');
  const filterBtns = document.querySelectorAll('#tech-filters .tech-filter-btn');
  if (!grid) return;

  function renderTech(filter = 'all') {
    const filtered = filter === 'all' 
      ? TECHNOLOGIES 
      : TECHNOLOGIES.filter(t => t.category === filter);

    grid.innerHTML = filtered.map(item => `
      <div class="tech-card" data-category="${item.category}">
        <div class="tech-card-top">
          <div class="tech-icon-holder">${item.icon}</div>
          <span class="tech-tag-pill">${item.tag}</span>
        </div>
        <h3 class="tech-card-name">${item.name}</h3>
        <p class="tech-card-desc">${item.desc}</p>
      </div>
    `).join('');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderTech(cat);
    });
  });

  renderTech('all');
}

/* ==========================================================================
   4. Services Grid & Service In-Depth Modal
   ========================================================================== */
function initServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  grid.innerHTML = SERVICES.map(service => `
    <div class="service-card" data-service-id="${service.id}">
      <div class="service-icon-box">${service.icon}</div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-short-desc">${service.shortDesc}</p>
      
      <div class="service-tags-wrap">
        ${service.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}
      </div>

      <button class="service-action-link" data-open-service="${service.id}">
        Learn More & Inquire <span>&rarr;</span>
      </button>
    </div>
  `).join('');

  grid.querySelectorAll('[data-open-service]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sId = btn.getAttribute('data-open-service');
      openServiceModal(sId);
    });
  });
}

function openServiceModal(serviceId) {
  const service = SERVICES.find(s => s.id === serviceId);
  const modal = document.getElementById('service-modal');
  const content = document.getElementById('service-modal-content');
  if (!service || !modal || !content) return;

  content.innerHTML = `
    <div class="modal-kicker">SERVICE SPECIFICATION</div>
    <div style="display:flex; align-items:center; gap:16px; margin-bottom:16px;">
      <span style="font-size:2.5rem; line-height:1;">${service.icon}</span>
      <h3 class="modal-title" style="margin-bottom:0;">${service.title}</h3>
    </div>
    
    <div class="modal-section-block">
      <h4>Overview & Strategic Value</h4>
      <p>${service.overview}</p>
    </div>

    <div class="modal-section-block">
      <h4>Business Challenges We Eliminate</h4>
      <ul>
        ${service.challenges.map(c => `<li>❌ ${c}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section-block">
      <h4>Core Capabilities & Deliverables</h4>
      <ul>
        ${service.capabilities.map(cap => `<li>⚡ <strong>${cap}</strong></li>`).join('')}
      </ul>
    </div>

    <div class="modal-section-block">
      <h4>Technologies Utilized</h4>
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:8px;">
        ${service.techStack.map(t => `<span class="service-tag" style="background:var(--color-blue-light); color:var(--color-electric-blue); font-weight:700;">${t}</span>`).join('')}
      </div>
    </div>

    <div class="modal-section-block">
      <h4>Frequently Asked Questions</h4>
      <div style="display:flex; flex-direction:column; gap:12px; margin-top:8px;">
        ${service.faqs.map(faq => `
          <div style="background:var(--bg-subtle); padding:14px; border-radius:8px; border:1px solid var(--border-subtle);">
            <strong style="color:var(--color-primary-navy); display:block; margin-bottom:4px;">${faq.q}</strong>
            <p style="font-size:0.875rem; color:var(--text-muted); margin:0;">${faq.a}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="margin-top:32px; padding-top:20px; border-top:1px solid var(--border-subtle); display:flex; gap:16px; flex-wrap:wrap;">
      <button class="btn btn-primary" id="modal-service-inquire-btn">
        Start Project for ${service.title} &rarr;
      </button>
      <button class="btn btn-outline" onclick="document.getElementById('service-modal').classList.remove('open')">Close</button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  const inquireBtn = document.getElementById('modal-service-inquire-btn');
  if (inquireBtn) {
    inquireBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      
      const serviceSelect = document.getElementById('client-service');
      if (serviceSelect) {
        serviceSelect.value = service.title;
      }
      
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

/* ==========================================================================
   5. Solutions Tabs by Business Need
   ========================================================================== */
function initSolutions() {
  const nav = document.getElementById('solutions-nav');
  const display = document.getElementById('solution-display');
  if (!nav || !display) return;

  function renderSolution(solution) {
    display.innerHTML = `
      <span class="solution-badge">${solution.badge}</span>
      <h3 class="solution-headline">${solution.headline}</h3>
      <p class="solution-desc">${solution.description}</p>
      
      <div class="solution-deliverables-title">Key Engineering Deliverables</div>
      <ul class="solution-deliverables-list">
        ${solution.deliverables.map(d => `<li>${d}</li>`).join('')}
      </ul>

      <div class="solution-value-box">
        💡 <strong>Commercial Impact:</strong> ${solution.valueProposition}
      </div>

      <div>
        <a href="#contact" class="btn btn-primary" style="padding:10px 22px;">Inquire About This Solution &rarr;</a>
      </div>
    `;
  }

  nav.innerHTML = SOLUTIONS.map((sol, index) => `
    <button class="solution-nav-btn ${index === 0 ? 'active' : ''}" data-sol-id="${sol.id}">
      <span class="solution-nav-title">${sol.title}</span>
      <span class="solution-nav-arrow">&rarr;</span>
    </button>
  `).join('');

  nav.querySelectorAll('.solution-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      nav.querySelectorAll('.solution-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const solId = btn.getAttribute('data-sol-id');
      const targetSol = SOLUTIONS.find(s => s.id === solId);
      if (targetSol) renderSolution(targetSol);
    });
  });

  renderSolution(SOLUTIONS[0]);
}

/* ==========================================================================
   6. Featured Projects Grid & Case Study Modal
   ========================================================================== */
function initProjects() {
  const grid = document.getElementById('projects-grid');
  const filters = document.querySelectorAll('#project-filters .filter-pill');
  if (!grid) return;

  function renderProjects(category = 'all') {
    const list = category === 'all' 
      ? PROJECTS 
      : PROJECTS.filter(p => p.category === category);

    grid.innerHTML = list.map(project => {
      let imageContent = '';
      if (project.isVectorPreview) {
        if (project.previewType === 'health') {
          imageContent = `
            <div class="vector-preview-health">
              <div class="sim-ui-header">
                <div class="sim-ui-title">🏥 Clinical Portal Engine</div>
                <div class="sim-ui-badge">HIPAA Encrypted</div>
              </div>
              <div class="sim-ui-grid">
                <div class="sim-metric-card">
                  <div class="sim-metric-val">50k+</div>
                  <div class="sim-metric-lbl">Active Consults</div>
                </div>
                <div class="sim-metric-card">
                  <div class="sim-metric-val">&lt;180ms</div>
                  <div class="sim-metric-lbl">P2P Latency</div>
                </div>
                <div class="sim-metric-card">
                  <div class="sim-metric-val">99.98%</div>
                  <div class="sim-metric-lbl">Audio/Video SLA</div>
                </div>
              </div>
            </div>
          `;
        } else {
          imageContent = `
            <div class="vector-preview-cloud">
              <div class="sim-ui-header">
                <div class="sim-ui-title">⚡ Microservice Orchestrator</div>
                <div class="sim-ui-badge" style="background:rgba(124,58,237,0.3); color:#C4B5FD;">Kafka Streams</div>
              </div>
              <div class="sim-ui-grid">
                <div class="sim-metric-card">
                  <div class="sim-metric-val">1.2M+</div>
                  <div class="sim-metric-lbl">Tasks / Day</div>
                </div>
                <div class="sim-metric-card">
                  <div class="sim-metric-val">-80%</div>
                  <div class="sim-metric-lbl">Manual Effort</div>
                </div>
                <div class="sim-metric-card">
                  <div class="sim-metric-val">42ms</div>
                  <div class="sim-metric-lbl">Queue Latency</div>
                </div>
              </div>
            </div>
          `;
        }
      } else {
        imageContent = `<img src="${project.image}" alt="${project.name}" class="project-img" loading="lazy" />`;
      }

      return `
        <div class="project-card" data-category="${project.category}">
          <div class="project-img-holder">
            ${imageContent}
          </div>
          <div class="project-body">
            <h3 class="project-name">${project.name}</h3>
            <div class="project-tagline">${project.tagline}</div>
            <p class="project-summary">${project.summary}</p>
            
            <div class="project-metrics-row">
              ${project.metrics.map(m => `
                <div class="metric-item">
                  <div class="metric-val">${m.value}</div>
                  <div class="metric-lbl">${m.label}</div>
                </div>
              `).join('')}
            </div>

            <div class="project-footer">
              <div class="project-tags">
                ${project.tags.map(t => `<span class="p-tag">${t}</span>`).join('')}
              </div>
              <button class="btn-case-study" data-project-id="${project.id}">
                View Case Study &rarr;
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.btn-case-study').forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.getAttribute('data-project-id');
        openCaseStudyModal(pId);
      });
    });
  }

  filters.forEach(pill => {
    pill.addEventListener('click', () => {
      filters.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-category');
      renderProjects(cat);
    });
  });

  renderProjects('all');
}

function openCaseStudyModal(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  const modal = document.getElementById('case-study-modal');
  const content = document.getElementById('case-study-content');
  if (!project || !modal || !content) return;

  content.innerHTML = `
    <div class="modal-kicker">CASE STUDY & ARCHITECTURAL TEARDOWN</div>
    <h3 class="modal-title">${project.name}</h3>
    <div class="modal-tagline">${project.tagline}</div>

    <div style="background:var(--color-primary-navy); color:#FFFFFF; border-radius:12px; padding:20px; display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; margin-bottom:28px;">
      ${project.metrics.map(m => `
        <div style="text-align:center;">
          <div style="font-size:1.6rem; font-weight:800; color:#60A5FA; font-family:var(--font-display);">${m.value}</div>
          <div style="font-size:0.75rem; color:#94A3B8; text-transform:uppercase;">${m.label}</div>
        </div>
      `).join('')}
    </div>

    ${project.image ? `<img src="${project.image}" alt="${project.name}" class="modal-banner-img" />` : ''}

    <div class="modal-section-block">
      <h4>Business Challenge & Bottleneck</h4>
      <p>${project.problem}</p>
    </div>

    <div class="modal-section-block">
      <h4>Engineering Architecture & Strategy</h4>
      <p>${project.solution}</p>
    </div>

    <div class="modal-section-block">
      <h4>Key Capabilities & Technical Highlights</h4>
      <ul>
        ${project.features.map(f => `<li>✓ ${f}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section-block">
      <h4>Measurable Business Outcome</h4>
      <p><strong>Impact:</strong> ${project.results}</p>
    </div>

    <div class="modal-section-block">
      <h4>Tech Stack Deployed</h4>
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:8px;">
        ${project.tags.map(t => `<span class="service-tag" style="background:var(--color-blue-light); color:var(--color-electric-blue); font-weight:700;">${t}</span>`).join('')}
      </div>
    </div>

    <div style="margin-top:32px; padding-top:20px; border-top:1px solid var(--border-subtle); display:flex; gap:16px; flex-wrap:wrap;">
      <a href="#contact" class="btn btn-primary" onclick="document.getElementById('case-study-modal').classList.remove('open'); document.body.style.overflow='';" style="padding:12px 24px;">
        Discuss a Similar Project With Our Engineers &rarr;
      </a>
      <button class="btn btn-outline" onclick="document.getElementById('case-study-modal').classList.remove('open'); document.body.style.overflow='';">Close</button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   7. Process Timeline
   ========================================================================== */
function initProcess() {
  const container = document.getElementById('process-timeline');
  if (!container) return;

  container.innerHTML = PROCESS_STEPS.map(step => `
    <div class="process-step-card">
      <span class="step-num-badge">${step.num}</span>
      <h3 class="step-title">${step.title}</h3>
      <div class="step-subtitle">${step.subtitle}</div>
      <p class="step-desc">${step.desc}</p>
      
      <div class="step-deliverables-box">
        <div class="step-deliverables-heading">Core Phase Deliverables</div>
        <ul>
          ${step.deliverables.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   8. Interactive Project Scope & Budget Calculator
   ========================================================================== */
function initEstimator() {
  const priceDisplay = document.getElementById('calc-price-range');
  const timelineDisplay = document.getElementById('calc-timeline');
  const prefillBtn = document.getElementById('calc-prefill-btn');
  if (!priceDisplay) return;

  let currentTypeFactor = 1.0;
  let currentStageFactor = 1.0;
  let addOnsCost = 0;

  // Base MVP Web Project
  const BASE_PRICE_MIN = 25000;
  const BASE_PRICE_MAX = 45000;
  const BASE_WEEKS_MIN = 8;
  const BASE_WEEKS_MAX = 12;

  function updateCalculation() {
    const minPrice = Math.round((BASE_PRICE_MIN * currentTypeFactor * currentStageFactor) + addOnsCost);
    const maxPrice = Math.round((BASE_PRICE_MAX * currentTypeFactor * currentStageFactor) + addOnsCost);

    const minWeeks = Math.max(6, Math.round(BASE_WEEKS_MIN * ((currentTypeFactor + currentStageFactor) / 2)));
    const maxWeeks = Math.round(BASE_WEEKS_MAX * ((currentTypeFactor + currentStageFactor) / 2));

    priceDisplay.textContent = `$${minPrice.toLocaleString()} – $${maxPrice.toLocaleString()}`;
    timelineDisplay.textContent = `Estimated Timeline: ${minWeeks} – ${maxWeeks} Weeks`;
  }

  // Type Selector
  document.querySelectorAll('[data-calc="type"] .calc-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-calc="type"] .calc-option-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTypeFactor = parseFloat(btn.getAttribute('data-factor'));
      updateCalculation();
    });
  });

  // Stage Selector
  document.querySelectorAll('[data-calc="stage"] .calc-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-calc="stage"] .calc-option-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStageFactor = parseFloat(btn.getAttribute('data-factor'));
      updateCalculation();
    });
  });

  // Multi-capability toggle buttons
  document.querySelectorAll('.calc-options-multi .calc-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      
      let sum = 0;
      document.querySelectorAll('.calc-options-multi .calc-toggle-btn.active').forEach(b => {
        sum += parseInt(b.getAttribute('data-cost'), 10);
      });
      addOnsCost = sum;
      updateCalculation();
    });
  });

  // Prefill Button -> scroll to contact and apply budget
  if (prefillBtn) {
    prefillBtn.addEventListener('click', () => {
      const activeType = document.querySelector('[data-calc="type"] .calc-option-btn.active')?.textContent.trim() || '';
      const estimatedPrice = priceDisplay.textContent;

      const detailsInput = document.getElementById('client-details');
      if (detailsInput) {
        detailsInput.value = `[Inquiry via Scope Calculator]\nProject Type: ${activeType}\nEstimated Scope: ${estimatedPrice} / ${timelineDisplay.textContent}\nAdditional Context: `;
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }

      showToast(`Estimator applied! Please complete your project details.`);
    });
  }

  updateCalculation();
}

/* ==========================================================================
   9. Blog Search, Filtering & Reader Modal
   ========================================================================== */
function initBlog() {
  const grid = document.getElementById('blog-grid');
  const searchInput = document.getElementById('blog-search-input');
  const categoryBtns = document.querySelectorAll('#blog-categories .blog-cat-btn');
  if (!grid) return;

  let activeCategory = 'all';
  let searchTerm = '';

  function renderArticles() {
    const filtered = BLOG_POSTS.filter(post => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm) || 
        post.excerpt.toLowerCase().includes(searchTerm) || 
        post.category.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #fff; border-radius: 12px; border: 1px solid var(--border-subtle);">
          <p style="font-size: 1.125rem; color: var(--text-muted); margin-bottom: 8px;">No technical articles found matching "${searchTerm}".</p>
          <button class="btn btn-outline" id="clear-search-btn">Reset Filters</button>
        </div>
      `;
      const clearBtn = document.getElementById('clear-search-btn');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          searchTerm = '';
          activeCategory = 'all';
          categoryBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-cat') === 'all'));
          renderArticles();
        });
      }
      return;
    }

    grid.innerHTML = filtered.map(post => `
      <div class="blog-card" data-post-id="${post.id}">
        <div class="blog-meta-top">
          <span class="blog-badge">${post.category}</span>
          <span class="blog-read-time">${post.readTime}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-card-footer">
          <span class="blog-author">${post.author} • ${post.date}</span>
          <button class="btn-read-post" data-read-post="${post.id}">
            Read Insight &rarr;
          </button>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('[data-read-post]').forEach(btn => {
      btn.addEventListener('click', () => {
        const postId = btn.getAttribute('data-read-post');
        openArticleModal(postId);
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      renderArticles();
    });
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-cat');
      renderArticles();
    });
  });

  renderArticles();
}

function openArticleModal(postId) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  const modal = document.getElementById('article-modal');
  const content = document.getElementById('article-content');
  if (!post || !modal || !content) return;

  content.innerHTML = `
    <div class="modal-kicker">${post.category} • ${post.readTime}</div>
    <h3 class="modal-title">${post.title}</h3>
    <div style="font-size:0.875rem; color:var(--text-subtle); margin-bottom:24px; padding-bottom:16px; border-bottom:1px solid var(--border-subtle);">
      Authored by <strong>${post.author}</strong> on ${post.date}
    </div>
    
    <div class="article-body" style="font-size:1rem; line-height:1.75; color:var(--text-main);">
      ${post.content}
    </div>

    <div style="margin-top:36px; padding:20px; background:var(--bg-subtle); border-radius:12px; border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
      <div>
        <strong style="color:var(--color-primary-navy); display:block;">Discuss Your Architecture With BetaByte Labs</strong>
        <span style="font-size:0.875rem; color:var(--text-muted);">Get feedback on microservices, cloud scaling, and AI.</span>
      </div>
      <a href="#contact" class="btn btn-primary" onclick="document.getElementById('article-modal').classList.remove('open'); document.body.style.overflow='';" style="padding:10px 20px;">
        Schedule Discovery Call &rarr;
      </a>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   10. Lead Generation Contact Form Validation & Submission
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('lead-form');
  const submitBtn = document.getElementById('submit-btn');
  const successState = document.getElementById('form-success-state');
  const resetBtn = document.getElementById('reset-form-btn');
  if (!form) return;

  const fields = {
    name: { el: document.getElementById('client-name'), err: document.getElementById('err-name') },
    email: { el: document.getElementById('client-email'), err: document.getElementById('err-email') },
    company: { el: document.getElementById('client-company'), err: document.getElementById('err-company') },
    service: { el: document.getElementById('client-service'), err: document.getElementById('err-service') },
    details: { el: document.getElementById('client-details'), err: document.getElementById('err-details') }
  };

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearErrors() {
    Object.values(fields).forEach(f => {
      if (f.el) f.el.classList.remove('error');
      if (f.err) f.err.textContent = '';
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    let hasError = false;

    // Validate Name
    if (!fields.name.el.value.trim()) {
      fields.name.el.classList.add('error');
      fields.name.err.textContent = 'Please enter your full name.';
      hasError = true;
    }

    // Validate Email
    const emailVal = fields.email.el.value.trim();
    if (!emailVal || !validateEmail(emailVal)) {
      fields.email.el.classList.add('error');
      fields.email.err.textContent = 'Please provide a valid business email address.';
      hasError = true;
    }

    // Validate Company
    if (!fields.company.el.value.trim()) {
      fields.company.el.classList.add('error');
      fields.company.err.textContent = 'Please specify your company or venture name.';
      hasError = true;
    }

    // Validate Service
    if (!fields.service.el.value) {
      fields.service.el.classList.add('error');
      fields.service.err.textContent = 'Please choose a primary service of interest.';
      hasError = true;
    }

    // Validate Details
    if (fields.details.el.value.trim().length < 15) {
      fields.details.el.classList.add('error');
      fields.details.err.textContent = 'Please provide at least 15 characters describing your project.';
      hasError = true;
    }

    if (hasError) {
      showToast('Please correct the highlighted fields before submitting.', 'error');
      return;
    }

    // Process Submission (Simulate Production Backend API)
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;

      // Hide form, show verified success confirmation
      form.style.display = 'none';
      if (successState) successState.style.display = 'block';

      showToast('Inquiry sent! A Senior Technical Director will contact you within 24 hours.', 'success');
    }, 1100);
  });

  if (resetBtn && successState) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      clearErrors();
      successState.style.display = 'none';
      form.style.display = 'block';
    });
  }
}

/* ==========================================================================
   11. Modal Window Listeners & Accessibility
   ========================================================================== */
function initModals() {
  const modals = [
    { overlay: document.getElementById('case-study-modal'), close: document.getElementById('modal-close-btn') },
    { overlay: document.getElementById('article-modal'), close: document.getElementById('article-close-btn') },
    { overlay: document.getElementById('service-modal'), close: document.getElementById('service-close-btn') }
  ];

  modals.forEach(({ overlay, close }) => {
    if (!overlay) return;

    if (close) {
      close.addEventListener('click', () => {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Escape key closes any active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(({ overlay }) => {
        if (overlay && overlay.classList.contains('open')) {
          overlay.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }
  });

  // Current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   12. Toast Notification Feedback
   ========================================================================== */
let toastTimeout = null;
function initToasts() {
  // Container initialized
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = '🔔';
  if (type === 'success') icon = '✓';
  if (type === 'error') icon = '⚠️';

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}
