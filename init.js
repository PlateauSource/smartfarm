const queryString = window.location.pathname.split('/')[3]; // get url pathname (realm name)

    var currentLogo = document.querySelector('.plt-smartfarm-logo') // get current logo

    if(queryString === "smartfarm"){ // realm name
        currentLogo.src = 'https://plateausource.github.io/smartfarm/img/smartfarm-logo-1.svg';
    }
    else if(queryString === "smartfarm2"){ // realm name
        currentLogo.src = 'https://plateausource.github.io/smartfarm/img/smartfarm-logo-2.svg';
    }


