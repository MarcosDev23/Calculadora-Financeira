💰 Calculadora Financeira

Uma aplicação web moderna para controle financeiro pessoal, desenvolvida com foco em organização, clareza visual e experiência do usuário. O sistema permite gerenciar o fluxo de caixa através de uma interface intuitiva com dashboard em tempo real.
🎯 Objetivo do Projeto

Este projeto foi construído para consolidar conhecimentos em desenvolvimento Full Stack, aplicando regras de negócio reais em um ambiente simulado de gestão financeira.

    Prática Full Stack: Integração entre Python (Back-end) e JavaScript (Front-end).

    Portfólio: Criar uma ferramenta funcional e visualmente polida.

    UX/UI: Implementação de Dark Mode e animações para melhor legibilidade.

🚀 Funcionalidades

    Gestão de Lançamentos: Cadastro de ganhos e despesas com descrição e valor.

    Cálculo Automático: Atualização instantânea de ganhos totais, despesas e saldo líquido.

    Dashboard Interativo: Visualização de dados através de gráficos dinâmicos alimentados pela biblioteca Chart.js.

    Extrato Detalhado: Listagem de transações com opções para Editar ou Excluir.

    Interface Premium: Design em Dark Mode com layout responsivo e feedbacks visuais coloridos para saldos.


    Camada	Tecnologia
    Backend	Python, Flask, SQLite
    Frontend	HTML5, CSS3, JavaScript (ES6+), Chart.js
    Ferramentas	Git, GitHub, Virtualenv



Este é um modelo de README.md otimizado, utilizando as informações que você forneceu. Ele foi estruturado para ser visualmente atraente e profissional, ideal para o seu portfólio no GitHub.
💰 Calculadora Financeira

Uma aplicação web moderna para controle financeiro pessoal, desenvolvida com foco em organização, clareza visual e experiência do usuário. O sistema permite gerenciar o fluxo de caixa através de uma interface intuitiva com dashboard em tempo real.
🎯 Objetivo do Projeto

Este projeto foi construído para consolidar conhecimentos em desenvolvimento Full Stack, aplicando regras de negócio reais em um ambiente simulado de gestão financeira.

    Prática Full Stack: Integração entre Python (Back-end) e JavaScript (Front-end).

    Portfólio: Criar uma ferramenta funcional e visualmente polida.

    UX/UI: Implementação de Dark Mode e animações para melhor legibilidade.

🚀 Funcionalidades

    Gestão de Lançamentos: Cadastro de ganhos e despesas com descrição e valor.

    Cálculo Automático: Atualização instantânea de ganhos totais, despesas e saldo líquido.

    Dashboard Interativo: Visualização de dados através de gráficos dinâmicos alimentados pela biblioteca Chart.js.

    Extrato Detalhado: Listagem de transações com opções para Editar ou Excluir.

    Interface Premium: Design em Dark Mode com layout responsivo e feedbacks visuais coloridos para saldos.

🛠️ Tecnologias Utilizadas
Camada	Tecnologia
Backend	Python, Flask, SQLite
Frontend	HTML5, CSS3, JavaScript (ES6+), Chart.js
Ferramentas	Git, GitHub, Virtualenv


📁 Estrutura do Projeto
Calculadora-Financeira/
├── app.py                # Servidor Flask e rotas
├── criar_banco.py        # Script de inicialização do SQLite
├── requirements.txt      # Dependências do projeto
├── static/
│   ├── css/
│   │   └── style.css     # Estilização e Dark Mode
│   └── js/
│       └── script.js    # Lógica do front-end e Gráficos
└── templates/
    └── index.html        # Estrutura principal


⚙️ Como Executar o Projeto Localmente


1. Clonar o repositório

git clone https://github.com/MarcosDev23/Calculadora-Financeira.git
cd Calculadora-Financeira

2. Configurar o Ambiente Virtual

No Windows:

python -m venv venv
venv\Scripts\activate


No Linux / macOS:

python3 -m venv venv
source venv/bin/activate


3. Instalar Dependências e Iniciar

pip install -r requirements.txt
python criar_banco.py
python app.py


Acesse em seu navegador: http://127.0.0.1:5000


Este é um modelo de README.md otimizado, utilizando as informações que você forneceu. Ele foi estruturado para ser visualmente atraente e profissional, ideal para o seu portfólio no GitHub.
💰 Calculadora Financeira

Uma aplicação web moderna para controle financeiro pessoal, desenvolvida com foco em organização, clareza visual e experiência do usuário. O sistema permite gerenciar o fluxo de caixa através de uma interface intuitiva com dashboard em tempo real.
🎯 Objetivo do Projeto

Este projeto foi construído para consolidar conhecimentos em desenvolvimento Full Stack, aplicando regras de negócio reais em um ambiente simulado de gestão financeira.

    Prática Full Stack: Integração entre Python (Back-end) e JavaScript (Front-end).

    Portfólio: Criar uma ferramenta funcional e visualmente polida.

    UX/UI: Implementação de Dark Mode e animações para melhor legibilidade.

🚀 Funcionalidades

    Gestão de Lançamentos: Cadastro de ganhos e despesas com descrição e valor.

    Cálculo Automático: Atualização instantânea de ganhos totais, despesas e saldo líquido.

    Dashboard Interativo: Visualização de dados através de gráficos dinâmicos alimentados pela biblioteca Chart.js.

    Extrato Detalhado: Listagem de transações com opções para Editar ou Excluir.

    Interface Premium: Design em Dark Mode com layout responsivo e feedbacks visuais coloridos para saldos.

🛠️ Tecnologias Utilizadas
Camada	Tecnologia
Backend	Python, Flask, SQLite
Frontend	HTML5, CSS3, JavaScript (ES6+), Chart.js
Ferramentas	Git, GitHub, Virtualenv
📁 Estrutura do Projeto
Plaintext

Calculadora-Financeira/
├── app.py                # Servidor Flask e rotas
├── criar_banco.py        # Script de inicialização do SQLite
├── requirements.txt      # Dependências do projeto
├── static/
│   ├── css/
│   │   └── style.css     # Estilização e Dark Mode
│   └── js/
│       └── script.js    # Lógica do front-end e Gráficos
└── templates/
    └── index.html        # Estrutura principal

⚙️ Como Executar o Projeto Localmente
1. Clonar o repositório
Bash

git clone https://github.com/MarcosDev23/Calculadora-Financeira.git
cd Calculadora-Financeira

2. Configurar o Ambiente Virtual

No Windows:
Bash

python -m venv venv
venv\Scripts\activate

No Linux / macOS:
Bash

python3 -m venv venv
source venv/bin/activate

3. Instalar Dependências e Iniciar
Bash

pip install -r requirements.txt
python criar_banco.py
python app.py

Acesse em seu navegador: http://127.0.0.1:5000
🧠 Regras de Negócio Aplicadas

    Fluxo de Caixa: Ganhos incrementam o saldo; despesas realizam a subtração.

    Feedback Visual:

        Saldo Positivo 🟢

        Saldo Negativo 🔴

    Formatação: Todos os valores são tratados e exibidos no padrão de moeda Brasileira (R$).

Desenvolvido por Marcos 



📈 Possíveis Melhorias Futuras

🔐 Autenticação de usuários

📅 Filtro por período (mensal/anual)

📄 Exportação de relatórios (PDF)

☁️ Deploy em nuvem

📊 Gráficos adicionais

📱 Melhorias para mobile