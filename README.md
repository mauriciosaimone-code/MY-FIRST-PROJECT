# MY-FIRST-PROJECT
PROPOSTA DE DESENVOLVIMENTO DE UM PROTOTIPO SITE WEB INFORMATIVO COLETA E DESTINO DE E-WASTE. CASO DE ESTUDO DISTRITO MUNICIPAL KAMPFUMO
Adicionei Um novo Titulo
<!DOCTYPE html>
<html lang="pt">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>E-waste Kampfumo | Recolhe e Destina Certo</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<header>
  <h1>♻️ E-waste Kampfumo</h1>
  <p>Recolha e Destinação Correta de Resíduos Eletrónicos</p>
</header>

<nav>
  <a onclick="showSection('inicio')">Início</a>
  <a onclick="showSection('blog')">Blog Educativo</a>
  <a onclick="showSection('ecossistema')">Ecossistema</a>
  <a onclick="showSection('cadastro')">Cadastra E-waste</a>
  <a onclick="showSection('pontos')">Pontos de Coleta</a>
</nav>

<div class="container">

<!-- 1. INÍCIO -->
<section id="inicio" class="section">
  <h2>Bem-vindo ao E-waste Maputo</h2>
  <p>Em Moçambique, mais de 5 mil toneladas de lixo eletrónico são geradas por ano. 90% vai pra lixeiras ou é queimado por sucateiros. Isso liberta chumbo, mercúrio e cádmio no solo e água.</p>
  
  <div class="alert">
    <strong>⚠️ Sabias que?</strong> 1 telemóvel avariado pode contaminar 40 mil litros de água se for deitado no lixo comum.
  </div>

  <h3>O que podes fazer agora:</h3>
  <div class="card-grid">
    <div class="card">
      <h4>1. Aprende</h4>
      <p>Lê no blog o que é E-waste e os perigos do descarte errado.</p>
      <a class="btn" onclick="showSection('blog')">Ler Blog</a>
    </div>
    <div class="card">
      <h4>2. Cadastra</h4>
      <p>Tens PC, telefone velho? Cadastra e nós mostramos onde entregar.</p>
      <a class="btn btn-sec" onclick="showSection('cadastro')">Cadastrar Agora</a>
    </div>
    <div class="card">
      <h4>3. Destina</h4>
      <p>Encontra o ponto de coleta mais próximo em Kampfumo, Matola, etc.</p>
      <a class="btn" onclick="showSection('pontos')">Ver Mapa</a>
    </div>
  </div>
</section>

<!-- 2. BLOG EDUCATIVO -->
<section id="blog" class="section hidden">
  <h2>Blog: Tudo sobre E-waste</h2>
  
  <article style="margin-bottom:30px;">
    <h3>1. O que é E-waste?</h3>
    <p><strong>E-waste = Resíduos de Equipamentos Elétricos e Eletrónicos.</strong> É tudo que tem pilha, bateria ou cabo e já não usas: telemóveis, PCs, TVs, baterias, cabos, routers.</p>
    <p>Moçambique ainda não tem lei específica, mas o INCM e MITADER já trabalham em normas com a UIT.</p>
  </article>

  <article style="margin-bottom:30px;">
    <h3>2. Perigos do Descarte Errado</h3>
    <ul>
      <li><strong>Chumbo + Mercúrio:</strong> Causam problemas no cérebro e rins</li>
      <li><strong>Queima de cabos:</strong> Liberta dioxinas cancerígenas no ar</li>
      <li><strong>Solo e água:</strong> Contaminação dura 100+ anos</li>
    </ul>
  </article>

  <article>
    <h3>3. O que fazer com meu equipamento velho?</h3>
    <p>1. <strong>Reutiliza</strong>: Doa se ainda funciona</p>
    <p>2. <strong>Repara</strong>: Leva na Baixa, tem técnicos bons</p>
    <p>3. <strong>Recicla</strong>: Se não serve mais, cadastra aqui e leva num ponto certo</p>
    <p>4. <strong>Nunca queimes</strong> ou deites no contentor normal</p>
  </article>
</section>

<!-- 3. ECOSSISTEMA -->
<section id="ecossistema" class="section hidden">
  <h2>Quem faz parte do Ecossistema E-waste em Moçambique</h2>
  
  <div class="card-grid">
    <div class="card">
      <h4>👤 Cidadão</h4>
      <p>Gera o e-waste em casa. Papel: Separar e entregar no ponto certo.</p>
    </div>
    <div class="card">
      <h4>🏢 Empresa/Gerador</h4>
      <p>UEM, Vodacom, Bancos. Gera volume alto. Papel: Contratar recolha certificada.</p>
    </div>
    <div class="card">
      <h4>🚚 Recolhedor/Sucateiro</h4>
      <p>Xipamanine, Malanga. Papel: Recolher e vender metal. 80% do fluxo passa por eles.</p>
    </div>
    <div class="card">
      <h4>♻️ Recicladora</h4>
      <p>Waste Ventures, RECICLA. Papel: Desmontar e separar ferro, cobre, plástico.</p>
    </div>
    <div class="card">
      <h4>🏛️ Governo: INCM</h4>
      <p>Regula importação de equipamentos. Tem dados de quantos phones entram.</p>
    </div>
    <div class="card">
      <h4>🏛️ Governo: AT</h4>
      <p>Controla impostos de importação. Pode criar taxa pra descarte.</p>
    </div>
    <div class="card">
      <h4>🏛️ MITADER/FUNAB</h4>
      <p>Ministério do Ambiente. Faz campanhas e políticas de e-waste.</p>
    </div>
    <div class="card">
      <h4>🌍 Destino Final</h4>
      <p>África do Sul, China. MZ ainda não extrai ouro/prata das placas.</p>
    </div>
  </div>

  <div class="alert">
    <strong>Fluxo Ideal:</strong> Cidadão → Recolhedor → Recicladora → Destino Final RSA. 
    <br><strong>Fluxo Hoje:</strong> Cidadão → Sucateiro → Queima → Poluição
  </div>
