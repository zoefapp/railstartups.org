class StartupFilter {
    constructor() {
        this.currentFilter = 'all';
        this.currentSearch = '';
        this.init();
    }

    init() {
        this.bindSearchEvents();
        this.bindFilterEvents();
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
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
        card.style.display = 'block';
        
        card.offsetHeight;
        
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    }

    hideCard(card) {
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