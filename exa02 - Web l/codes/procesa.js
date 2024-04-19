document.addEventListener('DOMContentLoaded', function() {
    // Recuperar los datos almacenados en localStorage
    const diferencias = JSON.parse(localStorage.getItem('diferencias'));

    // Obtener el cuerpo de la tabla donde se añadirán las filas
    const tbody = document.getElementById('informacionInput').querySelector('tbody');

    if (diferencias) {
        for (let pais in diferencias) {
            const row = tbody.insertRow();

            /* const cellPais = row.insertCell();
            cellPais.textContent = pais;

            
            const cellAnterior = row.insertCell();
            cellAnterior.textContent = "Datos no disponibles"; 

            const cellActual = row.insertCell();
            cellActual.textContent = "Datos no disponibles"; 

            const cellDiferencia = row.insertCell();
            cellDiferencia.textContent = diferencias[pais].toFixed(2) + '%';

            
            const cellProyeccion1 = row.insertCell();
            cellProyeccion1.textContent = "Proyección 1";

            const cellProyeccion2 = row.insertCell();
            cellProyeccion2.textContent = "Proyección 2";

            const cellProyeccion3 = row.insertCell();
            cellProyeccion3.textContent = "Proyección 3"; */
        }
    }
});
