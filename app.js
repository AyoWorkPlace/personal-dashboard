/**
 * DevSpace Personal Dashboard — Main Application Logic
 * High-performance, modular, zero external runtime dependencies.
 */

// ==========================================================================
// 1. Curated Inspirational Coding Quotes Data
// ==========================================================================
const CODING_QUOTES = [
  {
    id: 1,
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    role: "Author of Refactoring & Chief Scientist at ThoughtWorks",
    category: "Craftsmanship",
    initials: "MF"
  },
  {
    id: 2,
    quote: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
    role: "Turing Award Laureate & Computer Science Pioneer",
    category: "Simplicity",
    initials: "ED"
  },
  {
    id: 3,
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    role: "Software Engineer & Author",
    category: "Problem Solving",
    initials: "JJ"
  },
  {
    id: 4,
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    role: "Creator of Linux & Git",
    category: "Execution",
    initials: "LT"
  },
  {
    id: 5,
    quote: "The most disastrous requirement we have ever faced is the requirement to be clever.",
    author: "Tony Hoare",
    role: "Turing Award Winner & Inventor of Quicksort",
    category: "Architecture",
    initials: "TH"
  },
  {
    id: 6,
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
    role: "Creator of Extreme Programming & Test-Driven Development",
    category: "Agile & Flow",
    initials: "KB"
  },
  {
    id: 7,
    quote: "The only way to go fast is to go well.",
    author: "Robert C. Martin",
    role: "Author of Clean Code ('Uncle Bob')",
    category: "Quality",
    initials: "RM"
  },
  {
    id: 8,
    quote: "Computer science is no more about computers than astronomy is about telescopes.",
    author: "Hal Abelson",
    role: "MIT Professor & Author of SICP",
    category: "Computer Science",
    initials: "HA"
  },
  {
    id: 9,
    quote: "Premature optimization is the root of all evil in programming.",
    author: "Donald Knuth",
    role: "Author of The Art of Computer Programming",
    category: "Optimization",
    initials: "DK"
  },
  {
    id: 10,
    quote: "It's not a bug – it's an undocumented feature.",
    author: "Anonymous Hacker",
    role: "Folklore of Computing",
    category: "Humor",
    initials: "AH"
  },
  {
    id: 11,
    quote: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
    role: "Creator of Scriptaculous & Zepto.js",
    category: "UX & Reliability",
    initials: "TF"
  },
  {
    id: 12,
    quote: "Software is a great combination between artistry and engineering.",
    author: "Bill Gates",
    role: "Co-Founder of Microsoft",
    category: "Vision",
    initials: "BG"
  },
  {
    id: 13,
    quote: "Controlling complexity is the essence of computer programming.",
    author: "Brian Kernighan",
    role: "Co-creator of AWK and Unix Pioneer",
    category: "Architecture",
    initials: "BK"
  },
  {
    id: 14,
    quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    author: "Brian Kernighan",
    role: "Co-creator of AWK and Unix Pioneer",
    category: "Debugging",
    initials: "BK"
  },
  {
    id: 15,
    quote: "The most important property of a program is whether it accomplishes the intention of its user.",
    author: "C.A.R. Hoare",
    role: "Computer Scientist",
    category: "Product & Purpose",
    initials: "CH"
  },
  {
    id: 16,
    quote: "Walking on water and developing software from a specification are easy if both are frozen.",
    author: "Edward V. Berard",
    role: "Software Engineer",
    category: "Design",
    initials: "EB"
  },
  {
    id: 17,
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
    role: "Software Architect & Speaker",
    category: "Clean Code",
    initials: "CH"
  },
  {
    id: 18,
    quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    author: "Dan Salomon",
    role: "Computer Scientist",
    category: "Patience",
    initials: "DS"
  },
  {
    id: 19,
    quote: "Programming isn't about what you know; it's about what you can figure out.",
    author: "Chris Pine",
    role: "Author of Learn to Program",
    category: "Mindset",
    initials: "CP"
  },
  {
    id: 20,
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson & Gerald Jay Sussman",
    role: "Authors of Structure and Interpretation of Computer Programs",
    category: "Philosophy",
    initials: "AS"
  },
  {
    id: 21,
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
    role: "Adapted for Software Engineering",
    category: "Growth",
    initials: "OW"
  },
  {
    id: 22,
    quote: "The function of good software is to make the complex appear to be simple.",
    author: "Grady Booch",
    role: "Software Engineering Pioneer & UML Co-creator",
    category: "Simplicity",
    initials: "GB"
  },
  {
    id: 23,
    quote: "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.",
    author: "John Romero",
    role: "Game Designer & Co-creator of DOOM",
    category: "Creativity",
    initials: "JR"
  },
  {
    id: 24,
    quote: "The analytical engine weaves algebraical patterns just as the Jacquard-loom weaves flowers and leaves.",
    author: "Ada Lovelace",
    role: "World's First Computer Programmer",
    category: "Pioneers",
    initials: "AL"
  },
  {
    id: 25,
    quote: "It is much easier to apologize than it is to get permission.",
    author: "Grace Hopper",
    role: "Rear Admiral & Pioneer of COBOL / Compilers",
    category: "Innovation",
    initials: "GH"
  },
  {
    id: 26,
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    author: "Alan Turing",
    role: "Father of Modern Computer Science & AI",
    category: "Vision",
    initials: "AT"
  },
  {
    id: 27,
    quote: "Simplicity is about subtracting the obvious and adding the meaningful.",
    author: "John Maeda",
    role: "Author of The Laws of Simplicity",
    category: "Design",
    initials: "JM"
  },
  {
    id: 28,
    quote: "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan J. Perlis",
    role: "First Recipient of the ACM Turing Award",
    category: "Mastery",
    initials: "AP"
  },
  {
    id: 29,
    quote: "There are only two hard things in Computer Science: cache invalidation and naming things.",
    author: "Phil Karlton",
    role: "Netscape Architect",
    category: "Engineering",
    initials: "PK"
  },
  {
    id: 30,
    quote: "Focus is a matter of deciding what things you're not going to do.",
    author: "John Carmack",
    role: "Legendary 3D Engine Creator & Programmer",
    category: "Focus",
    initials: "JC"
  }
];

