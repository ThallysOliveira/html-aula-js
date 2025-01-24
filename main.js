const form = document.getElementById('form-exercicio');



form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = parseFloat(document.getElementById('campo-A').value);
    const campoB = parseFloat(document.getElementById('campo-B').value);
    const messageDiv = document.getElementById('message');

    if (campoB > campoA) {
        messageDiv.textContent = 'O Formulário está correto, o campo B e maior que o campo A.';
        messageDiv.className = 'message success';
    }
    else {
        messageDiv.textContent = 'O Formulário está incorreto, o campo B deve ser maior que o campo A.';
        messageDiv.className = 'message error';
    }
})