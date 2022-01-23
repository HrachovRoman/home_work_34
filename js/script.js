'use strict';
(function() {
    
    const form = document.querySelector('#form');

    form.addEventListener('submit', event => {
        event.preventDefault();
        
        const inputData = Array.from(
            event.target.querySelectorAll('input, select')
        )
            .reduce((accum, item) => {
            accum[item.name] = item.value;
            return accum;
        }, {});

        localStorage.setItem(
            'inputData', 
            JSON.stringify(inputData)
        );
    });

        document.
        addEventListener(
            'DOMContentLoaded', 
            () => {
                const data =  JSON.parse(
                    localStorage.getItem('inputData')
                );
                setTimeout(() => {
                    form
                    .querySelectorAll('input, select')
                    .forEach(item => {
                        item.value = data[item.name];
                    });
                }, 1500);
            }
        );
   

})();