// ==========================================================================
// 2. Sound Effects Engine (Synthesized via Web Audio API)
// ==========================================================================
class SoundEngine {
  constructor() {
    this.enabled = localStorage.getItem('devspace_sound_enabled') !== 'false';
    this.ctx = null;
    this.initElements();
  }

  initElements() {
    this.toggleBtn = document.getElementById('soundToggleBtn');
    this.updateUI();

    this.toggleBtn?.addEventListener('click', () => {
      this.enabled = !this.enabled;
      localStorage.setItem('devspace_sound_enabled', this.enabled);
      this.updateUI();
      if (this.enabled) this.playTone(520, 'sine', 0.08);
    });
  }

  updateUI() {
    if (!this.toggleBtn) return;
    this.toggleBtn.innerHTML = this.enabled 
      ? '<i class="fa-solid fa-volume-high"></i>' 
      : '<i class="fa-solid fa-volume-xmark" style="color: var(--text-muted);"></i>';
    this.toggleBtn.title = this.enabled ? "Disable Sound Effects" : "Enable Sound Effects";
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq = 440, type = 'sine', duration = 0.1, gainVal = 0.08) {
    if (!this.enabled) return;
    try {
      this.ensureContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy or error
    }
  }

  playPop() {
    this.playTone(600, 'triangle', 0.05, 0.05);
  }

  playSuccess() {
    if (!this.enabled) return;
    this.playTone(587.33, 'sine', 0.08, 0.06);
    setTimeout(() => this.playTone(880, 'sine', 0.15, 0.07), 80);
  }

  playQuoteChime() {
    if (!this.enabled) return;
    this.playTone(440, 'sine', 0.08, 0.05);
    setTimeout(() => this.playTone(659.25, 'sine', 0.12, 0.06), 70);
  }
}

const sounds = new SoundEngine();

