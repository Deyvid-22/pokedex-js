function abrir(pokeId){       
     addImg(pokeId)
     getPoke(pokeId)   
}

function fechar(){
    document.querySelector('.poke_container').style.display = 'none'
    location.reload()
}

function addImg(id) {
    document.querySelector('.poke_container').style.display ='flex'
var minhaImagem = document.getElementById('img_poke');
minhaImagem.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
}

function pokeType(type) {
    document.querySelector('.poke').classList.add(`${type.types[0].type.name}`)
   document.querySelector('.poke-img').insertAdjacentHTML('beforebegin', `<p>#${type.id}</p>`);
    for(let i = 0; i < type.types.length; i++){
         document.querySelector('.types_poke').innerHTML += `<p class="${type.types[i].type.name}">${type.types[i].type.name}</p>`
    }
}

function pokeName(name){
    document.querySelector('.poke_name').innerHTML = name.name
}

function pokeStat(state){
    const hp  = state.stats[0].base_stat
    const atk = state.stats[1].base_stat
    const def = state.stats[2].base_stat
    const spd = state.stats[3].base_stat
    const exp = state.stats[4].base_stat

  updateStats(hp,atk,def,spd,exp)
}
 

const getPoke = async (id) =>{
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokeResp = await fetch(pokeUrl)
    const pokeData = await pokeResp.json()
    pokeStat(pokeData)
    pokeName(pokeData)
    pokeType(pokeData)
}

function updateStats(hp,atk,def,spd,exp) {
    updateStat("hp", hp);  // Substitua este valor pelo valor desejado (0 a 1000)
    updateStat("atk", atk); // Substitua este valor pelo valor desejado (0 a 1000)
    updateStat("def", def); // Substitua este valor pelo valor desejado (0 a 1000)
    updateStat("spd", spd); // Substitua este valor pelo valor desejado (0 a 1000)
    updateStat("exp", exp); // Substitua este valor pelo valor desejado (0 a 1000)
}

function updateStat(stat, value) {
    var statBar = document.getElementById(stat + "-bar");
    var statValue = document.getElementById(stat + "-value");

    // Limitar a barra de habilidade a 1000
    var normalizedValue = Math.min(100, parseInt(value, 10));

    // Converter o valor normalizado para uma porcentagem do intervalo 0 a 1000
    var percentageValue = (normalizedValue / 10) * 10;

    statBar.style.width = percentageValue + "%";
    statValue.innerText = normalizedValue;
    statValue.innerText +=  "/100"
}

// Chame a função updateStats para atualizar as estatísticas na inicialização


