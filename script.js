/**
 * BuildTrust - Main JavaScript
 * Enhanced with validation, error handling, lazy loading, and security
 */

// ============================================
// CONFIGURATION & CONSTANTS
// ============================================

const CONFIG = {
  // UI Settings
  ui: {
    formSuccessDisplayTime: 3000, // milliseconds
    animationDuration: 300, // milliseconds
    scrollBehavior: 'smooth'
  },
  
  // Language Settings
  languages: {
    default: 'en',
    available: ['en', 'ru', 'ua']
  },
  
  // Validation Rules
  validation: {
    nameMinLength: 2,
    messageMinLength: 5,
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  
  // Lazy Loading
  lazyLoading: {
    rootMargin: '50px', // Start loading 50px before entering viewport
    threshold: 0.1
  }
};

// ============================================
// SITE CONTENT (Multilingual)
// ============================================

/**
 * @typedef {Object} SiteContent
 * @property {Object.<string, string>} en - English translations
 * @property {Object.<string, string>} ru - Russian translations
 * @property {Object.<string, string>} ua - Ukrainian translations
 */
const siteContent = {
  en: {
    "nav-hero": "Home",
    "nav-workers": "For Workers",
    "nav-clients": "For Clients",
    "nav-contact": "Contact",
    "hero-title": "BuildTrust — We don't just build houses. We build trust.",
    "hero-subtitle": "A transparent platform connecting reliable construction workers with verified clients, eliminating scams and intermediaries.",
    "btn-worker": "I'm a Worker",
    "btn-client": "I'm a Client",
    "workers-title": "For Workers",
    "workers-p1": "Find stable construction work without scams or unreliable employers. BuildTrust connects you directly with verified clients who value professionalism and pay on time.",
    "workers-p2": "All jobs are verified before posting. You keep 100% control over your profile, rates, and schedule. No hidden fees, no middlemen taking a cut.",
    "workers-p3": "Build your reputation through honest work. Clients see your complete history and ratings. The better your reputation, the more opportunities come your way.",
    "btn-workers-join": "Join as a Worker",
    "clients-title": "For Clients",
    "clients-p1": "Need reliable construction workers you can trust? BuildTrust provides verified professionals with proven track records and transparent pricing.",
    "clients-p2": "Every worker is checked and rated by other clients. Browse portfolios, read reviews, and hire based on real experience, not promises.",
    "clients-p3": "Fixed pricing, agreed timelines, and guaranteed quality. If something goes wrong, we're here to help resolve it fairly. Your money is protected.",
    "btn-clients-post": "Post a Job",
    "reviews-title": "Reviews",
    "review-1-text": "Coming soon. We're collecting stories from our community.",
    "review-1-name": "John Doe",
    "review-1-role": "Construction Worker",
    "review-2-text": "Coming soon. Share your experience with BuildTrust.",
    "review-2-name": "Sarah Miller",
    "review-2-role": "Project Manager",
    "review-3-text": "Coming soon. Join hundreds of satisfied users.",
    "review-3-name": "Mike Thompson",
    "review-3-role": "Building Owner",
    "review-4-text": "Coming soon. Help us inspire others.",
    "review-4-name": "Emily Stone",
    "review-4-role": "Homeowner",
    "contact-title": "Get in Touch",
    "label-name": "Your Name",
    "label-email": "Email",
    "label-message": "Message",
    "btn-send": "Send Message",
    "success-msg": "Thank you! We'll get back to you soon.",
    "footer-desc": "Connecting workers and clients honestly.",
    "footer-links-title": "Links",
    "footer-privacy": "Privacy Policy",
    "footer-contact-link": "Contact",
    "footer-about": "About",
    "footer-social-title": "Social",
    "footer-telegram": "Telegram",
    "footer-whatsapp": "WhatsApp",
    "footer-instagram": "Instagram",
    // Validation messages
    "error-name-required": "Please enter your name",
    "error-name-min": "Name must be at least 2 characters",
    "error-email-required": "Please enter your email",
    "error-email-invalid": "Please enter a valid email address",
    "error-message-required": "Please enter your message",
    "error-message-min": "Message must be at least 5 characters"
  },
  ru: {
    "nav-hero": "Главная",
    "nav-workers": "Для рабочих",
    "nav-clients": "Для заказчиков",
    "nav-contact": "Контакты",
    "hero-title": "BuildTrust — проект, который помогает рабочим и заказчикам гарантировано получить желаемое.",
    "hero-subtitle": "Прозрачная платформа, соединяющая надежных строителей с проверенными клиентами, исключая мошенничество и посредников.",
    "btn-worker": "Я рабочий",
    "btn-client": "Я заказчик",
    "workers-title": "Для рабочих",
    "workers-p1": "Найдите стабильную работу на стройке без мошенников и ненадежных работодателей. BuildTrust соединяет вас напрямую с проверенными клиентами, которые ценят профессионализм и платят вовремя.",
    "workers-p2": "Все вакансии проверены перед публикацией. Вы полностью контролируете свой профиль, ставки и график. Без скрытых комиссий, без посредников, берущих процент.",
    "workers-p3": "Постройте репутацию честной работой. Клиенты видят вашу полную историю и рейтинги. Чем лучше ваша репутация, тем больше возможностей приходит к вам.",
    "btn-workers-join": "Присоединиться как рабочий",
    "clients-title": "Для заказчиков",
    "clients-p1": "Нужны надежные строители, которым вы можете доверять? BuildTrust предоставляет проверенных профессионалов с доказанным опытом и прозрачными ценами.",
    "clients-p2": "Каждый рабочий проверен и оценен другими клиентами. Просмотрите портфолио, прочитайте отзывы и нанимайте на основе реального опыта, а не обещаний.",
    "clients-p3": "Фиксированные цены, согласованные сроки и гарантированное качество. Если что-то пойдет не так, мы здесь, чтобы помочь разрешить это справедливо. Ваши деньги защищены.",
    "btn-clients-post": "Разместить заказ",
    "reviews-title": "Отзывы",
    "review-1-text": "Скоро. Мы собираем истории нашего сообщества.",
    "review-1-name": "Иван Петров",
    "review-1-role": "Рабочий-строитель",
    "review-2-text": "Скоро. Поделитесь своим опытом с BuildTrust.",
    "review-2-name": "Мария Сидорова",
    "review-2-role": "Руководитель проекта",
    "review-3-text": "Скоро. Присоединяйтесь к сотням довольных пользователей.",
    "review-3-name": "Алексей Козлов",
    "review-3-role": "Владелец строительства",
    "review-4-text": "Скоро. Помогите нам вдохновлять других.",
    "review-4-name": "Елена Романова",
    "review-4-role": "Владелица дома",
    "contact-title": "Связаться с нами",
    "label-name": "Ваше имя",
    "label-email": "Email",
    "label-message": "Сообщение",
    "btn-send": "Отправить",
    "success-msg": "Спасибо! Мы вскоре вам ответим.",
    "footer-desc": "Соединяем рабочих и заказчиков честно.",
    "footer-links-title": "Ссылки",
    "footer-privacy": "Политика конфиденциальности",
    "footer-contact-link": "Контакты",
    "footer-about": "О нас",
    "footer-social-title": "Социальные сети",
    "footer-telegram": "Telegram",
    "footer-whatsapp": "WhatsApp",
    "footer-instagram": "Instagram",
    // Validation messages
    "error-name-required": "Пожалуйста, введите ваше имя",
    "error-name-min": "Имя должно содержать минимум 2 символа",
    "error-email-required": "Пожалуйста, введите ваш email",
    "error-email-invalid": "Пожалуйста, введите корректный email",
    "error-message-required": "Пожалуйста, введите сообщение",
    "error-message-min": "Сообщение должно содержать минимум 5 символов"
  },
  ua: {
    "nav-hero": "Головна",
    "nav-workers": "Для працівників",
    "nav-clients": "Для замовників",
    "nav-contact": "Контакти",
    "hero-title": "BuildTrust — проект, що допомагає працівникам і замовникам гарантовано отримати бажане.",
    "hero-subtitle": "Прозора платформа, яка з'єднує надійних будівельників з перевіреними клієнтами, усуваючи шахрайство та посередників.",
    "btn-worker": "Я працівник",
    "btn-client": "Я замовник",
    "workers-title": "Для працівників",
    "workers-p1": "Знайдіть стабільну роботу на будівництві без шахраїв та ненадійних роботодавців. BuildTrust з'єднує вас прямо з перевіреними клієнтами, які цінують професіоналізм і платять вчасно.",
    "workers-p2": "Усі вакансії перевіряються перед публікацією. Ви повністю контролюєте свій профіль, ставки та графік. Без прихованих комісій, без посередників, які беруть відсоток.",
    "workers-p3": "Побудуйте репутацію честною роботою. Клієнти бачать вашу повну історію та рейтинги. Чим краща ваша репутація, тим більше можливостей приходить до вас.",
    "btn-workers-join": "Приєднатися як працівник",
    "clients-title": "Для замовників",
    "clients-p1": "Потрібні надійні будівельники, яким ви можете довіряти? BuildTrust надає перевірених професіоналів з доведеним досвідом та прозорими цінами.",
    "clients-p2": "Кожен працівник перевірений та оцінений іншими клієнтами. Переглядайте портфоліо, читайте відгуки та наймайте на основі реального досвіду, а не обіцянок.",
    "clients-p3": "Фіксовані ціни, узгоджені терміни та гарантована якість. Якщо щось піде не так, ми тут, щоб допомогти розв'язати це справедливо. Ваші гроші захищені.",
    "btn-clients-post": "Розмістити замовлення",
    "reviews-title": "Відгуки",
    "review-1-text": "Скоро. Ми збираємо історії нашої спільноти.",
    "review-1-name": "Юрій Коваленко",
    "review-1-role": "Робітник-будівельник",
    "review-2-text": "Скоро. Поділіться своїм досвідом з BuildTrust.",
    "review-2-name": "Олена Петренко",
    "review-2-role": "Менеджер проекту",
    "review-3-text": "Скоро. Приєднуйтесь до сотень задоволених користувачів.",
    "review-3-name": "Сергій Максименко",
    "review-3-role": "Власник будівництва",
    "review-4-text": "Скоро. Допоможіть нам надихати інших.",
    "review-4-name": "Оксана Бондаренко",
    "review-4-role": "Власниця будинку",
    "contact-title": "Зв'яжіться з нами",
    "label-name": "Ваше ім'я",
    "label-email": "Email",
    "label-message": "Повідомлення",
    "btn-send": "Відправити",
    "success-msg": "Дякуємо! Ми незабаром вам відповімо.",
    "footer-desc": "З'єднуємо працівників і замовників чесно.",
    "footer-links-title": "Посилання",
    "footer-privacy": "Політика конфіденційності",
    "footer-contact-link": "Контакти",
    "footer-about": "Про нас",
    "footer-social-title": "Соціальні мережі",
    "footer-telegram": "Telegram",
    "footer-whatsapp": "WhatsApp",
    "footer-instagram": "Instagram",
    // Validation messages
    "error-name-required": "Будь ласка, введіть ваше ім'я",
    "error-name-min": "Ім'я повинно містити мінімум 2 символи",
    "error-email-required": "Будь ласка, введіть ваш email",
    "error-email-invalid": "Будь ласка, введіть коректний email",
    "error-message-required": "Будь ласка, введіть повідомлення",
    "error-message-min": "Повідомлення повинно містити мінімум 5 символів"
  }
};

// ============================================
// STATE MANAGEMENT
// ============================================

let currentLang = CONFIG.languages.default;

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Sanitize HTML to prevent XSS attacks
 * @param {string} str - String to sanitize
 * @returns {string} Sanitized string
 */
function sanitizeHTML(str) {
  if (!str) return '';
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
}

/**
 * Get translation text safely with fallback
 * @param {string} key - Translation key
 * @param {string} lang - Language code
 * @returns {string} Translated text or fallback
 */
function getTranslation(key, lang = currentLang) {
  try {
    if (siteContent[lang] && siteContent[lang][key]) {
      return siteContent[lang][key];
    }
    // Fallback to English
    if (siteContent[CONFIG.languages.default][key]) {
      console.warn(`Translation missing for "${key}" in ${lang}, using English`);
      return siteContent[CONFIG.languages.default][key];
    }
    console.error(`Translation missing for key: ${key}`);
    return key;
  } catch (error) {
    console.error('Error getting translation:', error);
    return key;
  }
}

/**
 * Smooth scroll to element
 * @param {string} targetId - Element ID to scroll to
 */
function smoothScrollTo(targetId) {
  try {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: CONFIG.ui.scrollBehavior });
    } else {
      console.warn(`Element with id "${targetId}" not found`);
    }
  } catch (error) {
    console.error('Error scrolling to element:', error);
  }
}

