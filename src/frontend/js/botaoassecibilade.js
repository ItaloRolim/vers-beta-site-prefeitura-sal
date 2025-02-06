// Botão
const accessibilityIcon = document.getElementById('accessibility-icon');
const accessibilityMenu = document.getElementById('accessibility-menu');
const toggleButton = document.getElementById('toggleAccessibilityMenu');
let synthesizer = null;
let isReading = false;

toggleButton.addEventListener('click', () => {
    accessibilityMenu.classList.toggle('hidden');
});

function aumentarFonte() {
    document.body.style.fontSize = (parseFloat(document.body.style.fontSize || '16px') + 2) + 'px';
}

function diminuirFonte() {
    document.body.style.fontSize = (parseFloat(document.body.style.fontSize || '16px') - 2) + 'px';
}

function toggleContraste() {
    document.body.classList.toggle('bg-black');
    document.body.classList.toggle('text-yellow-400');
}

function toggleDestaqueLinks() {
    document.querySelectorAll('a').forEach(link => {
        link.classList.toggle('bg-yellow-300');
        link.classList.toggle('text-red-600');
        link.classList.toggle('font-bold');
    });
}

function toggleLeituraAutomatica() {
    // Verificar suporte para Web Speech API
    if (!('speechSynthesis' in window)) {
        alert('Seu navegador não suporta leitura de texto.');
        return;
    }

    if (!synthesizer) {
        synthesizer = window.speechSynthesis;
    }

    if (isReading) {
        synthesizer.cancel();
        isReading = false;
        return;
    }

    // Coletar todo o texto visível da página
    const textoParaLer = document.body.innerText;

    // Criar objeto de fala
    const utterance = new SpeechSynthesisUtterance(textoParaLer);

    // Configurações de voz
    utterance.lang = 'pt-BR';
    utterance.rate = 0.9;
    utterance.pitch = 1;

    // Eventos de leitura
    utterance.onstart = () => {
        isReading = true;
        console.log('Leitura iniciada');
    };

    utterance.onend = () => {
        isReading = false;
        console.log('Leitura finalizada');
    };

    // Iniciar leitura
    synthesizer.speak(utterance);
}

