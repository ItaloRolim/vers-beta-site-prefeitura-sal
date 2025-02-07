    // Menu telas maiores 
    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.getElementById('menu-toggle');
        const closeMenu = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const submenuToggles = document.querySelectorAll('.submenu-toggle');

        function toggleMobileMenu() {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        menuToggle.addEventListener('click', toggleMobileMenu);
        closeMenu.addEventListener('click', toggleMobileMenu);

        submenuToggles.forEach(toggle => {
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                const submenu = this.nextElementSibling;
                const chevron = this.querySelector('.fa-chevron-down');

                // Fecha todos os outros submenus
                submenuToggles.forEach(otherToggle => {
                    if (otherToggle !== this) {
                        const otherSubmenu = otherToggle.nextElementSibling;
                        const otherChevron = otherToggle.querySelector('.fa-chevron-down');
                        if (otherSubmenu && otherChevron) {
                            otherSubmenu.classList.remove('show');
                            otherChevron.classList.remove('rotate-180');
                        }
                    }
                });

                // Alterna a visibilidade do submenu atual
                submenu.classList.toggle('show');
                chevron.classList.toggle('rotate-180');
            });
        });

        // Fecha os submenus quando clicar fora deles
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.submenu-toggle') && !e.target.closest('.submenu')) {
                submenuToggles.forEach(toggle => {
                    const submenu = toggle.nextElementSibling;
                    const chevron = toggle.querySelector('.fa-chevron-down');
                    if (submenu && chevron) {
                        submenu.classList.remove('show');
                        chevron.classList.remove('rotate-180');
                    }
                });
            }
        });
    });

    // Menu telas menores
    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.getElementById('menu-toggle');
        const closeMenu = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const submenuToggles = document.querySelectorAll('.submenu-toggle');

        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('translate-x-0');
        });

        closeMenu.addEventListener('click', function () {
            mobileMenu.classList.remove('translate-x-0');
        });

        submenuToggles.forEach(toggle => {
            toggle.addEventListener('click', function () {
                const submenu = this.nextElementSibling;
                submenu.classList.toggle('hidden');
                this.querySelector('.fa-chevron-down').classList.toggle('rotate-180');
            });
        });
    });


    // Menu geral
    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.getElementById('menu-toggle');
        const closeMenu = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const submenuToggles = document.querySelectorAll('.submenu-toggle');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
        });

        submenuToggles.forEach(toggle => {
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                const submenu = this.nextElementSibling;
                const chevron = this.querySelector('.fa-chevron-down');

                // Fecha todos os outros submenus
                submenuToggles.forEach(otherToggle => {
                    if (otherToggle !== this) {
                        otherToggle.nextElementSibling.classList.add('hidden');
                        otherToggle.querySelector('.fa-chevron-down').classList.remove('rotate-180');
                    }
                });

                // Alterna a visibilidade do submenu atual
                submenu.classList.toggle('hidden');
                chevron.classList.toggle('rotate-180');
            });
        });

        // Fecha os submenus quando clicar fora deles
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.group') && !e.target.closest('.submenu-toggle')) {
                submenuToggles.forEach(toggle => {
                    toggle.nextElementSibling.classList.add('hidden');
                    toggle.querySelector('.fa-chevron-down').classList.remove('rotate-180');
                });
            }
        });
    });

    