
const setupSearch = () => {
    // Cria o HTML da busca
    const searchHTML = `
<div id="search-overlay" class="hidden fixed inset-0 bg-black bg-opacity-50 z-[9999]"></div>
<div id="search-container" class="hidden fixed top-4 left-4 right-4 md:left-auto md:right-4 md:top-16 md:w-96 bg-white rounded-lg shadow-lg z-[10000]">
    <div class="p-4 border-b">
        <div class="relative flex items-center">
            <i class="fas fa-search absolute left-3 text-gray-400"></i>
            <input 
                type="text" 
                id="search-input"
                class="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite para pesquisar..."
            >
            <button id="close-search" class="absolute right-3 text-gray-400 hover:text-gray-600">
                <i class="fas fa-times"></i>
            </button>
        </div>
    </div>
    <div id="search-results" class="overflow-y-auto max-h-[calc(100vh-200px)] md:max-h-[400px]">
        <div class="p-4 text-center text-gray-500">
            Digite pelo menos 3 caracteres para pesquisar
        </div>
    </div>
</div>
`;

    // Adiciona o HTML ao body se ainda não existir
    if (!document.getElementById('search-container')) {
        document.body.insertAdjacentHTML('beforeend', searchHTML);
    }

    // Elementos
    const searchButtons = document.querySelectorAll('a[href*="pesquisa"]'); // Seleciona todos os botões de pesquisa
    const searchOverlay = document.getElementById('search-overlay');
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    const closeButton = document.getElementById('close-search');
    const resultsContainer = document.getElementById('search-results');

    // Função para mostrar a busca
    const showSearch = (e) => {
        if (e) {
            e.preventDefault(); // Previne a navegação
            e.stopPropagation(); // Impede a propagação do evento
        }
        searchOverlay.classList.remove('hidden');
        searchContainer.classList.remove('hidden');
        searchInput.focus();
        document.body.style.overflow = 'hidden';
    };

    // Função para esconder a busca
    const hideSearch = () => {
        searchOverlay.classList.add('hidden');
        searchContainer.classList.add('hidden');
        searchInput.value = '';
        document.body.style.overflow = '';
        resultsContainer.innerHTML = `
    <div class="p-4 text-center text-gray-500">
        Digite pelo menos 3 caracteres para pesquisar
    </div>
`;
    };

    // Função para realizar a busca
    const performSearch = () => {
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm.length < 3) {
            resultsContainer.innerHTML = `
        <div class="p-4 text-center text-gray-500">
            Digite pelo menos 3 caracteres para pesquisar
        </div>
    `;
            return;
        }

        // Realiza a busca no conteúdo
        const content = document.body.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');
        const results = [];

        content.forEach(element => {
            if (searchContainer.contains(element)) return;

            const text = element.innerText?.trim();
            if (!text || !text.toLowerCase().includes(searchTerm)) return;

            const link = element.closest('a') || element.querySelector('a');
            if (link?.href) {
                results.push({
                    text: text,
                    url: link.href
                });
            }
        });

        // Mostra os resultados
        if (results.length === 0) {
            resultsContainer.innerHTML = `
        <div class="p-4 text-center text-gray-500">
            Nenhum resultado encontrado
        </div>
    `;
        } else {
            resultsContainer.innerHTML = results.map(result => `
        <a href="${result.url}" class="block p-4 hover:bg-gray-50 border-b">
            <div class="text-sm">${result.text}</div>
        </a>
    `).join('');
        }
    };

    // Event Listeners
    searchButtons.forEach(button => {
        // Remove qualquer listener existente
        button.removeEventListener('click', showSearch);
        // Adiciona o novo listener
        button.addEventListener('click', showSearch);
    });

    closeButton?.addEventListener('click', hideSearch);
    searchOverlay?.addEventListener('click', hideSearch);

    let searchTimeout;
    searchInput?.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(performSearch, 300);
    });

    // Fecha com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideSearch();
    });

    // Impede a propagação de cliques dentro do container de busca
    searchContainer?.addEventListener('click', (e) => {
        e.stopPropagation();
    });
};

// Inicializa quando o documento estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupSearch);
} else {
    setupSearch();
}