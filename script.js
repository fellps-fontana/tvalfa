document.addEventListener('DOMContentLoaded', () => {

    const firebaseConfig = {
        apiKey: "AIzaSyCsF-HoNFGFRyOryW8LQKHzjRag-j25WPY",
        authDomain: "tvalfa-1d4b4.firebaseapp.com",
        projectId: "tvalfa-1d4b4",
        storageBucket: "tvalfa-1d4b4.firebasestorage.app",
        messagingSenderId: "839566930161",
        appId: "1:839566930161:web:1bd9b221e2947bbe113950",
        measurementId: "G-2207C29KC6"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    const filiais = [
        "002 - Loja Alto da Serra",
        "003 - Loja Agropecuaria Matriz",
        "004 - Loja Planalto Alegre",
        "005 - Loja Sobradinho",
        "006 - Loja Tarumanzinho",
        "007 - Loja Nova Erechim",
        "010 - Loja Quilombo",
        "012 - Loja Jardinopolis",
        "013 - Loja Formosa do Sul",
        "015 - Loja Nova Itaberaba",
        "016 - Silo Aguas de Chapeco",
        "017 - Loja Entre Rios",
        "018 - Loja Santiago",
        "022 - SuperAlfa Chapeco",
        "023 - Silo Quilombo",
        "024 - Loja Xaxim",
        "025 - Loja Coronel Freitas",
        "026 - Loja Caxambu do Sul",
        "027 - Loja Coronel Martins",
        "027 - Silo Coronel Martins",
        "028 - Loja Aguas Chapeco",
        "029 - Loja Guatambu",
        "030 - Silo Mafra",
        "031 - Loja Aguas Frias",
        "032 - Loja Ouro Verde",
        "033 - Loja Marema",
        "034 - Loja Irati",
        "035 - Silo Bom Jesus",
        "036 - Silo Palma Sola",
        "038 - Loja Santo Antonio do Meio",
        "039 - Loja Cambucica",
        "040 - Loja Uniao do Oeste",
        "041 - Loja Aguinhas",
        "042 - Loja Lajeado Grande",
        "044 - Loja Vila Gaucha",
        "045 - Loja Marechal Bormann",
        "046 - Loja Xanxere",
        "050 - Loja Braco do Norte",
        "053 - Loja Linha Sao Felix",
        "054 - Silo Xaxim",
        "055 - Silo Nova Erechin",
        "057 - Silo Caxambu do Sul",
        "058 - Loja Ipuacu",
        "059 - Posto de Combustiveis Alfa Efapi",
        "060 - Loja Sao Domingos",
        "061 - Loja Marata",
        "062 - Loja Sao Donato",
        "063 - Loja Linha Pavao",
        "064 - Posto de Combustivel Alfa Matriz",
        "065 - Loja Vista Alegre",
        "067 - Loja Linha Tigre",
        "068 - Loja Sao Bernardino",
        "070 - Loja Sede Figueira",
        "071 - Silo Cel.Freitas",
        "072 - Silo Campo Ere",
        "074 - Loja Linha Sao Roque",
        "076 - Centro Distribuicao",
        "078 - Silo Tomazelli",
        "081 - Loja Campo Ere",
        "082 - Silo Sao Miguel do Oeste",
        "083 - Loja Sao Miguel do Oeste",
        "084 - Loja Guaraciaba",
        "085 - Loja Sao Jose do Cedro",
        "086 - Silo Sao Jose do Cedro",
        "087 - Silo Guaruja do Sul",
        "088 - Loja Guaruja do Sul",
        "089 - Loja Anchieta",
        "090 - Loja Romelandia",
        "091 - Loja Paraiso",
        "092 - Silo Palma Sola",
        "093 - Loja Rio Verde",
        "094 - Loja Palma Sola",
        "095 - Loja Bom Jesus",
        "096 - Silo Ouro Verde",
        "097 - Loja Abelardo Luz",
        "098 - Loja Itaiopolis",
        "099 - Silo Ipuacu",
        "100 - Loja Canoinhas",
        "101 - Silo Bela Vista",
        "102 - Silo Aparecida",
        "103 - Silo Felipe Schmidt",
        "104 - Silo Irineopolis",
        "105 - Silo Lanca",
        "106 - Loja Santa Cruz",
        "108 - Loja Irineopolis",
        "109 - Loja Bela Vista do Toldo",
        "110 - Loja Porto Uniao",
        "111 - Silo Sao Roque",
        "112 - Loja Agropecuaria Sao Lourenco do Oeste",
        "113 - SuperAlfa Sao Lourenco do Oeste",
        "114 - UPL Ponte Serrada",
        "115 - Silo Sao Lourenco do Oeste",
        "116 - Loja Papanduva",
        "117 - Loja Major Vieira",
        "118 - UPL Palma Sola",
        "119 - Loja Mafra",
        "120 - Industria Oleo e Trigo",
        "121 - Silo Papanduva",
        "122 - Silo Abelardo Luz",
        "123 - Silo Itaiopolis",
        "126 - Loja Rio Negro",
        "128 - Loja Novo Horizonte",
        "129 - Resfriamento de Leite SJCedro",
        "130 - Industria Nutrisoja e Milho Extrusado",
        "131 - Silo Major Vieira",
        "133 - Silo Sao Pascoal",
        "135 - Silo Linha Arvoredo",
        "136 - Loja Bituruna",
        "137 - Loja Vitorino",
        "138 - SuperAlfa São Domingos",
        "139 - UBS Xanxere",
        "140 - Fabrica Racao Bom Jesus",
        "141 - Silo Paula Freitas",
        "142 - Loja Faxinal dos Guedes",
        "143 - Super Coronel Martins",
        "144 - CD CEASA Curitiba",
        "145 - Silo Dourados",
        "146 - Loja Bom Jesus do Sul",
        "147 - Super Bela Vista do Toldo",
        "148 - Silo Canoinhas",
        "149 - Silo Sidrolandia",
        "150 - Fabrica Racao Dourados",
        "151 - Silo Nova Alvorado do Sul",
        "152 - UBS Canoinhas",
        "153 - Resfriamento de Leite Erechim",
        "154 - Loja Erechim",
        "155 - Loja Barra do Rio Azul",
        "156 - Loja Gaurama",
        "158 - Loja Campinas do Sul",
        "159 - Loja Severiano de Almeida",
        "160 - UBS Erechim",
        "161 - Loja Aratiba",
        "162 - Loja Viadutos",
        "163 - Silo Aurea",
        "164 - Silo Viadutos",
        "165 - Silo Erebango",
        "166 - Silo Paulo Bento",
        "167 - Silo Quatro Irmãos",
        "168 - Silo Tres Arroios",
        "169 - Silo Erechim",
        "170 - Loja Aurea",
        "171 - Loja Sao Valentim",
        "173 - Silo Guaraciaba",
        "174 - Cruz Machado",
        "175 - Silo Severiano de Almeida",
        "176 - Loja Santo Antonio do Sudoeste",
        "177 - Silo Sao Sebastiao Xanxere",
        "178 - UBS Chapeco",
        "179 - Silo Sao Domingos",
        "180 - UPL Sidrolandia",
        "181 - Loja Maximiliano de Almeida",
        "182 - Loja Estacao",
        "183 - Silo Campo do Tenente",
        "184 - Loja Rio Negrinho",
        "185 - Silo Palmas",
        "186 - Loja Palmas",
        "187 - Silo Barao do Cotegipe",
        "188 - Moega Santo Antonio do Sudoeste",
        "188 - Silo Santo Antonio do Sudoeste",
        "189 - Loja Tapejara",
        "190 - Silo Rio Negrinho",
        "191 - Silo Paim Filho",
        "192 - Loja Trindade do Sul",
        "192 - Silo Trindade do Sul",
        "193 - Loja Agropecuaria Nonoai",
        "194 - Loja e Silo Nonoai",
        "195 - Silo Nonoai",
        "196 - Loja Tres Palmeiras",
        "197 - Silo Sarandi",
        "198 - Loja Sarandi",
        "199 - Loja e Silo Rio dos Indios",
        "200 - Silo Francisco Beltrao",
        "201 - Loja e Silo Constantina",
        "201 - Loja e Silo Constantina",
        "202 - Loja e Silo Gramado dos Loureiros",
        "203 - Loja Agropecuaria Constantina",
        "205 - Loja Trindade do Sul",
        "206 - Ind. Desativadora de Soja",
        "207 - Ind. Estrusora de Milho",
        "208 - SuperAlfa Faxinal dos Guedes",
        "210 - Loja Agropecuaria Icara",
        "214 - CD Xanxere",
        "215 - Loja Gramado dos Loureiros",
        "216 - Loja Agropecuária Francisco Beltrão",
        "218 - Loja Agropecuaria São Miguel do Oeste",
        "219 - Silo Vargeão",
        "220 - SuperAlfa Passo dos Fortes",
        "223 - Loja Dois Vizinhos",
        "226 - Santa Izabel do Oeste",
        "228 - Loja Agropecuaria Lapa"
    ];

    let unidades = [];
    let tecnicos = [];
    let editDocId = null;
    let editType = null;

    const btnAdicionarUnidade = document.getElementById('btn-adicionar-unidade');
    const btnAdicionarTecnico = document.getElementById('btn-adicionar-tecnico');
    const modalUnidade = document.getElementById('modal-unidade');
    const modalTecnico = document.getElementById('modal-tecnico');
    const closeBtns = document.querySelectorAll('.close-btn');

    const formUnidade = document.getElementById('form-unidade');
    const formTecnico = document.getElementById('form-tecnico');

    const listaUnidades = document.getElementById('lista-unidades');
    const listaTecnicos = document.getElementById('lista-tecnicos');

    const btnExcluirUnidade = document.getElementById('btn-excluir-unidade');
    const btnExcluirTecnico = document.getElementById('btn-excluir-tecnico');

    // Referência para o datalist
    const datalistFiliais = document.getElementById('lista-filiais');

    // Funções de renderização
    const renderUnidades = () => {
        listaUnidades.innerHTML = '';
        unidades.forEach((unidade) => {
            const li = document.createElement('li');
            li.classList.add('two-columns');
            li.innerHTML = `<div class="pill">${unidade.nome}</div><div class="pill">${unidade.previsao}</div>`;
            li.onclick = () => openModal('unidade', unidade.id);
            listaUnidades.appendChild(li);
        });
    };

    const renderTecnicos = () => {
        listaTecnicos.innerHTML = '';
        tecnicos.forEach((tecnico) => {
            const li = document.createElement('li');
            li.classList.add('three-columns');
            li.innerHTML = `
                <div class="pill">${tecnico.nome}</div>
                <div class="pill highlight">${tecnico.local}</div>
                <div class="pill">${tecnico.data}</div>
            `;
            li.onclick = () => openModal('tecnico', tecnico.id);
            listaTecnicos.appendChild(li);
        });
    };

    const atualizarDataChegada = () => {
        const dataHoje = new Date();
        const dataLocal = new Date(dataHoje.getFullYear(), dataHoje.getMonth(), dataHoje.getDate());
        const stringDataHoje = dataLocal.toISOString().slice(0, 10); // Ex: "2025-10-13"

        tecnicos.forEach(tecnico => {
            if (tecnico.data) {                
                if (tecnico.data === stringDataHoje) {
                    tecnico.local = "Matriz";   
                    tecnico.data = "";
                    salvarItem('tecnicos', { local: tecnico.local, data: tecnico.data }, tecnico.id);
                    renderTecnicos();
                }
            }
        });

    }



    const openModal = (type, docId = null) => {
        editType = type;
        editDocId = docId;

        const modal = document.getElementById(`modal-${type}`);
        const form = document.getElementById(`form-${type}`);
        const modalTitle = document.getElementById(`modal-${type}-title`);
        const btnExcluir = document.getElementById(`btn-excluir-${type}`);

        form.reset();

        if (docId !== null) {
            modalTitle.textContent = `Editar ${type === 'unidade' ? 'Unidade' : 'Técnico'}`;
            btnExcluir.style.display = 'block';

            if (type === 'unidade') {
                const item = unidades.find(u => u.id === docId);
                document.getElementById('nome-unidade').value = item.nome;
                document.getElementById('previsao-montagem').value = (item.previsao === "Ainda sem previsão") ? "" : item.previsao;
            } else {
                const item = tecnicos.find(t => t.id === docId);
                document.getElementById('nome-tecnico').value = item.nome;
                document.getElementById('localizacao-tecnico').value = item.local;
                document.getElementById('data-retorno').value = item.data;
            }
        } else {
            modalTitle.textContent = `Cadastrar Novo ${type === 'unidade' ? 'Unidade' : 'Técnico'}`;
            btnExcluir.style.display = 'none';
        }

        modal.style.display = 'flex';
    };

    const closeModal = (type) => {
        document.getElementById(`modal-${type}`).style.display = 'none';
        editDocId = null;
        editType = null;
    };

    const salvarItem = async (colecao, dados, id) => {
        if (id) {
            await db.collection(colecao).doc(id).update(dados);
        } else {
            await db.collection(colecao).add(dados);
        }
    };

    const excluirItem = async (colecao, id) => {
        await db.collection(colecao).doc(id).delete();
    };

    // Inicialização da aplicação
    const preencherDatalist = () => {
        datalistFiliais.innerHTML = '';
        filiais.forEach(filial => {
            const option = document.createElement('option');
            option.value = filial;
            datalistFiliais.appendChild(option);
        });
    };

    // OUVIDORES (LISTENERS) EM TEMPO REAL
    // Ouve as mudanças na coleção 'unidades'
    db.collection('unidades').onSnapshot(snapshot => {
        unidades = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        // ORDENAÇÃO: Dados mais recentes (data) em cima
        unidades.sort((a, b) => {
            const previsaoA = a.previsao === "Ainda sem previsão" ? "9999-12-31" : a.previsao;
            const previsaoB = b.previsao === "Ainda sem previsão" ? "9999-12-31" : b.previsao;
            return previsaoA.localeCompare(previsaoB); // Ordena de forma ascendente
        });

        renderUnidades();
    }, error => {
        console.error("Erro ao ouvir a coleção 'unidades':", error);
    });

    // Ouve as mudanças na coleção 'tecnicos'
    db.collection('tecnicos').onSnapshot(snapshot => {
        tecnicos = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        renderTecnicos();
        atualizarDataChegada();
    }, error => {
        console.error("Erro ao ouvir a coleção 'tecnicos':", error);
    });

    // Event Listeners dos botões e formulários
    btnAdicionarUnidade.addEventListener('click', () => openModal('unidade'));
    btnAdicionarTecnico.addEventListener('click', () => openModal('tecnico'));

    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            closeModal(modal.id.split('-')[1]);
        });
    });

    formUnidade.addEventListener('submit', async (e) => {
        e.preventDefault();
        let previsaoValor = document.getElementById('previsao-montagem').value;
        if (!previsaoValor) {
            previsaoValor = "Ainda sem previsão";
        }
        const dados = {
            nome: document.getElementById('nome-unidade').value,
            previsao: previsaoValor
        };
        await salvarItem('unidades', dados, editDocId);
        closeModal('unidade');
    });

    formTecnico.addEventListener('submit', async (e) => {
        e.preventDefault();
        const dados = {
            nome: document.getElementById('nome-tecnico').value,
            local: document.getElementById('localizacao-tecnico').value,
            data: document.getElementById('data-retorno').value
        };
        await salvarItem('tecnicos', dados, editDocId);
        closeModal('tecnico');
    });

    btnExcluirUnidade.addEventListener('click', async () => {
        if (editDocId !== null) {
            await excluirItem('unidades', editDocId);
            closeModal('unidade');
        }
    });

    btnExcluirTecnico.addEventListener('click', async () => {
        if (editDocId !== null) {
            await excluirItem('tecnicos', editDocId);
            closeModal('tecnico');
        }
    });

    // Chama a função de preenchimento do datalist uma única vez
    preencherDatalist();
});