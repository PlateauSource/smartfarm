const queryString = window.location.pathname.split('/')[3];


    var logoAlani = document.querySelector('.plt-smartfarm-logo')
    alert("deneme")
    if(queryString === "smartfarm"){
        alert(1)
        logoAlani.src = 'img/smartfarm-logo-1.svg';
    }
    
    if(queryString === "smartfarm2"){
        logoAlani.src = 'img/smartfarm-logo-2.svg';
        alert(2)
    }