// ==========================================================================
// 3. Toast Feedback System
// ==========================================================================
function showToast(message, icon = 'fa-circle-check') {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  const toastIcon = toast?.querySelector('.toast-icon');

  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  if (toastIcon) {
    toastIcon.className = `fa-solid ${icon} toast-icon`;
  }

  toast.classList.add('show');
  sounds.playPop();

  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// ==========================================================================
// 4. Live Digital Clock & Date Manager
// ==========================================================================
class ClockManager {
  constructor() {
    this.is24Hour = localStorage.getItem('devspace_clock_24h') === 'true';
    this.sessionStart = Date.now();
    this.initElements();
    this.start();
  }

  initElements() {
    this.hoursEl = document.getElementById('clockHours');
    this.minutesEl = document.getElementById('clockMinutes');
    this.secondsEl = document.getElementById('clockSeconds');
    this.periodEl = document.getElementById('clockPeriod');
    this.formatToggleBtn = document.getElementById('formatToggleBtn');
    this.formatLabel = document.getElementById('formatLabel');
    this.dateStrEl = document.getElementById('currentDateStr');
    this.timeZoneEl = document.getElementById('timeZoneText');
    this.dayProgressBar = document.getElementById('dayProgressBar');
    this.dayPercentText = document.getElementById('dayPercentText');
    this.sessionTimerEl = document.getElementById('sessionTimer');

    this.updateToggleLabel();

    this.formatToggleBtn?.addEventListener('click', () => {
      this.is24Hour = !this.is24Hour;
      localStorage.setItem('devspace_clock_24h', this.is24Hour);
      this.updateToggleLabel();
      this.updateClock();
      sounds.playPop();
    });
  }

  updateToggleLabel() {
    if (this.formatLabel) {
      this.formatLabel.textContent = this.is24Hour ? "24H" : "12H";
    }
  }

  start() {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    const now = new Date();

    // Hours, Minutes, Seconds
    let rawHours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let displayHours = rawHours;
    let period = '';

    if (!this.is24Hour) {
      period = rawHours >= 12 ? 'PM' : 'AM';
      displayHours = rawHours % 12;
      if (displayHours === 0) displayHours = 12;
    }

    if (this.hoursEl) this.hoursEl.textContent = String(displayHours).padStart(2, '0');
    if (this.minutesEl) this.minutesEl.textContent = String(minutes).padStart(2, '0');
    if (this.secondsEl) this.secondsEl.textContent = String(seconds).padStart(2, '0');

    if (this.periodEl) {
      if (this.is24Hour) {
        this.periodEl.style.display = 'none';
      } else {
        this.periodEl.style.display = 'block';
        this.periodEl.textContent = period;
      }
    }

    // Full Date String
    if (this.dateStrEl) {
      const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
      this.dateStrEl.textContent = now.toLocaleDateString(undefined, options);
    }

    // Time Zone info
    if (this.timeZoneEl) {
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.timeZoneEl.textContent = tz || "Local Time";
      } catch (e) {
        this.timeZoneEl.textContent = "Local Time";
      }
    }

    // Day Progress Percentage
    const totalSecondsInDay = 24 * 60 * 60;
    const currentSeconds = (rawHours * 3600) + (minutes * 60) + seconds;
    const dayProgress = Math.round((currentSeconds / totalSecondsInDay) * 100);

    if (this.dayProgressBar) this.dayProgressBar.style.width = `${dayProgress}%`;
    if (this.dayPercentText) this.dayPercentText.textContent = `${dayProgress}% of day completed`;

    // Session Uptime Timer
    if (this.sessionTimerEl) {
      const uptimeSec = Math.floor((Date.now() - this.sessionStart) / 1000);
      const uHours = Math.floor(uptimeSec / 3600);
      const uMinutes = Math.floor((uptimeSec % 3600) / 60);
      const uSeconds = uptimeSec % 60;
      this.sessionTimerEl.textContent = 
        `${String(uHours).padStart(2, '0')}:${String(uMinutes).padStart(2, '0')}:${String(uSeconds).padStart(2, '0')}`;
    }
  }
}

// ==========================================================================
// 5. Dynamic Time-of-Day Greeting & User Name Manager
// ==========================================================================
class GreetingManager {
  constructor() {
    this.nameKey = 'devspace_user_name';
    this.defaultName = 'Ayo';
    this.initElements();
    this.updateGreeting();
  }

