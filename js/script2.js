'use strict';
(function() {
    const localStorData = 
            JSON.parse(
                localStorage.getItem('inputData')
        );
    
    const ul = document.createElement('ul');
        document.getElementById("result-block").append(ul);

    for (let key in localStorData) {
        const li = document.createElement('li');
        if (localStorData[key] === ''){
            li.innerHTML = `${key}: Empty field!!!`;
            ul.append(li)
        } else {
            li.innerHTML = `${key}: ${localStorData[key]}`;
            ul.append(li)
        }               
    }
})();