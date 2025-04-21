document.addEventListener('DOMContentLoaded', () => {
  // Hero slider functionality
  const dots = document.querySelectorAll('.dot');
  const heroBackgrounds = [
    'https://ext.same-assets.com/3201005138/2108749473.jpeg',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1569447891824-7a1ef60a53a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
  ];

  const heroBg = document.querySelector('.hero-bg') as HTMLElement;

  if (dots && dots.length > 0 && heroBg) {
    // Set initial background
    heroBg.style.backgroundImage = `url('${heroBackgrounds[0]}')`;

    // Add click event to each dot
    for (let i = 0; i < dots.length; i++) {
      const dot = dots[i];
      dot.addEventListener('click', () => {
        // Update active dot
        for (const d of dots) {
          d.classList.remove('active');
        }
        dot.classList.add('active');

        // Change hero background with fade effect
        heroBg.style.opacity = '0';
        setTimeout(() => {
          heroBg.style.backgroundImage = `url('${heroBackgrounds[i]}')`;
          heroBg.style.opacity = '1';
        }, 300);
      });
    }

    // Auto slider (optional)
    let currentSlide = 0;
    setInterval(() => {
      currentSlide = (currentSlide + 1) % dots.length;
      const dot = dots[currentSlide] as HTMLElement;
      dot.click();
    }, 8000);
  }

  // Mobile navigation toggle
  const createMobileNavToggle = () => {
    const header = document.querySelector('.header .container');
    if (!header || header.querySelector('.mobile-nav-toggle')) return;

    const mobileNavToggle = document.createElement('button');
    mobileNavToggle.className = 'mobile-nav-toggle';
    mobileNavToggle.innerHTML = '<i class="ri-menu-line"></i>';
    mobileNavToggle.setAttribute('aria-label', 'Toggle Navigation');

    header.appendChild(mobileNavToggle);

    mobileNavToggle.addEventListener('click', () => {
      const nav = document.querySelector('.main-nav');
      nav?.classList.toggle('active');

      const icon = mobileNavToggle.querySelector('i');
      if (icon) {
        if (nav?.classList.contains('active')) {
          icon.classList.remove('ri-menu-line');
          icon.classList.add('ri-close-line');
        } else {
          icon.classList.remove('ri-close-line');
          icon.classList.add('ri-menu-line');
        }
      }
    });
  };

  createMobileNavToggle();

  // Chat button functionality
  const chatBtn = document.querySelector('.chat-btn');
  chatBtn?.addEventListener('click', () => {
    alert('Chat functionality would be implemented here');
  });

  // Handle window resize for responsive design
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      createMobileNavToggle();
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const nav = document.querySelector('.main-nav');
    const toggle = document.querySelector('.mobile-nav-toggle');

    if (
      nav?.classList.contains('active') &&
      !nav.contains(target) &&
      toggle && !toggle.contains(target)
    ) {
      nav.classList.remove('active');
      const icon = toggle.querySelector('i');
      if (icon) {
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-line');
      }
    }
  });

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (const anchor of anchorLinks) {
    anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
      e.preventDefault();

      const href = this.getAttribute('href') || '';
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }
});
