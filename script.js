document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector("#toggle-area > div > label > input[type=checkbox]");
    const bottomCard = document.querySelector('#bottom-card');
    const bottomCard2 = document.querySelector('#bottom-card2');
    
    
    function fadeIn(element) {
        element.style.opacity = 0;
        element.style.display = 'flex'; 

        let opacity = 0;
        let fadeInterval = setInterval(function() {
            opacity += 0.05;
            element.style.opacity = opacity;

            if (opacity >= 1) {
                clearInterval(fadeInterval);
            }
        }, 30); 
    }

    
    function fadeOut(element) {
        let opacity = 1;
        let fadeInterval = setInterval(function() {
            opacity -= 0.05;
            element.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(fadeInterval);
                element.style.display = 'none'; 
            }
        }, 30); 
    }

    toggle.addEventListener('change', function () {
        const anual = document.querySelector('.anual')
        const mensal = document.querySelector('.mensal')
        
        if (this.checked) {
            anual.style.color = '#3e66f3'
            mensal.style.color = 'black'
            
            
            fadeOut(bottomCard);
            setTimeout(function() {
                fadeIn(bottomCard2);
            }, 500); 
        } else {
            anual.style.color = 'black'
            mensal.style.color = '#3e66f3'
            
            
            fadeOut(bottomCard2);
            setTimeout(function() {
                fadeIn(bottomCard);
            }, 500); 
        }
    });
});
