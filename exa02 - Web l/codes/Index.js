const paises = ['Guatemala', 'México', 'El Salvador', 'Honduras', 'Nicaragua', 'Costa Rica', 'Panamá', 'camaron'];
const formulario = document.getElementById('FormularioPaises');

// 
paises.forEach(pais => {
    const div = document.createElement('div');


    div.className = 'informacionInput';
    
    div.innerHTML = 
    
    `<label for="${pais}-anterior">${pais} - Año Anterior:</label>
    <input type="number" id="${pais}-anterior" name="${pais}-anterior" required>
    <label for="${pais}-actual">${pais} - Año Actual:</label>
    <input type="number" id="${pais}-actual" name="${pais}-actual" required>`;

    formulario.insertBefore(div, formulario.firstChild);
});

// botonxd
const botonCalcular = document.createElement('button');
botonCalcular.type = 'button';
botonCalcular.textContent = 'Calcular Diferencias';
botonCalcular.onclick = enviarFormulario;
formulario.appendChild(botonCalcular);


function enviarFormulario() {
    const diferencias = {};

    paises.forEach(pais => {
        const anterior = parseFloat(document.getElementById(`${pais}-anterior`).value);
        const actual = parseFloat(document.getElementById(`${pais}-actual`).value);


        const diferencia = (((anterior - actual) / anterior) * 100) * -1;
        diferencias[pais] = diferencia;
    });

    localStorage.setItem('diferencias', JSON.stringify(diferencias));


    //window.location.href = 'procesa.html';


   setTimeout(() => {
        localStorage.clear();
    }, 50000);
    
}