// ============================================
// LANGUAGE SWITCHING
// ============================================

/**
 * Switch site language
 * @param {string} lang - Language code (en, ru, ua)
 */
function switchLang(lang) {
  try {
    // Validate language
    if (!CONFIG.languages.available.includes(lang)) {
      console.error(`Invalid language: ${lang}`);
      return;
    }

    currentLang = lang;
    const content = siteContent[lang];
    
    if (!content) {
      console.error(`No content available for language: ${lang}`);
      return;
    }

    // Update all elements with id
    for (const [key, value] of Object.entries(content)) {
      const element = document.getElementById(key);
      if (element) {
        // Sanitize before inserting
        const sanitizedValue = sanitizeHTML(value);
        
        if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
          element.placeholder = sanitizedValue;
        } else {
          element.textContent = value; // textContent is safe by default
        }
      }
    }

    // Update language buttons state
    updateLanguageButtons(lang);
    
    // Store preference (optional - can be removed if not needed)
    try {
      localStorage.setItem('preferredLanguage', lang);
    } catch (e) {
      // Silent fail if localStorage is not available
    }
    
  } catch (error) {
    console.error('Error switching language:', error);
  }
}

/**
 * Update language buttons visual state
 * @param {string} activeLang - Currently active language
 */
function updateLanguageButtons(activeLang) {
  try {
    const buttons = document.querySelectorAll('.lang-switch__btn');
    buttons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === activeLang) {
        btn.setAttribute('aria-current', 'page');
        btn.classList.add('active');
      } else {
        btn.removeAttribute('aria-current');
        btn.classList.remove('active');
      }
    });
  } catch (error) {
    console.error('Error updating language buttons:', error);
  }
}