  initElements() {
    this.iconWrapper = document.getElementById('greetingIcon');
    this.prefixEl = document.getElementById('greetingPrefix');
    this.nameEl = document.getElementById('userNameDisplay');
    this.subtitleEl = document.getElementById('greetingSubtitle');
    this.editBtn = document.getElementById('editNameBtn');

    // Load saved name
    const savedName = localStorage.getItem(this.nameKey) || this.defaultName;
    if (this.nameEl) {
      this.nameEl.textContent = savedName;
    }

    // Edit Name Events
    this.editBtn?.addEventListener('click', () => {
      this.nameEl?.focus();
      // Select text in contenteditable
      const range = document.createRange();
      range.selectNodeContents(this.nameEl);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    });

    this.nameEl?.addEventListener('blur', () => this.saveName());
    this.nameEl?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.nameEl.blur();
      }
    });
  }

  saveName() {
    if (!this.nameEl) return;
    let name = this.nameEl.textContent.trim();
    if (!name) name = this.defaultName;
    this.nameEl.textContent = name;
    localStorage.setItem(this.nameKey, name);
    showToast(`Welcome, ${name}!`);
  }

  updateGreeting() {
    const hour = new Date().getHours();
    let prefix = "Good morning,";
    let iconClass = "fa-solid fa-sun";
    let subtitle = "Ready to craft clean code and make great progress today.";

    if (hour >= 5 && hour < 12) {
      prefix = "Good morning,";
      iconClass = "fa-solid fa-sun";
      subtitle = "Ready to craft clean code and make great progress today.";
    } else if (hour >= 12 && hour < 17) {
      prefix = "Good afternoon,";
      iconClass = "fa-solid fa-sun";
      subtitle = "Maintain momentum and build high-impact solutions.";
    } else if (hour >= 17 && hour < 22) {
      prefix = "Good evening,";
      iconClass = "fa-solid fa-cloud-sun";
      subtitle = "Wrapping up productive commits and reflecting on wins.";
    } else {
      prefix = "Night owl mode,";
      iconClass = "fa-solid fa-moon";
      subtitle = "Quiet hours for deep thinking, learning, and breakthroughs.";
    }

    if (this.prefixEl) this.prefixEl.textContent = prefix;
    if (this.subtitleEl) this.subtitleEl.textContent = subtitle;
    if (this.iconWrapper) {
      this.iconWrapper.innerHTML = `<i class="${iconClass}"></i>`;
    }
  }
}

// ==========================================================================
// 6. Inspirational Coding Quote Generator Engine
// ==========================================================================
class QuoteManager {
  constructor(quotes) {
    this.quotes = quotes;
    this.currentQuote = null;
    this.favoritesKey = 'devspace_favorite_quotes';
    this.favorites = this.loadFavorites();
    this.autoRotateInterval = null;

    this.initElements();
    this.generateRandomQuote(false);
  }

  initElements() {
    this.textEl = document.getElementById('quoteText');
    this.authorEl = document.getElementById('quoteAuthor');
    this.roleEl = document.getElementById('quoteAuthorRole');
    this.avatarEl = document.getElementById('authorAvatar');
    this.categoryEl = document.getElementById('quoteCategory');
    this.authorRowEl = document.querySelector('.quote-author-row');

    this.newBtn = document.getElementById('newQuoteBtn');
    this.copyBtn = document.getElementById('copyQuoteBtn');
    this.favoriteBtn = document.getElementById('favoriteQuoteBtn');
    this.favHeartIcon = document.getElementById('favHeartIcon');
    this.tweetBtn = document.getElementById('tweetQuoteBtn');
    this.autoToggleBtn = document.getElementById('autoRotateToggle');
    this.autoStatus = document.getElementById('autoRotateStatus');

    this.favModal = document.getElementById('favoritesModal');
    this.favModalTrigger = document.getElementById('viewFavoritesBtn');
    this.closeFavModalBtn = document.getElementById('closeFavoritesModalBtn');
    this.favoritesContainer = document.getElementById('favoritesListContainer');
    this.favBadge = document.getElementById('favCountBadge');

    // Attach Listeners
    this.newBtn?.addEventListener('click', () => {
      this.generateRandomQuote(true);
      sounds.playQuoteChime();
    });

    this.copyBtn?.addEventListener('click', () => this.copyQuote());
    this.favoriteBtn?.addEventListener('click', () => this.toggleFavorite());
    this.tweetBtn?.addEventListener('click', () => this.shareQuote());

    this.autoToggleBtn?.addEventListener('click', () => this.toggleAutoRotate());

    this.favModalTrigger?.addEventListener('click', () => this.openFavoritesModal());
    this.closeFavModalBtn?.addEventListener('click', () => this.closeFavoritesModal());
    this.favModal?.addEventListener('click', (e) => {
      if (e.target === this.favModal) this.closeFavoritesModal();
    });

    this.updateFavBadge();
  }

  loadFavorites() {
    try {
      return JSON.parse(localStorage.getItem(this.favoritesKey)) || [];
    } catch (e) {
      return [];
    }
  }

  saveFavorites() {
    localStorage.setItem(this.favoritesKey, JSON.stringify(this.favorites));
    this.updateFavBadge();
  }

  updateFavBadge() {
    if (this.favBadge) {
      this.favBadge.textContent = this.favorites.length;
    }
  }

