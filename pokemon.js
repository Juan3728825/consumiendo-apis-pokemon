let btn = document.getElementById('pokebtn');
btn.addEventListener('click', (e)=>{
    let url = 'https://pokeapi.co/api/v2/pokemon/4'+getAleatorio(1,59);
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        let contenedor = document.getElementById('poke');
        contenedor.innerHTML+= `
            <div class='content'> 
                <img src='${data.sprites.front_default}' />
                <span><strong>Name : </strong>${data.species.name}</span>
                <span><strong>Exp: </strong>${data.base_experience}</span>
                <span><strong>Id: </strong> ${data.id}</span>
            </div>`;

        
    

    })
    .catch(error =>{ console.log(error); });
})
function getAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}