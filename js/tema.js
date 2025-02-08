// Seleciona os botões de alternância do tema
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const themeIconMobile = document.getElementById('theme-icon-mobile');

// Função para definir o tema
function setTheme(isDark) {
    // Remove qualquer classe de tema existente primeiro
    document.documentElement.classList.remove('dark', 'light');
    
    if (isDark) {
        document.documentElement.classList.add('dark');
        themeIcon?.classList.replace('fa-sun', 'fa-moon');
        themeIconMobile?.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.add('light');
        themeIcon?.classList.replace('fa-moon', 'fa-sun');
        themeIconMobile?.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }
}

// Função para verificar a preferência do sistema
function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Verifica o tema inicial
function checkInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    // Força o tema claro como padrão inicial
    if (!savedTheme) {
        setTheme(false); // Define tema claro
        return;
    }
    
    // Se houver uma preferência salva, use-a
    setTheme(savedTheme === 'dark');
}

// Função para alternar o tema
function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(!isDark);
}

// Adiciona os event listeners
themeToggle?.addEventListener('click', toggleTheme);
themeToggleMobile?.addEventListener('click', toggleTheme);

// Previne flash de tema errado adicionando script no <head>
document.head.insertAdjacentHTML('beforeend', `
    <script>
        try {
            if (localStorage.getItem('theme') !== 'dark') {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
            }
        } catch (e) {}
    </script>
`);

// Inicializa o tema quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', checkInitialTheme);