// ═══════════════════════════════════════════════
//  DADOS DOS PERFUMES — vindos do Google Sheets
//
//  Como configurar:
//  1. Crie uma planilha no Google Sheets com a aba
//     chamada exatamente como SHEET_NAME abaixo.
//  2. Primeira linha (cabeçalho) com as colunas:
//     id | name | brand | category | inspiredBy | notes | icon | tags
//     (a coluna "tags" leva os valores separados por ; , ex: primavera;dia)
//  3. Compartilhe a planilha: Compartilhar > Acesso geral >
//     "Qualquer pessoa com o link" > Leitor.
//  4. Copie o ID da planilha (o trecho entre /d/ e /edit na URL)
//     e cole abaixo em SHEET_ID.
//  5. Para adicionar ou remover perfumes, basta editar a planilha
//     pelo Google Sheets (inclusive pelo celular) — o site sempre
//     busca os dados atualizados ao carregar a página.
// ═══════════════════════════════════════════════
const SHEET_ID = '1kj7doiQFsySdEi89j4_GL1gMyF0nPkawKupSKc-bYg8';
const SHEET_NAME = 'perfumes';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&headers=1&sheet=${encodeURIComponent(SHEET_NAME)}`;

let perfumes = [];

async function loadPerfumes() {
  showLoading();
  try {
    const res = await fetch(SHEET_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const jsonText = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const parsed = JSON.parse(jsonText);

    if (!parsed.table || !parsed.table.rows) throw new Error('Formato inesperado da planilha');

    perfumes = parsed.table.rows.map(row => {
      const cells = row.c || [];
      const get = i => (cells[i] && cells[i].v !== null && cells[i].v !== undefined)
        ? String(cells[i].v).trim() : '';

      return {
        id: Number(get(0)),
        name: get(1),
        brand: get(2),
        category: get(3),
        inspiredBy: get(4) || null,
        notes: get(5),
        icon: get(6),
        tags: get(7).split(';').map(t => t.trim()).filter(Boolean),
      };
    }).filter(p => p.id && p.name);

    hideLoading();
    buildCards();
    applyFilters();
  } catch (err) {
    console.error('Erro ao carregar a planilha de perfumes:', err);
    showError();
  }
}

function showLoading() {
  document.getElementById('loadingState').classList.add('visible');
  document.getElementById('errorState').classList.remove('visible');
}

function hideLoading() {
  document.getElementById('loadingState').classList.remove('visible');
}

function showError() {
  document.getElementById('loadingState').classList.remove('visible');
  document.getElementById('errorState').classList.add('visible');
}

// ─── estado ───────────────────────────────────
const activeFilters = new Set();
let visibleIds = [];

// ─── build cards ──────────────────────────────
const grid = document.getElementById('grid');
const emptyState = document.getElementById('emptyState');

function buildCards() {
  perfumes.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = p.id;
    card.dataset.tags = p.tags.join(',');

    card.innerHTML = `
      <span class="card-number">${String(i + 1).padStart(2, '0')}</span>
      <span class="card-icon">${p.icon}</span>
      <h2 class="card-name">${p.name}</h2>
      <p class="card-brand">${p.brand}</p>
      <p class="card-notes">${p.notes}</p>
      <div class="card-tags">
        ${p.tags.map(t => `<span class="tag tag-${t}">${tagLabel(t)}</span>`).join('')}
      </div>
    `;

    grid.insertBefore(card, emptyState);
  });
}

function tagLabel(t) {
  const map = { primavera: '🌸 Primavera', verao: '☀️ Verão', outono: '🍂 Outono',
                inverno: '❄️ Inverno', dia: '🌤 Dia', noite: '🌙 Noite' };
  return map[t] || t;
}

// ─── logica do filtro ─────────────────────────────
function applyFilters() {
  const cards = grid.querySelectorAll('.card[data-id]');
  visibleIds = [];

  cards.forEach(card => {
    const tags = card.dataset.tags.split(',');
    const show = activeFilters.size === 0 ||
                 [...activeFilters].every(f => tags.includes(f));
    card.classList.toggle('hidden', !show);
    card.classList.remove('winner');
    const badge = card.querySelector('.winner-badge');
    if (badge) badge.remove();
    if (show) visibleIds.push(parseInt(card.dataset.id));
  });

  const count = visibleIds.length;
  document.getElementById('visibleCount').textContent = count;
  emptyState.classList.toggle('visible', count === 0);

  const btn = document.getElementById('btnSortear');
  btn.disabled = count === 0;
  document.getElementById('sortearHint').textContent =
    count === 0 ? 'Nenhum perfume visível'
    : count === 1 ? 'Apenas 1 perfume visível'
    : `Sorteie entre ${count} perfumes visíveis`;
}

// ─── botões filtro ───────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;
    if (activeFilters.has(cat)) {
      activeFilters.delete(cat);
      btn.classList.remove('active');
    } else {
      activeFilters.add(cat);
      btn.classList.add('active');
    }
    applyFilters();
  });
});

// ─── sortear ──────────────────────────────────
let spinInterval = null;
let currentWinnerId = null;

function sortear() {
  if (visibleIds.length === 0) return;

  // Remove winner visual anterior
  document.querySelectorAll('.card.winner').forEach(c => {
    c.classList.remove('winner');
    const b = c.querySelector('.winner-badge');
    if (b) b.remove();
  });

  const visibleCards = [...document.querySelectorAll('.card[data-id]:not(.hidden)')];
  if (visibleCards.length === 0) return;

  // Animação de roleta
  let flips = 0;
  const total = 16 + Math.floor(Math.random() * 10);

  spinInterval = setInterval(() => {
    visibleCards.forEach(c => c.classList.remove('spinning'));
    const random = visibleCards[Math.floor(Math.random() * visibleCards.length)];
    random.classList.add('spinning');
    flips++;

    if (flips >= total) {
      clearInterval(spinInterval);
      visibleCards.forEach(c => c.classList.remove('spinning'));

      const winnerId = visibleIds[Math.floor(Math.random() * visibleIds.length)];
      currentWinnerId = winnerId;
      const winnerCard = grid.querySelector(`.card[data-id="${winnerId}"]`);

      winnerCard.classList.add('winner');
      const badge = document.createElement('div');
      badge.className = 'winner-badge';
      badge.textContent = '✦ Sorteado';
      winnerCard.insertBefore(badge, winnerCard.firstChild);

      winnerCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

      setTimeout(() => openModal(winnerId), 600);
    }
  }, 80);
}

document.getElementById('btnSortear').addEventListener('click', sortear);

// ─── modal ────────────────────────────────────
function openModal(id) {
  const p = perfumes.find(p => p.id === id);
  if (!p) return;

  document.getElementById('modalIcon').textContent = p.icon;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalBrand').textContent = p.brand;
  document.getElementById('modalNotes').textContent = p.notes;
  document.getElementById('modalTags').innerHTML =
    p.tags.map(t => `<span class="tag tag-${t}">${tagLabel(t)}</span>`).join('');

  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('btnFechar').addEventListener('click', closeModal);
document.getElementById('btnSortearNovamente').addEventListener('click', () => {
  closeModal();
  setTimeout(sortear, 300);
});
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

// ─── init ─────────────────────────────────────
loadPerfumes();