// ============================================
// FORM VALIDATION
// ============================================

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid
 */
function validateEmail(email) {
  return CONFIG.validation.emailRegex.test(email);
}

/**
 * Show error message for input field
 * @param {HTMLElement} input - Input element
 * @param {string} message - Error message
 */
function showError(input, message) {
  try {
    const errorElement = document.getElementById(`${input.id}-error`);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
    input.classList.add('error');
    input.setAttribute('aria-invalid', 'true');
  } catch (error) {
    console.error('Error showing validation error:', error);
  }
}

/**
 * Clear error message for input field
 * @param {HTMLElement} input - Input element
 */
function clearError(input) {
  try {
    const errorElement = document.getElementById(`${input.id}-error`);
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }
    input.classList.remove('error');
    input.removeAttribute('aria-invalid');
  } catch (error) {
    console.error('Error clearing validation error:', error);
  }
}

/**
 * Validate single form field
 * @param {HTMLElement} input - Input element to validate
 * @returns {boolean} Is valid
 */
function validateField(input) {
  const value = input.value.trim();
  const name = input.name;
  
  clearError(input);
  
  // Name validation
  if (name === 'name') {
    if (!value) {
      showError(input, getTranslation('error-name-required'));
      return false;
    }
    if (value.length < CONFIG.validation.nameMinLength) {
      showError(input, getTranslation('error-name-min'));
      return false;
    }
  }
  
  // Email validation
  if (name === 'email') {
    if (!value) {
      showError(input, getTranslation('error-email-required'));
      return false;
    }
    if (!validateEmail(value)) {
      showError(input, getTranslation('error-email-invalid'));
      return false;
    }
  }
  
  // Message validation
  if (name === 'message') {
    if (!value) {
      showError(input, getTranslation('error-message-required'));
      return false;
    }
    if (value.length < CONFIG.validation.messageMinLength) {
      showError(input, getTranslation('error-message-min'));
      return false;
    }
  }
  
  return true;
}

