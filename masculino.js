
document.addEventListener('DOMContentLoaded', function() {
    const criaCartaoMasculino = (entrada) => {
        const divContainer = document.querySelector('.container-atletas-masculinos');

        const containerAtleta = document.createElement('div');
        containerAtleta.classList.add('atleta-masculino');
        containerAtleta.style.width = '15rem';
        containerAtleta.style.backgroundColor = '#777777';
        containerAtleta.style.textAlign = 'center';
        containerAtleta.style.margin = 'auto';

        const link = document.createElement('a');
        link.href = `detalhes3.html?id=${entrada.id}`; 
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
const atletasMasculinos = [
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
function criaCartaoNovo(jogador) {
   
    var descricaoJogador = document.getElementById("descricaoJogador");
    
    if (descricaoJogador) {
        descricaoJogador.innerHTML = descricaoPorId[jogador.id] || "Descrição não disponível";
    }
}



for (const atleta of atletasMasculinos) {
    criaCartaoMasculino(atleta);
}
});