  generateRandomQuote(animate = true) {
    let nextQuote;
    do {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      nextQuote = this.quotes[randomIndex];
    } while (this.quotes.length > 1 && this.currentQuote && nextQuote.id === this.currentQuote.id);

    this.currentQuote = nextQuote;

    if (animate && this.textEl && this.authorRowEl) {
      this.textEl.classList.add('fade-out');
      this.authorRowEl.classList.add('fade-out');

      setTimeout(() => {
        this.renderQuote(nextQuote);
        this.textEl.classList.remove('fade-out');
        this.authorRowEl.classList.remove('fade-out');
      }, 350);
    } else {
      this.renderQuote(nextQuote);
    }
  }

  renderQuote(q) {
    if (!q) return;
    if (this.textEl) this.textEl.textContent = `"${q.quote}"`;
    if (this.authorEl) this.authorEl.textContent = q.author;
    if (this.roleEl) this.roleEl.textContent = q.role;
    if (this.avatarEl) this.avatarEl.textContent = q.initials;
    if (this.categoryEl) this.categoryEl.textContent = q.category;

    this.updateFavoriteHeart();
  }

  isFavorited(id) {
    return this.favorites.some(item => item.id === id);
  }

  updateFavoriteHeart() {
    if (!this.favHeartIcon || !this.currentQuote) return;
    const favorited = this.isFavorited(this.currentQuote.id);
    if (favorited) {
      this.favHeartIcon.className = 'fa-solid fa-heart';
      this.favHeartIcon.style.color = 'var(--danger)';
    } else {
      this.favHeartIcon.className = 'fa-regular fa-heart';
      this.favHeartIcon.style.color = '';
    }
  }

  toggleFavorite() {
    if (!this.currentQuote) return;
    const existsIndex = this.favorites.findIndex(item => item.id === this.currentQuote.id);
    if (existsIndex > -1) {
      this.favorites.splice(existsIndex, 1);
      showToast('Removed from favorites', 'fa-heart-crack');
    } else {
      this.favorites.push(this.currentQuote);
      showToast('Saved to favorites!', 'fa-heart');
    }
    this.saveFavorites();
    this.updateFavoriteHeart();
  }

