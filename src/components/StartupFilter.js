class StartupFilter {
    constructor() {
        this.currentFilter = 'all';
        this.currentSearch = '';
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.init();
    }

    init() {
        this.bindSearchEvents();
        this.bindFilterEvents();
        this.animateCardsOnLoad();
    }

    animateCardsOnLoad() {
        const cards = document.querySelectorAll('.startup-card');
        if (this.prefersReducedMotion) {
            cards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'none';
            });
            return;
        }
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    bindSearchEvents() {
        const searchInput = document.getElementById('startup-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentSearch = e.target.value;
                this.filterStartups();
            });
        }
    }

    bindFilterEvents() {
        const filterButtons = document.querySelectorAll('#startup-filters button');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.setActiveFilter(button);
                this.currentFilter = button.getAttribute('data-filter') || 'all';
                this.filterStartups();
            });
        });
    }

    setActiveFilter(activeButton) {
        const filterButtons = document.querySelectorAll('#startup-filters button');
        const inactiveClass = 'bg-slate-100 text-slate-600 border border-slate-200 px-4 tracking-wider py-1.5 text-xs rounded-md uppercase transition-all hover:bg-slate-200 active:translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2';
        const activeClass = 'bg-teal-600 text-white border border-teal-600 text-xs uppercase rounded-md px-4 tracking-wider py-1.5 transition-all hover:bg-teal-700 active:translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2';

        filterButtons.forEach(btn => {
            btn.className = inactiveClass;
            btn.setAttribute('aria-pressed', 'false');
        });

        activeButton.className = activeClass;
        activeButton.setAttribute('aria-pressed', 'true');
    }

    filterStartups() {
        const cards = document.querySelectorAll('.startup-card');
        let visibleCount = 0;

        cards.forEach(card => {
            const name = card.getAttribute('data-name') || '';
            const categories = card.getAttribute('data-categories') || '';

            const matchesSearch = name.includes(this.currentSearch.toLowerCase());
            const matchesFilter = this.currentFilter === 'all' || categories.includes(this.currentFilter);

            if (matchesSearch && matchesFilter) {
                this.showCard(card);
                visibleCount++;
            } else {
                this.hideCard(card);
            }
        });

        this.announceResults(visibleCount);
    }

    announceResults(count) {
        const announcement = document.getElementById('filter-results-announcement');
        if (announcement) {
            announcement.textContent = count === 1
                ? '1 startup found'
                : count + ' startups found';
        }
    }

    showCard(card) {
        card.style.display = 'block';

        if (this.prefersReducedMotion) {
            card.style.opacity = '1';
            card.style.transform = 'none';
            return;
        }

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 50);
    }

    hideCard(card) {
        if (this.prefersReducedMotion) {
            card.style.display = 'none';
            return;
        }

        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';

        setTimeout(() => {
            if (card.style.opacity === '0') {
                card.style.display = 'none';
            }
        }, 500);
    }
}

new StartupFilter();
