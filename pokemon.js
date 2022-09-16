let btn = document.getElementById('pokebtn');
btn.addEventListener('click', (e)=>{
    let url = 'https://pokeapi.co/api/v2/pokemon/4'+getAleatorio(1,59);
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        let tr = document.getElementById('poke');
        tr.innerHTML+= `<td> <img src='${data.sprites.front_default}'></td>
        este pokemon es un ${data.species.name}, 
        su experiencia es de ${data.base_experience} y
        su id es ${data.id}`;

        
    

    })
    .catch(error =>{ console.log(error); });
})
function getAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}