  copyQuote() {
    if (!this.currentQuote) return;
    const textToCopy = `"${this.currentQuote.quote}" — ${this.currentQuote.author}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast('Quote copied to clipboard!');
      sounds.playSuccess();
    }).catch(() => {
      showToast('Could not copy quote', 'fa-triangle-exclamation');
    });
  }

  shareQuote() {
    if (!this.currentQuote) return;
    const text = `"${this.currentQuote.quote}" — ${this.currentQuote.author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&hashtags=DevWisdom,Coding`;
    window.open(url, '_blank');
  }

  toggleAutoRotate() {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
      this.autoRotateInterval = null;
      if (this.autoStatus) this.autoStatus.textContent = 'Off';
      showToast('Auto-quote refresh disabled');
    } else {
      this.autoRotateInterval = setInterval(() => {
        this.generateRandomQuote(true);
      }, 25000);
      if (this.autoStatus) this.autoStatus.textContent = 'On';
      showToast('Auto-quote refresh enabled (25s)', 'fa-clock');
    }
    sounds.playPop();
  }

  openFavoritesModal() {
    if (!this.favModal || !this.favoritesContainer) return;
    this.favoritesContainer.innerHTML = '';

    if (this.favorites.length === 0) {
      this.favoritesContainer.innerHTML = `
        <div class="empty-task-placeholder">
          <i class="fa-regular fa-bookmark" style="font-size: 2rem; margin-bottom: 0.5rem; display: block; opacity: 0.4;"></i>
          No favorite quotes saved yet. Click the heart icon on any quote to save it!
        </div>
      `;
    } else {
      this.favorites.forEach((fav) => {
        const item = document.createElement('div');
        item.className = 'saved-quote-item';
        item.innerHTML = `
          <p class="saved-quote-text">"${fav.quote}"</p>
          <div class="saved-quote-footer">
            <span><strong>${fav.author}</strong> · ${fav.category}</span>
            <button class="btn-text" data-remove-id="${fav.id}" style="color: var(--danger);">
              <i class="fa-solid fa-trash-can"></i> Remove
            </button>
          </div>
        `;

        item.querySelector(`[data-remove-id="${fav.id}"]`)?.addEventListener('click', () => {
          this.favorites = this.favorites.filter(f => f.id !== fav.id);
          this.saveFavorites();
          this.openFavoritesModal();
          this.updateFavoriteHeart();
          sounds.playPop();
        });

        this.favoritesContainer.appendChild(item);
      });
    }

    this.favModal.classList.add('open');
    sounds.playPop();
  }

  closeFavoritesModal() {
    this.favModal?.classList.remove('open');
  }
}

// ==========================================================================
// 7. Daily Focus & Tasks Tracker
// ==========================================================================
class TaskManager {
  constructor() {
    this.tasksKey = 'devspace_tasks_list';
    this.tasks = this.loadTasks();
    this.currentFilter = 'all';
    this.initElements();
    this.render();
  }

  initElements() {
    this.form = document.getElementById('addTaskForm');
    this.input = document.getElementById('taskInput');
    this.list = document.getElementById('taskList');
    this.statsText = document.getElementById('taskStatsText');
    this.clearDoneBtn = document.getElementById('clearCompletedTasksBtn');
    this.filterBtns = document.querySelectorAll('.filter-btn');

    this.form?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addTask();
    });

    this.clearDoneBtn?.addEventListener('click', () => {
      const prevCount = this.tasks.length;
      this.tasks = this.tasks.filter(t => !t.completed);
      if (this.tasks.length < prevCount) {
        this.saveTasks();
        this.render();
        showToast('Cleared completed tasks');
        sounds.playPop();
      }
    });

    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentFilter = btn.dataset.filter;
        this.render();
      });
    });
  }

  loadTasks() {
    try {
      const saved = JSON.parse(localStorage.getItem(this.tasksKey));
      if (Array.isArray(saved) && saved.length > 0) return saved;
    } catch (e) {}

    // Default Starter Tasks
    return [
      { id: 't1', text: 'Review pull requests and code diffs', completed: true },
      { id: 't2', text: 'Design new architecture for dashboard widget', completed: false },
      { id: 't3', text: 'Take a 5-minute walk and stay hydrated', completed: false }
    ];
  }

  saveTasks() {
    localStorage.setItem(this.tasksKey, JSON.stringify(this.tasks));
  }

  addTask() {
    const text = this.input?.value.trim();
    if (!text) return;

    const newTask = {
      id: 'task_' + Date.now(),
      text,
      completed: false
    };

    this.tasks.unshift(newTask);
    this.saveTasks();
    this.input.value = '';
    this.render();
    showToast('Task added');
    sounds.playSuccess();
  }

  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
      this.render();
      if (task.completed) {
        sounds.playSuccess();
        showToast('Task completed! Great job.', 'fa-circle-check');
      } else {
        sounds.playPop();
      }
    }
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks();
    this.render();
    sounds.playPop();
  }

  render() {
    if (!this.list) return;
    this.list.innerHTML = '';

    const filtered = this.tasks.filter(t => {
      if (this.currentFilter === 'active') return !t.completed;
      if (this.currentFilter === 'completed') return t.completed;
      return true;
    });

    if (filtered.length === 0) {
      this.list.innerHTML = `
        <div class="empty-task-placeholder">
          ${this.currentFilter === 'completed' ? 'No completed tasks yet.' : 'No tasks in this list. Add a goal above!'}
        </div>
      `;
    } else {
      filtered.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
          <div class="task-left">
            <div class="task-checkbox">
              <i class="fa-solid fa-check"></i>
            </div>
            <span class="task-text">${this.escapeHtml(task.text)}</span>
          </div>
          <button class="task-delete-btn" title="Delete Task" aria-label="Delete Task">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        `;

        li.querySelector('.task-left')?.addEventListener('click', () => this.toggleTask(task.id));
        li.querySelector('.task-delete-btn')?.addEventListener('click', (e) => {
          e.stopPropagation();
          this.deleteTask(task.id);
        });

        this.list.appendChild(li);
      });
    }

    // Update Stats
    const total = this.tasks.length;
    const completed = this.tasks.filter(t => t.completed).length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    if (this.statsText) {
      this.statsText.textContent = `${completed} of ${total} completed (${percent}%)`;
    }
  }

  escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m]));
  }
}

// ==========================================================================
// 8. Focus Pomodoro Timer
// ==========================================================================
class PomodoroTimer {
  constructor() {
    this.totalSeconds = 25 * 60;
    this.remainingSeconds = this.totalSeconds;
    this.timerId = null;
    this.isRunning = false;
    this.sessionCount = 1;

    this.initElements();
  }

