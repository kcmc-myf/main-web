document.querySelectorAll('.lang-select').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedLang = this.dataset.language;

        document.querySelectorAll('[data-lang]').forEach(el => {
            el.classList.add('d-none'); // Hide all
            if (el.dataset.lang === selectedLang) {
                el.classList.remove('d-none'); // Show selected
            }
        });
    });
});