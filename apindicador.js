let url = 'https://mindicador.cl/api';
/*
let datos = "";

    
    .catch(error=>error)
    */
   let btn = document.querySelector('#btn-moneda');
   btn.addEventListener('click', (e) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let indi = document.getElementById('indicador');
        indi.innerHTML = `el valor del ${data.bitcoin.nombre}, es de ${data.bitcoin.valor}
         ${data.dolar.unidad_medida} de ${data.bitcoin.unidad_medida}`;
    })
    .catch(error=> {
        console.log(`ha habido un error: ${error}`);
    });

});
