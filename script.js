const avança = document.querySelectorAll('btn-proximo');
const reiniciarBtn = document.getElementById('.btn-reiniciar');
avanca.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        atual.classList.remove('ativo');
        const proximoElemento = document.getElementById(proximoPasso);
        const avanca = document.querySelectorAll('btn.proximo');
        const reiniciarBtn = document.getElementById('btn-reiniciar');
        avanca.forEach(button => {
            button.addEventListener('click', function () {
                const atual = document.querySelector('.ativo');
                const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
                if (proximoElemento) {
                    proximoElemento.classList.add('ativo');
                } else {
                    console, console.error(`Elemento com ID "${proximoPasso}" não encontrado.`);
                }

         } }}
    )
        });