</section>

<!-- 4. CADASTRO E-WASTE -->
<section id="cadastro" class="section hidden">
  <h2>Cadastra teu E-waste pra Coleta</h2>
  <p>Preenche e já te mostramos os pontos de entrega mais próximos do teu distrito.</p>
  
  <form id="formCadastro">
    <label>Nome Completo</label>
    <input type="text" id="nome" required>
    
    <label>Contacto</label>
    <input type="tel" id="telefone" placeholder="84xxxxxxx" required>
    
    <label>Distrito</label>
    <select id="distrito" required>
      <option value="">Seleciona</option>
      <option>Kampfumo</option>
      <option>Nhamankulo</option>
      <option>KaMavota</option>
      <option>KaMaxaquene</option>
      <option>KaMubukwana</option>
      <option>Matola</option>
    </select>
    
    <label>Tipo de Equipamento</label>
    <select id="tipo" required>
      <option value="">Seleciona</option>
      <option>Telemóvel/Smartphone</option>
      <option>Laptop</option>
      <option>PC Desktop</option>
      <option>Monitor</option>
      <option>TV</option>
      <option>Bateria/Powerbank</option>
      <option>Cabos/Carregadores</option>
      <option>Outro</option>
    </select>
    
    <label>Estado</label>
    <select id="estado" required>
      <option>Avariado/Não liga</option>
      <option>Funciona mas não uso</option>
      <option>Bateria estufada/Inseguro</option>
    </select>
    
    <label>Peso Aproximado kg</label>
    <input type="number" step="0.1" id="peso" placeholder="0.2 pra telefone">
    
    <button type="submit" class="btn btn-sec">Cadastrar e Ver Pontos de Entrega →</button>
  </form>
  
  <div id="resultadoCadastro" class="hidden" style="margin-top:20px;">
    <h3>✅ Cadastrado com sucesso!</h3>
    <p id="msgResultado"></p>
    <button class="btn" onclick="showSection('pontos')">Ver Pontos de Coleta no Mapa</button>
  </div>
</section>

<!-- 5. PONTOS DE COLETA -->
<section id="pontos" class="section hidden">
  <h2>Pontos de Coleta em Maputo</h2>
  <p>Leva teu equipamento num destes locais. São pontos seguros e certificados.</p>
  
  <div id="mapa">🗺️ Mapa interativo aqui<br><small></small></div>
  
  <div class="card-grid" id="listaPontos">
    <!-- JS vai preencher aqui -->
  </div>
</section>

</div>

<footer>
  <p>© 2026 E-waste Maputo | Projeto Académico UDM</p>
  <p>Em parceria com: AMOR | MAAP | Waste Ventures</p>
  <p>Contactos: 87 3092739 | e-waste.mauriciosaimone.com</p>
</footer>
<script src="Javascrip/script.js"></script>

</body>


* {margin:0; padding:0; box-sizing:border-box; font-family:'Segoe UI', Arial;}
body {background:#f0f7f0; color:#333; line-height:1.6;}
header {background:linear-gradient(135deg,#2e7d32,#1b5e20); color:white; padding:20px 0; text-align:center; position:sticky; top:0; z-index:100;}
header h1 {font-size:28px;} header p {font-size:14px; opacity:0.9;}
nav {background:#1b5e20; padding:10px; text-align:center;}
nav a {color:white; text-decoration:none; margin:0 15px; font-weight:bold; cursor:pointer;}
nav a:hover {text-decoration:underline;}
.container {max-width:1100px; margin:30px auto; padding:0 20px;}
.section {background:white; padding:30px; border-radius:12px; margin-bottom:25px; box-shadow:0 3px 10px rgba(0,0,0,0.08);}
h2 {color:#2e7d32; margin-bottom:15px; border-left:4px solid #2e7d32; padding-left:10px;}
h3 {color:#1b5e20; margin:15px 0 10px;}
.card-grid {display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:20px; margin-top:20px;}
.card {background:#e8f5e9; padding:20px; border-radius:10px; border-left:4px solid #4caf50;}
.card h4 {color:#2e7d32; margin-bottom:8px;}
.btn {background:#2e7d32; color:white; padding:12px 25px; border:none; border-radius:8px; cursor:pointer; font-size:16px; margin-top:10px; display:inline-block; text-decoration:none;}
.btn:hover {background:#1b5e20;}
.btn-sec {background:#ff9800;}
.btn-sec:hover {background:#e68900;}
form label {display:block; margin-top:15px; font-weight:bold;}
form input, form select, form textarea {width:100%; padding:10px; margin-top:5px; border:1px solid #ccc; border-radius:6px;}
.alert {background:#fff3cd; border-left:4px solid #ffc107; padding:15px; margin:15px 0; border-radius:5px;}
footer {background:#1b5e20; color:white; text-align:center; padding:20px; margin-top:40px;}
.hidden {display:none;}
#mapa {height:400px; background:#ddd; border-radius:8px; margin-top:15px; display:flex; align-items:center; justify-content:center; color:#666;}


// Navegação entre seções
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  window.scrollTo(0,0);
}

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
