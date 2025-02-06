
    let currentStep = 1;
    const totalSteps = 4;

    function showStep(step) {
        document.querySelectorAll('.step').forEach(el => el.classList.add('hidden'));
        document.getElementById(`step${step}`).classList.remove('hidden');

        // Controla visibilidade dos botões
        document.getElementById('prevBtn').classList.toggle('hidden', step === 1);
        document.getElementById('nextBtn').classList.toggle('hidden', step === totalSteps);
        document.getElementById('submitBtn').classList.toggle('hidden', step !== totalSteps);

        // Atualiza os indicadores de etapa para pink-600 apenas até a etapa atual
        for (let i = 1; i <= totalSteps; i++) {
            const indicator = document.getElementById(`indicator${i}`);
            if (i <= step) {
                indicator.classList.add('bg-green-600', 'text-white');
                indicator.classList.remove('bg-gray-300', 'text-gray-600');
            } else {
                indicator.classList.remove('bg-green-600', 'text-white');
                indicator.classList.add('bg-gray-300', 'text-gray-600');
            }
        }
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentStep < totalSteps) {
            currentStep++;
            showStep(currentStep);
            if (currentStep === totalSteps) {
                updateResumo();
            }
        }
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    });

    document.getElementById('submitBtn').addEventListener('click', () => {
        if (document.getElementById('termos').checked) {
            document.getElementById('confirmationModal').classList.remove('hidden');
        } else {
            alert('Por favor, aceite os termos e condições para continuar.');
        }
    });

    function updateResumo() {
        // Simulação de preenchimento do resumo
        document.getElementById('resumo-dados-pessoais').innerHTML = `
            <p>Nome: João da Silva</p>
            <p>CPF: 123.456.789-00</p>
            <p>Telefone: (11) 98765-4321</p>
            <p>E-mail: joãodasilva22@gmail.com</p>
            `;

        document.getElementById('resumo-documentos').innerHTML = `
            <p>RG: 12.345.678-9</p>
            <p>Cartão SUS: 123456789012345</p>
            `;

        document.getElementById('resumo-agendamento').innerHTML = `
            <p>Unidade: UBS Central</p>
            <p>Especialidade: Clínico Geral</p>
            <p>Data: 01/12/2024</p>
            `;
    }

    // Script para abrir e fechar o menu 
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }
    

    // Inicialização
    showStep(1);
