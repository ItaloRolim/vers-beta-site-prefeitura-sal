// Code Avisos e contratos de licitações das secretarias 

function showTable(table) {
    document.getElementById('tabelaLicitacoes').classList.add('hidden');
    document.getElementById('tabelaContratos').classList.add('hidden');

    document.getElementById('btnLicitacoes').classList.remove('text-pink-600', 'border-b-2', 'border-pink-600');
    document.getElementById('btnLicitacoes').classList.add('text-gray-500');
    document.getElementById('btnContratos').classList.remove('text-pink-600', 'border-b-2', 'border-pink-600');
    document.getElementById('btnContratos').classList.add('text-gray-500');

    if (table === 'licitacoes') {
        document.getElementById('tabelaLicitacoes').classList.remove('hidden');
        document.getElementById('btnLicitacoes').classList.remove('text-gray-500');
        document.getElementById('btnLicitacoes').classList.add('text-pink-600', 'border-b-2', 'border-pink-600');
    } else {
        document.getElementById('tabelaContratos').classList.remove('hidden');
        document.getElementById('btnContratos').classList.remove('text-gray-500');
        document.getElementById('btnContratos').classList.add('text-pink-600', 'border-b-2', 'border-pink-600');
    }
}