const criaCartaoNovo = (entrada) => {
  const divContainer = document.querySelector('.container-atletas-novo');

  const containerAtleta = document.createElement('div');
  containerAtleta.style.width = '15rem';
  containerAtleta.style.backgroundColor = '#777777';
  containerAtleta.style.textAlign = 'center';
  containerAtleta.style.margin = 'auto';

  const titulo = document.createElement('h3');
  titulo.innerHTML = entrada.nome;

  const linkDetalhes = document.createElement('a');
  linkDetalhes.href = `detalhes.html?id=${entrada.id}`; 
  linkDetalhes.style.textDecoration = 'none';

  const imagem = document.createElement('img');
  imagem.src = entrada.imagem;
  imagem.alt = `Foto de ${entrada.nome}`;

  const descricao = document.createElement('p');
  descricao.innerHTML = entrada.descricao;

  linkDetalhes.appendChild(imagem);
  containerAtleta.appendChild(titulo);
  containerAtleta.appendChild(linkDetalhes);
  containerAtleta.appendChild(descricao);
  divContainer.appendChild(containerAtleta);
}



const atletasNovo = [
    {
      "id": 1,
      "elenco": "feminino",
      "nome": "INGRID SABINO",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/ingrid-sabino.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 2,
      "elenco": "feminino",
      "nome": "YASMIM",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/yasmin.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 3,
      "elenco": "feminino",
      "nome": "KELLY",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/chiavaro.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 4,
      "elenco": "feminino",
      "nome": "BRUNA SOUZA",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/bruna.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 5,
      "elenco": "feminino",
      "nome": "LUANA",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/luana.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 6,
      "elenco": "feminino",
      "nome": "JÉSSICA BAHIA",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/jessica-bahia.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 7,
      "elenco": "feminino",
      "nome": "CHAI",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/chai.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 8,
      "elenco": "feminino",
      "nome": "SANDRA",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/sandra.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 9,
      "elenco": "feminino",
      "nome": "KÁREN",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/karen.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 10,
      "elenco": "feminino",
      "nome": "THAMIRES",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/thamires.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 11,
      "elenco": "feminino",
      "nome": "JANA QUEIROZ",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/jana-queiroz.png",  
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 12,
      "elenco": "feminino",
      "nome": "NALON",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/nalon.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 13,
      "elenco": "feminino",
      "nome": "JU SANTOS",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/ju-santos.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 14,
      "elenco": "feminino",
      "nome": "TREYCI",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/treyci.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 15,
      "elenco": "feminino",
      "nome": "Japa",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/japa.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 16,
      "elenco": "feminino",
      "nome": "DRIELY",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/driely.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 17,
      "elenco": "feminino",
      "nome": "CAMILA OLIVEIRA",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/camila.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 18,
      "elenco": "feminino",
      "nome": "VITORINHA",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/vitorinha.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 19,
      "elenco": "feminino",
      "nome": "MAYARA VAZ",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/mayara-vaz.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 20,
      "elenco": "feminino",
      "nome": "ELISA",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/elisa.png",     
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 21,
      "elenco": "feminino",
      "nome": "KÉLEN",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/kelen.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 22,
      "elenco": "feminino",
      "nome": "MAISA",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/maisa.png",   
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 23,
      "elenco": "feminino",
      "nome": "KAMILLA",   
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/kamilla.png",  
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 24,
      "elenco": "feminino",
      "nome": "THAYNARA",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/thaynara.png",
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 25,
      "elenco": "feminino",
      "nome": "VALÉRIA",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/valeria.png",    
      "descricao": "SAIBA MAIS"
    },
    {
      "id": 26,
      "elenco": "feminino",
      "nome": "DRIKA",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/drika.png",
      "descricao": "SAIBA MAIS"
    },
]
for (const atleta of atletasNovo) {
    criaCartaoNovo(atleta);
}
