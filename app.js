function Pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let modalidadeSelecionada = document.getElementById("filtro-modalidade").value;
    let filtroTrofeus = document.getElementById("filtro-trofeus").value;

    if (!campoPesquisa && modalidadeSelecionada === "all" && filtroTrofeus === "all") {
        mostrarTodosAtletas();
        return;
    }

    let resultados = "";
    let dadosFiltrados = dados.filter(dado => {
        let matchPesquisa = !campoPesquisa || 
            dado.titulo.toLowerCase().includes(campoPesquisa) || 
            dado.descricao.toLowerCase().includes(campoPesquisa) || 
            dado.tags.toLowerCase().includes(campoPesquisa);

        let matchModalidade = modalidadeSelecionada === "all" || 
            dado.modalidade === modalidadeSelecionada;

        let matchTrofeus = filtroTrofeus === "all" || 
            (filtroTrofeus === "com-trofeus" && dado.trofeus && dado.trofeus.length > 0) ||
            (filtroTrofeus === "sem-trofeus" && (!dado.trofeus || dado.trofeus.length === 0));

        return matchPesquisa && matchModalidade && matchTrofeus;
    });

    if (dadosFiltrados.length === 0) {
        section.innerHTML = "<p class='no-results'>Nenhum atleta encontrado com os critérios selecionados.</p>";
        return;
    }

    dadosFiltrados.forEach(dado => {
        resultados += `
            <div class="item-resultado">
                <img src="${dado.foto}" alt="${dado.titulo}">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                
                <div class="trofeus-container">
                    <h3><i class="fas fa-trophy"></i> Conquistas</h3>
                    <div class="trofeus-lista">
                        ${dado.trofeus ? dado.trofeus.map(trofeu => `
                            <span class="trofeu-item">${trofeu}</span>
                        `).join('') : '<span class="sem-trofeus">Ainda sem troféus registrados</span>'}
                    </div>
                </div>

                <div class="links-container">
                    <a href="${dado.link}" target="_blank">
                        <i class="fas fa-info-circle"></i> Mais Informações
                    </a>
                    ${dado.redeSocial ? `
                        <a href="${dado.redeSocial}" target="_blank">
                            <i class="fas fa-user"></i> Rede Social
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
    });

    section.innerHTML = resultados;
}

function mostrarTodosAtletas() {
    const section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    dados.forEach(dado => {
        resultados += `
            <div class="item-resultado">
                <img src="${dado.foto}" alt="${dado.titulo}">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                
                <div class="trofeus-container">
                    <h3><i class="fas fa-trophy"></i> Conquistas</h3>
                    <div class="trofeus-lista">
                        ${dado.trofeus ? dado.trofeus.map(trofeu => `
                            <span class="trofeu-item">${trofeu}</span>
                        `).join('') : '<span class="sem-trofeus">Ainda sem troféus registrados</span>'}
                    </div>
                </div>

                <div class="links-container">
                    <a href="${dado.link}" target="_blank">
                        <i class="fas fa-info-circle"></i> Mais Informações
                    </a>
                    ${dado.redeSocial ? `
                        <a href="${dado.redeSocial}" target="_blank">
                            <i class="fas fa-user"></i> Rede Social
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
    });

    section.innerHTML = resultados;
}

// Carregar todos os atletas ao iniciar a página
window.onload = mostrarTodosAtletas;


