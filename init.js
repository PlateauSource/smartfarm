const queryString = window.location.pathname.split('/')[3];


    var logoAlani = document.querySelector('.plt-smartfarm-logo')
    console.log("deneme")
    if(queryString === "smartfarm"){
        console.log(1)
        logoAlani.src = 'https://plateausource.github.io/smartfarm/img/smartfarm-logo-1.svg';
    }
    
    if(queryString === "smartfarm2"){
        logoAlani.src = 'https://plateausource.github.io/smartfarm/img/smartfarm-logo-2.svg';
        console.log(2)
    }


