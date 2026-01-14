let grafico = null;
let idEditando = null;

// Formatador de moeda (Reais R$)
const moneyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

document.addEventListener("DOMContentLoaded", () => {
    carregarDados();
    configurarFormulario();
});

function configurarFormulario() {
    const form = document.getElementById("finance-form");

    if (!form) {
        console.error("Formulário não encontrado!");
        return;
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const dados = {
            tipo: document.getElementById("tipo").value,
            descricao: document.getElementById("descricao").value.trim(),
            valor: parseFloat(document.getElementById("valor").value)
        };

        if (!dados.descricao || isNaN(dados.valor)) {
            alert("Preencha todos os campos corretamente.");
            return;
        }

        const url = idEditando ? `/editar/${idEditando}` : "/adicionar";
        const metodo = idEditando ? "PUT" : "POST";

        try {
            const response = await fetch(url, {
                method: metodo,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados)
            });

            if (response.ok) {
                form.reset();
                idEditando = null;
                document.getElementById("btn-submit").textContent = "Adicionar";
                carregarDados();
            } else {
                console.error("Erro na resposta do servidor");
            }
        } catch (erro) {
            console.error("Erro ao salvar:", erro);
        }
    });
}

async function carregarDados() {
    try {
        const res = await fetch("/dados");
        const dados = await res.json();
        processarLancamentos(dados);
    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
    }
}

function processarLancamentos(dados) {
    let ganhos = 0;
    let despesas = 0;
    const lista = document.getElementById("lista-lancamentos");
    lista.innerHTML = "";

    dados.forEach(item => {
        const [id, tipo, descricao, valor] = item;
        if (tipo === "ganho") ganhos += valor;
        else despesas += valor;

        const li = criarElementoLista(id, tipo, descricao, valor);
        lista.appendChild(li);
    });

    atualizarInterface(ganhos, despesas);
}

function criarElementoLista(id, tipo, descricao, valor) {
    const li = document.createElement("li");
    const corValor = tipo === 'ganho' ? '#10b981' : '#ef4444';

    li.innerHTML = `
        <div>
            <small style="color: var(--text-muted); display: block;">${tipo.toUpperCase()}</small>
            <strong>${descricao}</strong>
        </div>
        <div style="display: flex; align-items: center; gap: 15px;">
            <span style="color: ${corValor}; font-weight: 600;">${moneyFormatter.format(valor)}</span>
            <div class="acoes">
                <button title="Editar" onclick="prepararEdicao(${id}, '${tipo}', '${descricao}', ${valor})">✏️</button>
                <button title="Excluir" onclick="excluirLancamento(${id})">🗑️</button>
            </div>
        </div>
    `;
    return li;
}

function atualizarInterface(ganhos, despesas) {
    const saldo = ganhos - despesas;

    const elGanhos = document.getElementById("ganhos");
    const elDespesas = document.getElementById("despesas");
    const elSaldo = document.getElementById("saldo");

    // Pegar valor numérico atual para animar a partir dele
    const parse = (txt) => parseFloat(txt.replace(/[^\d,-]/g, '').replace(',', '.')) || 0;

    animarNumero(elGanhos, parse(elGanhos.textContent), ganhos, 600);
    animarNumero(elDespesas, parse(elDespesas.textContent), despesas, 600);
    animarNumero(elSaldo, parse(elSaldo.textContent), saldo, 800);

    elSaldo.style.color = saldo < 0 ? "#ef4444" : "#10b981";
    atualizarGrafico(ganhos, despesas);
}

function animarNumero(elemento, inicio, fim, duracao) {
    let start = null;
    function passo(timestamp) {
        if (!start) start = timestamp;
        const progresso = Math.min((timestamp - start) / duracao, 1);
        const valorAtual = inicio + (fim - inicio) * progresso;
        elemento.textContent = moneyFormatter.format(valorAtual);
        if (progresso < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
}

function prepararEdicao(id, tipo, descricao, valor) {
    idEditando = id;
    document.getElementById("tipo").value = tipo;
    document.getElementById("descricao").value = descricao;
    document.getElementById("valor").value = valor;
    document.getElementById("btn-submit").textContent = "Atualizar";
    document.getElementById("descricao").focus();
}

async function excluirLancamento(id) {
    if (confirm("Tem certeza que deseja excluir?")) {
        await fetch(`/excluir/${id}`, { method: "DELETE" });
        carregarDados();
    }
}

function atualizarGrafico(ganhos, despesas) {
    const canvas = document.getElementById("graficoFinanceiro");
    if (!canvas) return; // Evita erro se o canvas sumir por algum motivo

    const ctx = canvas.getContext("2d");
    if (grafico) grafico.destroy();

    // Se ambos forem zero, o gráfico de rosca fica invisível. 
    // Podemos colocar um valor padrão para ele aparecer cinza, ou apenas checar:
    const total = ganhos + despesas;
    const dadosGrafico = total === 0 ? [1, 1] : [ganhos, despesas];
    const cores = total === 0 ? ["#334155", "#334155"] : ["#10b981", "#ef4444"];

    grafico = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Ganhos", "Despesas"],
            datasets: [{
                data: dadosGrafico,
                backgroundColor: cores,
                borderColor: "#1e293b",
                borderWidth: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { color: '#94a3b8', padding: 20 } }
            },
            cutout: '75%'
        }
    });
}