/**
 * Validate entire form
 * @param {HTMLFormElement} form - Form to validate
 * @returns {boolean} Is valid
 */
function validateForm(form) {
  try {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });
    
    return isValid;
  } catch (error) {
    console.error('Error validating form:', error);
    return false;
  }
}

// ============================================
// FORM SUBMISSION
// ============================================

/**
 * Show loading state on submit button
 * @param {HTMLButtonElement} button - Submit button
 * @param {boolean} isLoading - Loading state
 */
function setButtonLoading(button, isLoading) {
  try {
    const textSpan = button.querySelector('#btn-send');
    const loader = button.querySelector('.btn__loader');
    
    if (isLoading) {
      button.disabled = true;
      button.classList.add('loading');
      if (textSpan) textSpan.style.display = 'none';
      if (loader) loader.hidden = false;
    } else {
      button.disabled = false;
      button.classList.remove('loading');
      if (textSpan) textSpan.style.display = 'inline';
      if (loader) loader.hidden = true;
    }
  } catch (error) {
    console.error('Error setting button loading state:', error);
  }
}

/**
 * Handle form submission
 * @param {Event} event - Submit event
 */
async function handleFormSubmit(event) {
  event.preventDefault();
  
  try {
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const successDiv = document.querySelector('.contact__success');
    
    // Validate form
    if (!validateForm(form)) {
      return;
    }
    
    // Show loading state
    setButtonLoading(submitButton, true);
    
    // Get form data
    const formData = {
      name: sanitizeHTML(document.getElementById('name').value.trim()),
      email: sanitizeHTML(document.getElementById('email').value.trim()),
      message: sanitizeHTML(document.getElementById('message').value.trim())
    };
    
    // TODO: Here you will add your backend API call
    // For now, simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form data (sanitized):', formData);
    
    // Show success message
    form.style.display = 'none';
    if (successDiv) {
      successDiv.hidden = false;
    }
    
    // Reset form after delay
    setTimeout(() => {
      form.reset();
      form.style.display = 'block';
      if (successDiv) {
        successDiv.hidden = true;
      }
      setButtonLoading(submitButton, false);
    }, CONFIG.ui.formSuccessDisplayTime);
    
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('An error occurred. Please try again.');
    const submitButton = event.target.querySelector('button[type="submit"]');
    setButtonLoading(submitButton, false);
  }
}

