const btn_buscar = document.querySelector('#btn_buscar');
const input_nome = document.querySelector('#nome');
const div_conteiner1 = document.querySelector('.conteiner_1');
const div_conteiner3 = document.querySelector('.conteiner_3');

const gif = document.querySelector('#gif_site');
const title = document.querySelector('#title_site');


input_nome.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        buscar();
    }
});

function dados_na_tela(dados){
    document.querySelector('#nome_tela').innerHTML = dados[0].name;
    document.querySelector('#descricao_tela').innerHTML = dados[0].description;
    document.querySelector('#genero').innerHTML = "<span>Gênero: </span>" + dados[0].gender; 
    document.querySelector('#raça').innerHTML = "<span>Raça: </span>" + dados[0].race; 
    document.querySelector('#img').src = dados[0].image;
  
}
    

async function pesquisar(nome) {
  const dados = await fetch(`https://dragonball-api.com/api/characters?name=${nome}`).then(response => response.json());
  console.log(dados);
  dados_na_tela(dados);
}

function buscar(){
    title.style.display = 'none';
    gif.style.display = 'none';
    div_conteiner1.style.height = '10vh';
    div_conteiner3.style.display = 'flex';
    nome = document.getElementById('nome').value;
    pesquisar(nome);
}