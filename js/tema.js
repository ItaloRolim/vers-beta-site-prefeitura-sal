
// Seleciona os botões de alternância do tema
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const themeIconMobile = document.getElementById('theme-icon-mobile');

// Função para definir o tema
function setTheme(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeIconMobile.classList.replace('fa-sun', 'fa-moon'); // Atualiza o ícone no menu mobile
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeIconMobile.classList.replace('fa-moon', 'fa-sun'); // Atualiza o ícone no menu mobile
        localStorage.setItem('theme', 'light');
    }
}

// Verifica o tema inicial
function checkInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (savedTheme === null && prefersDarkMode)) {
        setTheme(true);
    } else {
        setTheme(false);
    }
}

// Eventos de clique para alternar tema nos dois botões
function toggleTheme() {
    setTheme(!document.documentElement.classList.contains('dark'));
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);

// Verifica o tema inicial quando a página carregar
checkInitialTheme();
