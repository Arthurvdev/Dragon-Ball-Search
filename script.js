
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
    nome = document.getElementById('nome').value;
    pesquisar(nome);
}