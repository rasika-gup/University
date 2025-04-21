// State-City mapping
const stateCities: Record<string, string[]> = {
  'tamil-nadu': ['Chennai', 'Vellore', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli'],
  'karnataka': ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga'],
  'maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur'],
  'delhi': ['New Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'Ghaziabad'],
  'kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam'],
  'andhra-pradesh': ['Hyderabad', 'Vijayawada', 'Visakhapatnam', 'Guntur', 'Tirupati'],
  'telangana': ['Hyderabad', 'Warangal', 'Karimnagar', 'Nizamabad', 'Khammam'],
  'gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar'],
  'rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Bikaner'],
  'uttar-pradesh': ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Allahabad']
};

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  // Program Filtering
  const streamSelect = document.getElementById('stream') as HTMLSelectElement;
  const degreeSelect = document.getElementById('degree') as HTMLSelectElement;
  const specializationSelect = document.getElementById('specialization') as HTMLSelectElement;
  const programCards = document.querySelectorAll('.program-card');

  const filterPrograms = () => {
    // Get filter values
    const degreeValue = degreeSelect?.value || 'all';

    // These values are prepared for future implementation
    // of more complex filtering
    // const streamValue = streamSelect?.value || 'all';
    // const specializationValue = specializationSelect?.value || 'all';

    let visibleCount = 0;

    for (const card of programCards) {
      const cardElement = card as HTMLElement;
      const level = cardElement.dataset.level || '';

      // Simple filtering logic - this would be extended in a real app
      let isVisible = true;

      if (degreeValue !== 'all') {
        isVisible = isVisible && (degreeValue === level);
      }

      // Additional filtering logic would be added here for stream and specialization

      if (isVisible) {
        cardElement.style.display = 'block';
        visibleCount++;
      } else {
        cardElement.style.display = 'none';
      }
    }

    // Update 'no results' message if needed
    const noResultsMessage = document.getElementById('no-results');
    if (noResultsMessage) {
      noResultsMessage.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  };

  // Add event listeners for filtering
  streamSelect?.addEventListener('change', filterPrograms);
  degreeSelect?.addEventListener('change', filterPrograms);
  specializationSelect?.addEventListener('change', filterPrograms);

  // Eligibility Checker Form
  const eligibilityForm = document.getElementById('eligibility-form') as HTMLFormElement;
  const resultsContainer = document.getElementById('results-container');

  eligibilityForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const educationLevel = (document.getElementById('education-level') as HTMLSelectElement).value;
    const fieldOfStudy = (document.getElementById('field-of-study') as HTMLSelectElement).value;
    const gpa = (document.getElementById('gpa') as HTMLInputElement).value;

    // Validate inputs
    if (!educationLevel || !fieldOfStudy || !gpa) {
      alert('Please fill in all fields');
      return;
    }

    // Parse GPA/marks
    const marks = Number.parseFloat(gpa);
    if (Number.isNaN(marks) || marks < 0 || marks > 100) {
      alert('Please enter a valid percentage between 0 and 100');
      return;
    }

    // Show results container
    if (resultsContainer) {
      resultsContainer.classList.remove('hidden');

      // Generate eligible programs based on inputs
      let eligiblePrograms = '';

      // This is a simple demo logic - in a real app, this would be more sophisticated
      if (educationLevel === 'high-school' && marks >= 70) {
        eligiblePrograms += `
          <div class="eligible-program">
            <h3>Bachelor of Science in Computer Science</h3>
            <p>You qualify for this program based on your academic profile.</p>
            <a href="#" class="btn btn-outline">Learn More</a>
          </div>
          <div class="eligible-program">
            <h3>Bachelor of Arts in Psychology</h3>
            <p>You qualify for this program based on your academic profile.</p>
            <a href="#" class="btn btn-outline">Learn More</a>
          </div>
        `;
      } else if (educationLevel === 'bachelor' && marks >= 75) {
        eligiblePrograms += `
          <div class="eligible-program">
            <h3>Master of Business Administration</h3>
            <p>You qualify for this program based on your academic profile.</p>
            <a href="#" class="btn btn-outline">Learn More</a>
          </div>
          <div class="eligible-program">
            <h3>Master of Engineering in Robotics</h3>
            <p>You qualify for this program based on your academic profile.</p>
            <a href="#" class="btn btn-outline">Learn More</a>
          </div>
        `;
      } else if (educationLevel === 'master' && marks >= 80) {
        eligiblePrograms += `
          <div class="eligible-program">
            <h3>Ph.D. in Biomedical Sciences</h3>
            <p>You qualify for this program based on your academic profile.</p>
            <a href="#" class="btn btn-outline">Learn More</a>
          </div>
        `;
      } else {
        eligiblePrograms = `
          <div class="no-programs">
            <p>Based on your current profile, we don't have any matching programs.
            Consider improving your academic scores or contacting our admissions office for guidance.</p>
          </div>
        `;
      }

      resultsContainer.innerHTML = eligiblePrograms;
    }
  });

  // Mobile navigation toggle (copied from main.ts for consistency)
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

  const stateSelect = document.getElementById('state') as HTMLSelectElement;
  const citySelect = document.getElementById('city') as HTMLSelectElement;
  const examImages = document.querySelectorAll('.image-grid img');

  // Handle state selection change
  stateSelect.addEventListener('change', () => {
    const selectedState = stateSelect.value;
    citySelect.innerHTML = '<option value="">Choose City</option>';

    if (selectedState && stateCities[selectedState]) {
      stateCities[selectedState].forEach(city => {
        const option = document.createElement('option');
        option.value = city.toLowerCase().replace(/\s+/g, '-');
        option.textContent = city;
        citySelect.appendChild(option);
      });
    }

    // Show/hide date slots based on selected state
    const dateSlots = document.querySelectorAll('.date-slot');
    dateSlots.forEach(slot => {
      const slotState = (slot as HTMLElement).dataset.state;
      if (selectedState === slotState) {
        (slot as HTMLElement).style.display = 'flex';
      } else {
        (slot as HTMLElement).style.display = 'none';
      }
    });
  });

  // Initially hide all date slots
  const dateSlots = document.querySelectorAll('.date-slot');
  dateSlots.forEach(slot => {
    (slot as HTMLElement).style.display = 'none';
  });

  // Add hover effect to images
  examImages.forEach(img => {
    const imageElement = img as HTMLImageElement; // Cast to HTMLImageElement
    imageElement.addEventListener('mouseenter', () => {
      imageElement.style.transform = 'scale(1.05)';
      imageElement.style.transition = 'transform 0.3s ease';
    });

    imageElement.addEventListener('mouseleave', () => {
      imageElement.style.transform = 'scale(1)';
    });
  });

  // Admission Guidelines Tabs
  const guidelineTabs = document.querySelectorAll('.guidelines-nav .nav-item');
  const guidelinePanes = document.querySelectorAll('.guidelines-content .content-pane');

  guidelineTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = (tab as HTMLElement).dataset.target;

      // Deactivate all tabs and panes
      guidelineTabs.forEach(t => t.classList.remove('active'));
      guidelinePanes.forEach(p => p.classList.remove('active'));

      // Activate the clicked tab
      tab.classList.add('active');

      // Activate the corresponding pane
      const targetPane = document.getElementById(targetId || '');
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
});
