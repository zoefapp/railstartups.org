class StartupFilter {
    constructor() {
        this.currentFilter = 'all';
        this.currentSearch = '';
        this.originalHeight = null;
        this.init();
    }

    init() {
        this.bindSearchEvents();
        this.bindFilterEvents();
        this.captureOriginalHeight();
        this.animateCardsOnLoad();
    }

    animateCardsOnLoad() {
        const cards = document.querySelectorAll('.startup-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100); // 100ms delay between each card
        });
    }

    captureOriginalHeight() {
        const grid = document.getElementById('startups-grid');
        if (grid) {
            this.originalHeight = grid.offsetHeight;
            grid.style.minHeight = this.originalHeight + 'px';
        }
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
        const inactiveClass = 'bg-teal-200 hover:bg-teal-300 border-transparent px-4 tracking-wider py-1 text-xs rounded-sm border uppercase transition-all active:translate-y-0.5';
        const activeClass = 'bg-teal-300 border border-teal-500 px-4 tracking-wider py-1 text-xs rounded-sm uppercase transition-all active:translate-y-0.5';
        
        filterButtons.forEach(btn => {
            btn.className = inactiveClass;
        });
        
        activeButton.className = activeClass;
    }

    filterStartups() {
        const cards = document.querySelectorAll('.startup-card');
        
        cards.forEach(card => {
            const name = card.getAttribute('data-name') || '';
            const categories = card.getAttribute('data-categories') || '';
            
            const matchesSearch = name.includes(this.currentSearch.toLowerCase());
            const matchesFilter = this.currentFilter === 'all' || categories.includes(this.currentFilter);
            
            if (matchesSearch && matchesFilter) {
                this.showCard(card);
            } else {
                this.hideCard(card);
            }
        });
    }

    showCard(card) {
        card.style.display = 'block';
        
        // Reset to original height when showing cards
        const grid = document.getElementById('startups-grid');
        if (grid && this.originalHeight) {
            grid.style.minHeight = this.originalHeight + 'px';
            grid.style.transition = '';
        }
        
        // Animate card in with slight delay
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 50);
    }

    hideCard(card) {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            if (card.style.opacity === '0') {
                card.style.display = 'none';
                this.adjustGridHeight();
            }
        }, 500);
    }

    adjustGridHeight() {
        const grid = document.getElementById('startups-grid');
        if (grid) {
            // Allow height to adjust to new content after cards are hidden
            setTimeout(() => {
                grid.style.minHeight = 'auto';
                grid.style.transition = 'min-height 0.3s ease-in-out';
            }, 100);
        }
    }
}

new StartupFilter();