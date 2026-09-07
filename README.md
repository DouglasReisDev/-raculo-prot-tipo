# 🔮 Oráculo Olfativo 2.0 — Coleção Pessoal

O **Oráculo Olfativo 2.0** é uma aplicação web minimalista e elegante projetada para gerenciar uma coleção pessoal de perfumes e resolver o clássico dilema diário: *"Com qual perfume eu vou hoje?"*. 

Através de filtros inteligentes por clima e ocasião, o usuário pode restringir as opções visíveis e acionar um sistema de sorteio em estilo "roleta" para escolher a fragrância ideal.

---

## ✨ Funcionalidades

* **Filtro Dinâmico por Ocasião:** Combine filtros de estações (**Primavera, Verão, Outono, Inverno**) e períodos do dia (**Dia, Noite**) para encontrar o perfume perfeito para o momento atual.
* **Contador em Tempo Real:** Barra indicativa que mostra exatamente quantas fragrâncias atendem aos critérios selecionados.
* **Sistema de Sorteio (Oráculo):** Um algoritmo escolhe aleatoriamente uma opção entre os perfumes visíveis, trazendo uma animação de transição visual antes de revelar o vencedor.
* **Modal de Detalhes:** O perfume sorteado é exibido em um painel destacado com notas olfativas, marca, inspiração (se houver) e tags associadas.
* **Design Responsivo & Premium:** Interface escura (*Dark Mode*) com detalhes dourados e tipografia clássica, otimizada tanto para desktops quanto para dispositivos móveis.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web nativas, sem a necessidade de frameworks externos, garantindo leveza e carregamento instantâneo:

* **HTML5:** Estruturação semântica da aplicação.
* **CSS3 (Variáveis & Flexbox/Grid):** Identidade visual sofisticada, efeitos de *blur* (Glassmorphism), animações de pulso e responsividade total.
* **JavaScript (ES6+):** Manipulação dinâmica do DOM, gerenciamento de estados dos filtros e lógica do sorteio com intervalos de animação.
* **Google Fonts:** Utilização das famílias *Cormorant Garamond* (serifa elegante) e *Josefin Sans* (moderna/geométrica).

---

## 📂 Estrutura do Projeto


├── index.html     # Estrutura principal e esqueleto do Modal/Grid
├── style.css      # Estilização completa, variáveis de cor e media queries
└── script.js      # Banco de dados (Array) e lógica de filtragem/sorteio

🧴 Como Adicionar Novos Perfumes
O "banco de dados" da aplicação reside diretamente no arquivo script.js dentro da constante perfumes. Para adicionar novas fragrâncias à sua coleção, 
basta abrir o arquivo e inserir um novo objeto seguindo o padrão estruturado abaixo:

{
  id: 84, // Próximo número disponível
  name: "Nome do Perfume",
  brand: "Marca do Perfume",
  category: "Nicho / Contratipo / Importado design / Nacional",
  inspiredBy: "Nome do Perfume Inspirador (ou null se for autoral)",
  notes: "principais notas, separadas por vírgula",
  icon: "🧴✨", // Emojis que representam a vibe do perfume
  tags: ["verao", "dia"] // Tags válidas: primavera | verao | outono | inverno | dia | noite
}

🚀 Como Executar o Projeto
Como o projeto utiliza apenas arquivos estáticos (HTML/CSS/JS), você não precisa instalar nenhuma dependência ou servidor robusto.

Faça o download ou clone este repositório.

Navegue até a pasta do projeto.

Dê um duplo clique no arquivo index.html para abri-lo diretamente no seu navegador de preferência.

Dica: Se estiver utilizando o VS Code, você pode usar a extensão Live Server para rodar o projeto com recarregamento automático a cada alteração.

📝 Licença
Este projeto é de uso pessoal e educacional. Sinta-se livre para clonar, modificar e adaptar para a sua própria coleção de fragrâncias!



