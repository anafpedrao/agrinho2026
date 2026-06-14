// Captura dos elementos
const btnAncora = document.getElementById('btn-ancora');
const campoInput = document.getElementById('qtd-praga');
const btnAnalisar = document.getElementById('btn-analisar');
const painelResultado = document.getElementById('painel-resultado');
const txtMensagem = document.getElementById('mensagem');
const txtCampo = document.getElementById('visual-campo');

// --- 2. LÓGICA DE NAVEGAÇÃO SUPER COMPATÍVEL ---

if (btnAncora) {
    btnAncora.addEventListener('click', function() {
        // Coloca o cursor direto no campo de digitação sem disparar o bloqueio de tela do navegador
        campoInput.focus();
    });
}

// Função de Análise Agronômica do MIP
function analisarMIP() {
    const pragaSelecionada = document.getElementById('seletor-praga').value;
    const quantidadeRaw = campoInput.value;
    const quantidade = parseInt(quantidadeRaw) || 0;

    if (quantidadeRaw === "") {
        painelResultado.classList.remove('escondido');
        txtCampo.innerHTML = "⚠️📊";
        txtMensagem.innerHTML = `<strong>Atenção:</strong> Insira a quantidade coletada para calcular.`;
        return;
    }

    painelResultado.classList.remove('escondido');

    if (pragaSelecionada === 'percevejo_marrom') {
        let limitePercevejo = 2; 

        if (quantidade >= limitePercevejo) {
            txtCampo.innerHTML = "🪲🪲⚠️🪲🪲";
            txtMensagem.innerHTML = `<strong>ALERTA DE DANO (NC Superado)!</strong> Encontrados ${quantidade} percevejos/metro (Limite: ${limitePercevejo}). <br><br>
            ❌ <strong>Diagnóstico:</strong> População crítica. O controle é necessário para evitar o teto do NDE. <br>
            💡 <strong>Ação Sustentável:</strong> Priorize o uso de inseticidas seletivos de modo a preservar os polinizadores da lavoura.`;
        } else {
            txtCampo.innerHTML = "🌱🌾🌱🌾🌱";
            txtMensagem.innerHTML = `<strong>LAVOURA EM EQUILÍBRIO!</strong> Encontrados ${quantidade} percevejos/metro (Limite: ${limitePercevejo}). <br><br>
            ✅ <strong>Diagnóstico:</strong> População controlável pelo ecossistema. <br>
            🌿 <strong>Ação Sustentável:</strong> Não aplique agroquímicos. Os predadores naturais dão conta. Você economizou e protegeu a natureza!`;
        }
    } 
    
    else if (pragaSelecionada === 'lagarta_da_soja') {
        let limiteLagarta = 20; 

        if (quantidade >= limiteLagarta) {
            txtCampo.innerHTML = "🐛🐛⚠️🐛🐛";
            txtMensagem.innerHTML = `<strong>ALERTA DE DESFOLHA (NC Superado)!</strong> Encontradas ${quantidade} lagartas/metro (Limite: ${limiteLagarta}). <br><br>
            ❌ <strong>Diagnóstico:</strong> População em nível de dano iminente. <br>
            💡 <strong>Ação Sustentável:</strong> Dê preferência a soluções biológicas (como produtos baseados em <em>Baculovirus</em>) antes de recorrer a químicos pesados.`;
        } else {
            txtCampo.innerHTML = "🌱🐞🌱🐝🌱";
            txtMensagem.innerHTML = `<strong>LAVOURA SEGURA!</strong> Encontradas ${quantidade} lagartas/metro (Limite: ${limiteLagarta}). <br><br>
            ✅ <strong>Diagnóstico:</strong> Sistema em equilíbrio biológico. Nenhuma aplicação recomendada no momento.`;
        }
    }
}

if (btnAnalisar) {
    btnAnalisar.addEventListener('click', analisarMIP);
}