  initElements() {
    this.display = document.getElementById('pomoTimerText');
    this.startBtn = document.getElementById('pomoStartBtn');
    this.startText = document.getElementById('pomoStartText');
    this.playIcon = document.getElementById('pomoPlayIcon');
    this.resetBtn = document.getElementById('pomoResetBtn');
    this.circleFill = document.getElementById('pomoCircleFill');
    this.modeBtns = document.querySelectorAll('.pomo-mode-btn');
    this.sessionBadge = document.getElementById('pomoSessionBadge');

    this.startBtn?.addEventListener('click', () => this.toggleTimer());
    this.resetBtn?.addEventListener('click', () => this.resetTimer());

    this.modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const minutes = parseInt(btn.dataset.minutes, 10) || 25;
        this.setMode(minutes);
        sounds.playPop();
      });
    });

    this.updateDisplay();
  }

  setMode(minutes) {
    this.pauseTimer();
    this.totalSeconds = minutes * 60;
    this.remainingSeconds = this.totalSeconds;
    this.updateDisplay();
  }

  toggleTimer() {
    if (this.isRunning) {
      this.pauseTimer();
      sounds.playPop();
    } else {
      this.startTimer();
      sounds.playSuccess();
    }
  }

  startTimer() {
    if (this.isRunning) return;
    this.isRunning = true;
    if (this.startText) this.startText.textContent = 'Pause Focus';
    if (this.playIcon) this.playIcon.className = 'fa-solid fa-pause';

    this.timerId = setInterval(() => {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds--;
        this.updateDisplay();
      } else {
        this.completeSession();
      }
    }, 1000);
  }

  pauseTimer() {
    this.isRunning = false;
    if (this.timerId) clearInterval(this.timerId);
    this.timerId = null;
    if (this.startText) this.startText.textContent = 'Start Focus';
    if (this.playIcon) this.playIcon.className = 'fa-solid fa-play';
  }

  resetTimer() {
    this.pauseTimer();
    this.remainingSeconds = this.totalSeconds;
    this.updateDisplay();
    sounds.playPop();
  }

  completeSession() {
    this.pauseTimer();
    sounds.playSuccess();
    showToast('Focus session complete! Take a breather.', 'fa-trophy');
    this.sessionCount++;
    if (this.sessionBadge) this.sessionBadge.textContent = `Round ${this.sessionCount}`;
    this.remainingSeconds = this.totalSeconds;
    this.updateDisplay();
  }

  updateDisplay() {
    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    if (this.display) {
      this.display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    // Circular SVG Dashoffset calculation (Circumference = 2 * PI * 45 = ~283)
    if (this.circleFill) {
      const circumference = 283;
      const progress = (this.totalSeconds - this.remainingSeconds) / this.totalSeconds;
      const offset = circumference * (1 - progress);
      this.circleFill.style.strokeDashoffset = offset;
    }
  }
}

// ==========================================================================
// 9. Quick Code Scratchpad & Notes
// ==========================================================================
class NotesManager {
  constructor() {
    this.notesKey = 'devspace_scratchpad_notes';
    this.initElements();
  }

  initElements() {
    this.textarea = document.getElementById('scratchpadInput');
    this.copyBtn = document.getElementById('copyNotesBtn');
    this.clearBtn = document.getElementById('clearNotesBtn');
    this.statusText = document.getElementById('notesStatusText');
    this.countText = document.getElementById('notesCountText');

    // Load saved notes
    const saved = localStorage.getItem(this.notesKey);
    if (this.textarea) {
      this.textarea.value = saved !== null ? saved : "// Quick notes, snippets, or thought dumps...\nconst goal = 'Ship remarkable products';";
      this.updateCounts();
    }

    // Auto-save on input
    this.textarea?.addEventListener('input', () => {
      this.updateCounts();
      this.saveNotes();
    });

    this.copyBtn?.addEventListener('click', () => {
      if (!this.textarea) return;
      navigator.clipboard.writeText(this.textarea.value).then(() => {
        showToast('Notes copied to clipboard!');
        sounds.playSuccess();
      });
    });

    this.clearBtn?.addEventListener('click', () => {
      if (this.textarea && confirm('Clear all notes in the scratchpad?')) {
        this.textarea.value = '';
        this.saveNotes();
        this.updateCounts();
        showToast('Scratchpad cleared');
        sounds.playPop();
      }
    });
  }