// ============================================
// LAZY LOADING
// ============================================

/**
 * Initialize lazy loading for sections
 */
function initLazyLoading() {
  try {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver not supported, loading all content');
      return;
    }
    
    const lazySections = document.querySelectorAll('.lazy-section');
    
    const observerOptions = {
      root: null,
      rootMargin: CONFIG.lazyLoading.rootMargin,
      threshold: CONFIG.lazyLoading.threshold
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    lazySections.forEach(section => {
      observer.observe(section);
    });
    
  } catch (error) {
    console.error('Error initializing lazy loading:', error);
  }
}

// ============================================
// EVENT LISTENERS INITIALIZATION
// ============================================

/**
 * Initialize all event listeners
 */
function initEventListeners() {
  try {
    // Language switch buttons
    const langButtons = document.querySelectorAll('.lang-switch__btn');
    langButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const lang = button.getAttribute('data-lang');
        if (lang) {
          switchLang(lang);
        }
      });
    });
    
    // Scroll buttons
    const scrollButtons = document.querySelectorAll('[data-scroll-to]');
    scrollButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const targetId = button.getAttribute('data-scroll-to');
        if (targetId) {
          smoothScrollTo(targetId);
        }
      });
    });
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
      
      // Real-time validation on blur
      const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
      inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
          if (input.classList.contains('error')) {
            validateField(input);
          }
        });
      });
    }
    
  } catch (error) {
    console.error('Error initializing event listeners:', error);
  }
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize application
 */
function init() {
  try {
    // Load saved language preference
    let savedLang = CONFIG.languages.default;
    try {
      savedLang = localStorage.getItem('preferredLanguage') || CONFIG.languages.default;
    } catch (e) {
      // localStorage not available
    }
    
    // Switch to preferred language
    if (CONFIG.languages.available.includes(savedLang)) {
      switchLang(savedLang);
    } else {
      switchLang(CONFIG.languages.default);
    }
    
    // Initialize features
    initEventListeners();
    initLazyLoading();
    
    console.log('BuildTrust initialized successfully');
  } catch (error) {
    console.error('Error initializing application:', error);
  }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}