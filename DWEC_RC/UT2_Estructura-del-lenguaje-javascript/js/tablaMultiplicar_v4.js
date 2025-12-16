// ===== VERSIÓN 4: Ultra-resumida =====
function generarTabla() {
    const num = Number(document.getElementById('numero').value);
    if (num < 0 || num > 10) {
        alert('Número entre 0 y 10');
        return;
    }
    let html = `<h2>Tabla del ${num}</h2><ul>`;
    for (let i = 0; i <= 10; i++) {
        html += `<li>${num} x ${i} = ${num * i}</li>`;
    }
    html += '</ul>';
    document.getElementById('tabla').innerHTML = html;
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        generarTabla();
    });
});
