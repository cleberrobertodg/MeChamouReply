document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#toggle-area > div > label > input[type=checkbox]").addEventListener('change', function () {
        const anual = document.querySelector('.anual')
        const mensal = document.querySelector('.mensal')
        
        if (this.checked) {
            anual.style.color = '#3e66f3'
            mensal.style.color = 'black'
            document.querySelector("#bottom-card > div.card-content > div > h3").textContent = 'PREMIUM'
            document.querySelector("#bottom-card > div.card-content > div > h2").textContent =  'Plano Premium'
            document.querySelector("#price > h2").textContent = 'R$299'
            document.querySelector("#bottom-card > span").textContent = 'Ideal para empresas de grande porte'
            document.querySelectorAll("#check-area > div.check-text > span").forEach(function(elemento) {
                elemento.textContent = '10 Usuários';
            })
        } else {
            anual.style.color = 'black'
            mensal.style.color = '#3e66f3'
            document.querySelector("#bottom-card > div.card-content > div > h3").textContent = 'BASIC'
            document.querySelector("#bottom-card > div.card-content > div > h2").textContent =  'Plano Básico'
            document.querySelector("#price > h2").textContent = 'R$29'
            document.querySelector("#bottom-card > span").textContent = 'Ideal para quem está começando'
            document.querySelectorAll("#check-area > div.check-text > span").forEach(function(elemento) {
                elemento.textContent = '1 Usuário';
            })
        }
    })
})