  updateCounts() {
    if (!this.textarea || !this.countText) return;
    const val = this.textarea.value;
    const chars = val.length;
    const words = val.trim() ? val.trim().split(/\s+/).length : 0;
    this.countText.textContent = `${chars} chars · ${words} words`;
  }

  saveNotes() {
    if (!this.textarea) return;
    localStorage.setItem(this.notesKey, this.textarea.value);
    if (this.statusText) {
      this.statusText.innerHTML = '<i class="fa-solid fa-check"></i> Saved';
    }
  }
}

// ==========================================================================
// 10. Quick Launchpad & Custom Link Shortcuts
// ==========================================================================
class LaunchpadManager {
  constructor() {
    this.shortcutsKey = 'devspace_custom_shortcuts';
    this.customShortcuts = this.loadShortcuts();
    this.initElements();
    this.renderCustomLinks();
  }

  initElements() {
    this.grid = document.getElementById('launchpadGrid');
    this.addBtn = document.getElementById('addShortcutBtn');
    this.modal = document.getElementById('addShortcutModal');
    this.closeBtn = document.getElementById('closeShortcutModalBtn');
    this.cancelBtn = document.getElementById('cancelShortcutBtn');
    this.form = document.getElementById('addShortcutForm');
    this.titleInput = document.getElementById('shortcutTitle');
    this.urlInput = document.getElementById('shortcutUrl');

    this.addBtn?.addEventListener('click', () => {
      this.modal?.classList.add('open');
      this.titleInput?.focus();
      sounds.playPop();
    });

    this.closeBtn?.addEventListener('click', () => this.closeModal());
    this.cancelBtn?.addEventListener('click', () => this.closeModal());
    this.modal?.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal();
    });

    this.form?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addCustomShortcut();
    });
  }

  closeModal() {
    this.modal?.classList.remove('open');
  }

  loadShortcuts() {
    try {
      return JSON.parse(localStorage.getItem(this.shortcutsKey)) || [];
    } catch (e) {
      return [];
    }
  }

  saveShortcuts() {
    localStorage.setItem(this.shortcutsKey, JSON.stringify(this.customShortcuts));
  }

  addCustomShortcut() {
    const title = this.titleInput?.value.trim();
    let url = this.urlInput?.value.trim();
    if (!title || !url) return;

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    this.customShortcuts.push({ id: 'sc_' + Date.now(), title, url });
    this.saveShortcuts();
    this.renderCustomLinks();

    this.titleInput.value = '';
    this.urlInput.value = '';
    this.closeModal();
    showToast(`Added ${title} shortcut!`);
    sounds.playSuccess();
  }

  renderCustomLinks() {
    if (!this.grid) return;
    // Remove existing custom items
    this.grid.querySelectorAll('.custom-launch-item').forEach(el => el.remove());

    this.customShortcuts.forEach(sc => {
      const a = document.createElement('a');
      a.href = sc.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'launch-item custom-launch-item';
      a.innerHTML = `
        <div class="launch-icon custom"><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
        <span class="launch-title">${sc.title}</span>
      `;
      this.grid.appendChild(a);
    });
  }
}

// ==========================================================================
// 11. Theme Switcher & Search Bar
// ==========================================================================
class ThemeManager {
  constructor() {
    this.themeKey = 'devspace_theme_accent';
    this.init();
  }

  init() {
    const saved = localStorage.getItem(this.themeKey) || 'cyan';
    this.setTheme(saved);

    const dots = document.querySelectorAll('.theme-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const accent = dot.dataset.accent;
        this.setTheme(accent);
        sounds.playPop();
      });
    });
  }

  setTheme(accent) {
    document.body.setAttribute('data-theme', accent);
    localStorage.setItem(this.themeKey, accent);

    document.querySelectorAll('.theme-dot').forEach(dot => {
      dot.classList.toggle('active', dot.dataset.accent === accent);
    });
  }
}

// Web Search Handler
function initSearchBar() {
  const searchInput = document.getElementById('webSearchInput');
  searchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (!query) return;

      if (/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i.test(query)) {
        const url = query.startsWith('http') ? query : `https://${query}`;
        window.open(url, '_blank');
      } else {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
      }
      searchInput.value = '';
    }
  });
}

// ==========================================================================
// 12. Application Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  new ClockManager();
  new GreetingManager();
  new QuoteManager(CODING_QUOTES);
  new TaskManager();
  new PomodoroTimer();
  new NotesManager();
  new LaunchpadManager();
  new ThemeManager();
  initSearchBar();
});
