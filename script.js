
// Navegação entre seções

function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    // Mostra apenas a seção que foi clicada
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }
}

// Garante que o site comece mostrando apenas a seção 'inicio' ao carregar
document.addEventListener("DOMContentLoaded", () => {
    showSection('inicio');
});

// Dados dos pontos de coleta
const pontosColeta = [
  {nome:"Vodacom Shop Baixa", morada:"Av. 25 de Setembro, nº 100", distrito:"Kampfumo", aceita:"Telemóvel, Cabos", tel:"84 100 1000"},
  {nome:"CIUEM - UEM", morada:"Campus UEM, Av. Julius Nyerere", distrito:"Kampfumo", aceita:"PC, Monitor, Laptop", tel:"21 494 012"},
  {nome:"Waste Ventures Machava", morada:"Av. das Indústrias, Machava", distrito:"Matola", aceita:"Todos tipos", tel:"84 322 1122"},
  {nome:"Shoprite Matola", morada:"Shoprite Matola, Praça", distrito:"Matola", aceita:"Baterias, Cabos", tel:"21 750 000"}
];

// Cadastro E-waste
document.getElementById('formCadastro').addEventListener('submit', function(e){
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let distrito = document.getElementById('distrito').value;
  let tipo = document.getElementById('tipo').value;
  
  // Salva no localStorage
  let cadastro = {nome, distrito, tipo, data:new Date()};
  localStorage.setItem('ultimoCadastro', JSON.stringify(cadastro));
  
  // Mostra resultado
  document.getElementById('msgResultado').innerHTML = 
    `${nome}, encontrámos 3 pontos próximos de ${distrito} que aceitam ${tipo}. 
    Leva teu equipamento e ajuda Maputo a ficar limpa!`;
  document.getElementById('resultadoCadastro').classList.remove('hidden');
  
  // Carrega pontos filtrados
  carregarPontos(distrito, tipo);
  showSection('pontos');
});

// Carregar pontos no mapa
function carregarPontos(distrito, tipo) {
  let lista = document.getElementById('listaPontos');
  lista.innerHTML = '';
  
  let filtrados = pontosColeta.filter(p => 
    p.distrito == distrito || p.aceita.includes("Todos") || p.aceita.includes(tipo.split('/')[0])
  );
  
  filtrados.forEach(p => {
    lista.innerHTML += `
      <div class="card">
        <h4>📍 ${p.nome}</h4>
        <p><strong>Morada:</strong> ${p.morada}</p>
        <p><strong>Aceita:</strong> ${p.aceita}</p>
        <p><strong>Tel:</strong> ${p.tel}</p>
        <button class="btn" onclick="alert('Marcado! Leva teu e-waste e diz que viste no site E-waste Maputo.')">Marquei que vou entregar</button>
      </div>
    `;
  });
}

// Carrega pontos ao abrir seção
showSection('inicio');
