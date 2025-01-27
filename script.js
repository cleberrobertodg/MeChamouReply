document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#toggle-area > div > label > input[type=checkbox]").addEventListener('change', function () {
        const anual = document.querySelector('.anual')
        const mensal = document.querySelector('.mensal')
        
        if (this.checked) {
            anual.style.color = '#3e66f3'
            mensal.style.color = 'black'
        } else {
            anual.style.color = 'black'
            mensal.style.color = '#3e66f3'
        }
    })
})
