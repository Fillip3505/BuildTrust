
(function() {
  'use strict';

  // ============================================
  // CONFIGURATION & CONSTANTS
  // ============================================

  const CONFIG = {
    // UI Settings
    ui: {
      formSuccessDisplayTime: 3000, // milliseconds
      animationDuration: 300, // milliseconds
      scrollBehavior: 'smooth',
      debounceDelay: 300 // milliseconds
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
      rootMargin: '50px',
      threshold: 0.1
    }
  };

  // ============================================
  // SITE CONTENT (Multilingual)
  // ============================================

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

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func.apply(this, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Sanitize HTML to prevent XSS attacks
   */
  function sanitizeHTML(str) {
    if (!str) return '';
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  }

  /**
   * Get translation text safely with fallback
   */
  function getTranslation(key, lang = currentLang) {
    try {
      if (siteContent[lang] && siteContent[lang][key]) {
        return siteContent[lang][key];
      }
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

  function switchLang(lang) {
    try {
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

      for (const [key, value] of Object.entries(content)) {
        const element = document.getElementById(key);
        if (element) {
          const sanitizedValue = sanitizeHTML(value);
          
          if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
            element.placeholder = sanitizedValue;
          } else {
            element.textContent = value;
          }
        }
      }

      updateLanguageButtons(lang);
      
      try {
        localStorage.setItem('preferredLanguage', lang);
      } catch (e) {
        // Silent fail
      }
      
    } catch (error) {
      console.error('Error switching language:', error);
    }
  }

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

  function validateEmail(email) {
    return CONFIG.validation.emailRegex.test(email);
  }

  function showError(input, message) {
    try {
      const errorElement = document.getElementById(`${input.id}-error`);
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.removeAttribute('hidden');
        input.setAttribute('aria-describedby', `${input.id}-error`);
      }
      input.classList.remove('valid');
      input.classList.add('error');
      input.setAttribute('aria-invalid', 'true');
    } catch (error) {
      console.error('Error showing validation error:', error);
    }
  }

  function clearError(input) {
    try {
      const errorElement = document.getElementById(`${input.id}-error`);
      if (errorElement) {
        errorElement.textContent = '';
        errorElement.setAttribute('hidden', '');
        input.removeAttribute('aria-describedby');
      }
      input.classList.remove('error');
      input.removeAttribute('aria-invalid');
    } catch (error) {
      console.error('Error clearing validation error:', error);
    }
  }

  function showValid(input) {
    try {
      clearError(input);
      input.classList.add('valid');
    } catch (error) {
      console.error('Error showing valid state:', error);
    }
  }

  function validateField(input) {
    const value = input.value.trim();
    const name = input.name;
    
    clearError(input);
    
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
    
    showValid(input);
    return true;
  }

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

function setButtonLoading(button, isLoading) {
  try {
    if (isLoading) {
      button.disabled = true;
      button.classList.add('loading');
    } else {
      button.disabled = false;
      button.classList.remove('loading');
    }
  } catch (error) {
    console.error('Error setting button loading state:', error);
  }
}
  async function handleFormSubmit(event) {
    event.preventDefault();
    
    try {
      const form = event.target;
      const submitButton = form.querySelector('button[type="submit"]');
      const successDiv = document.querySelector('.contact__success');
      
      if (!validateForm(form)) {
        return;
      }
      
      setButtonLoading(submitButton, true);
      
      const formData = {
        name: sanitizeHTML(document.getElementById('name').value.trim()),
        email: sanitizeHTML(document.getElementById('email').value.trim()),
        message: sanitizeHTML(document.getElementById('message').value.trim())
      };
      
      // TODO: API call will be here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form data (sanitized):', formData);

      setButtonLoading(submitButton, false);
      
      form.hidden = true;
      
      if (successDiv) {
        successDiv.hidden = false;
      }
      
      setButtonLoading(submitButton, false);
      
      setTimeout(() => {
        form.reset();
        form.hidden = false;
        
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
          input.classList.remove('valid', 'error');
        });
        
        if (successDiv) {
          successDiv.hidden = true;
        }
      }, CONFIG.ui.formSuccessDisplayTime);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
      
      const submitButton = event.target.querySelector('button[type="submit"]');
      if (submitButton) {
        setButtonLoading(submitButton, false);
      }
    }
  }

  // ============================================
  // LAZY LOADING
  // ============================================

  function initLazyLoading() {
    try {
      if (!('IntersectionObserver' in window)) {
        console.warn('IntersectionObserver not supported');
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

  function initEventListeners() {
    try {
      const langButtons = document.querySelectorAll('.lang-switch__btn');
      langButtons.forEach(button => {
        button.addEventListener('click', () => {
          const lang = button.getAttribute('data-lang');
          if (lang) {
            switchLang(lang);
          }
        });
      });
      
      const scrollButtons = document.querySelectorAll('[data-scroll-to]');
      scrollButtons.forEach(button => {
        button.addEventListener('click', () => {
          const targetId = button.getAttribute('data-scroll-to');
          if (targetId) {
            smoothScrollTo(targetId);
          }
        });
      });
      
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
        const debouncedValidate = debounce((input) => {
          validateField(input);
        }, CONFIG.ui.debounceDelay);
        
        inputs.forEach(input => {
          input.addEventListener('blur', () => validateField(input));
          
          input.addEventListener('input', () => {
            if (input.classList.contains('error') || input.classList.contains('valid')) {
              debouncedValidate(input);
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

  function init() {
    try {
      let savedLang = CONFIG.languages.default;
      try {
        savedLang = localStorage.getItem('preferredLanguage') || CONFIG.languages.default;
      } catch (e) {
        // localStorage not available
      }
      
      if (CONFIG.languages.available.includes(savedLang)) {
        switchLang(savedLang);
      } else {
        switchLang(CONFIG.languages.default);
      }
      
      initEventListeners();
      initLazyLoading();
      
      console.log('✅ BuildTrust initialized successfully');
    } catch (error) {
      console.error('Error initializing application:', error);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ============================================
  // PUBLIC API
  // ============================================

  window.BuildTrust = {
    switchLang: switchLang,
    version: '1.0.0'
  };

})();