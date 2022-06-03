const queryString = window.location.pathname.split('/')[3];


window.onload = function(){
    var logoAlani = document.querySelector('.plt-smartfarm-logo')
    
    if(queryString === "smartfarm"){
        logoAlani.src = 'img/smartfarm-logo-1.svg';
    }
    
    if(queryString === "smartfarm2"){
        logoAlani.src = 'img/smartfarm-logo-2.svg';
    }

 }
