
const cria_cartao = (entrada) => {
  const divContainer = document.querySelector('.container-atletas');

  const containerAtleta = document.createElement('div');
  containerAtleta.style.width = '15rem';
  containerAtleta.style.backgroundColor = '##000000';
  containerAtleta.style.textAlign = 'center';
  containerAtleta.style.margin = 'auto';

  const link = document.createElement('a'); 
  link.href = `detalhes.html?id=${entrada.id}`; 
  link.style.textDecoration = 'none'; 

  const titulo = document.createElement('h3');
  titulo.innerHTML = entrada.nome;

  const imagem = document.createElement('img');
  imagem.src = entrada.imagem;
  imagem.alt = `Foto de ${entrada.nome}`;

  const descricao = document.createElement('p');
  descricao.innerHTML = entrada.descricao;

  link.appendChild(titulo);
  link.appendChild(imagem);
  link.appendChild(descricao);

  containerAtleta.appendChild(link);
  divContainer.appendChild(containerAtleta);
}

const atribuirIDsUnicos = (atletas) => {
  atletas.forEach((jogador, index) => {
      jogador.id = index + 1; 
  });
};

const atletas = [
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
    {
        "id": 27,
        "elenco": "masculino",
        "nome": "GATITO FERNÁNDEZ",
        "imagem": "https://botafogo.com.br/images/elenco2023/roleta/gatito.png",
        "descricao": "SAIBA MAIS"
      },
      {
      "id": 28,
      "elenco": "masculino",
      "nome": "IGO GABRIEL",
      "imagem": "https://botafogo.com.br/images/elenco2023/roleta/igo-gabriel.png",
      "descricao": "SAIBA MAIS"
    },
{
    "id": 29,
    "elenco": "masculino",
    "nome": "LUCAS PERRI",
    "imagem": "https://botafogo.com.br/images/elenco2023/roleta/lucasperri.png",
    "descricao": "SAIBA MAIS"
},
{
     "id": 30,
    "elenco": "masculino",
    "nome": "HUGO",
    "imagem": "https://botafogo.com.br/images/elenco2023/roleta/hugo.png",
    "descricao": "SAIBA MAIS"
},
{
    "id": 31,
   "elenco": "masculino",
   "nome": "RAFAEL",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/rafael-pereira.png",
   "descricao": "SAIBA MAIS"
},
{
    "id": 32,
   "elenco": "masculino",
   "nome": "MARÇAL",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/marcal.png",
   "descricao": "SAIBA MAIS"
},
{
    "id": 33,
   "elenco": "masculino",
   "nome": "DI PLACIDO",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/diplacido.png",
   "descricao": "SAIBA MAIS"
},
{
    "id": 34,
   "elenco": "masculino",
   "nome": "MATEO PONTE",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/mateoponte.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 35,
   "elenco": "masculino",
   "nome": "PHILIPE SAMPAIO",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/philipe-sampaio.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 36,
   "elenco": "masculino",
   "nome": "VICTOR CUESTA",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/cuesta.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 37,
   "elenco": "masculino",
   "nome": "ANDRYELSON",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/adryelson.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 38,
   "elenco": "masculino",
   "nome": "SOUSA",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/sousa.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 39,
   "elenco": "masculino",
   "nome": "BASTOS",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/bastos.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 40,
   "elenco": "masculino",
   "nome": "TCHÊ TCHÊ",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/tchetche.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 41,
   "elenco": "masculino",
   "nome": "DANILO BARBOSA",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/danilobarbosa.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 42,
   "elenco": "masculino",
   "nome": "PATRICK DE PAULA",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/patrick-paula.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 43,
   "elenco": "masculino",
   "nome": "MARLON FREITAS",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/marlon.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 44,
   "elenco": "masculino",
   "nome": "JP",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/jp.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 45,
   "elenco": "masculino",
   "nome": "LUCAS FERNANDES",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/lucas-fernandes.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 46,
   "elenco": "masculino",
   "nome": "EDUARDO",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/eduardo.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 47,
   "elenco": "masculino",
   "nome": "GABRIEL PIRES",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/gabrielpires.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 48,
   "elenco": "masculino",
   "nome": "JACOB MONTES",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/jacobmontes.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 49,
   "elenco": "masculino",
   "nome": "RAÍ",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/rai.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 50,
   "elenco": "masculino",
   "nome": "LUIS HENRIQUE",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/luishenrique.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 51,
   "elenco": "masculino",
   "nome": "VICTOR SÁ",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/victor-sa.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 52,
   "elenco": "masculino",
   "nome": "DIEGO COSTA",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/diego-costa.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 53,
   "elenco": "masculino",
   "nome": "MATHEUS NASCIMENTO",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/matheus-nascimento.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 54,
   "elenco": "masculino",
   "nome": "TIQUINHO SOARES",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/tiquinho.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 55,
   "elenco": "masculino",
   "nome": "CARLOS ALBERTO",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/carlosalberto.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 56,
   "elenco": "masculino",
   "nome": "JANDERSON",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/janderson.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 57,
   "elenco": "masculino",
   "nome": "JUNIOR SANTOS",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/juniorsantos.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 58,
   "elenco": "masculino",
   "nome": "MATÍAS SEGOVIA",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/matias-segovia.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 59,
   "elenco": "masculino",
   "nome": "DIEGO HERNÁNDEZ",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/diego-hernandez.png",
   "descricao": "SAIBA MAIS"
}
,
{
    "id": 60,
   "elenco": "masculino",
   "nome": "VALENTÍN ADAMO",
   "imagem": "https://botafogo.com.br/images/elenco2023/roleta/valentinadamo.png",
   "descricao": "SAIBA MAIS"
}
  ]




for (const atleta of atletas) {
    cria_cartao(atleta);
}

