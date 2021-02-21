var qr = window.location.search
let ls = window.localStorage
let res = ls.getItem('msg')
ls.removeItem('msg')

let nom = ls.getItem('nom')
ls.removeItem('nom')
let prenom = ls.getItem('prenom')
ls.removeItem('prenom')
let age = ls.getItem('age')
ls.removeItem('age')
let adresse = ls.getItem('adresse')
ls.removeItem('adresse')
let pays = ls.getItem('pays')
ls.removeItem('pays')
let numero = ls.getItem('numero')
ls.removeItem('numero')
let email = ls.getItem('email')
ls.removeItem('email')

document.getElementById("name").innerHTML +=nom
document.getElementById("prenom").innerHTML +=prenom
document.getElementById("age").innerHTML +=age
document.getElementById("adresse").innerHTML +=adresse
document.getElementById("pays").innerHTML +=pays
document.getElementById("numero").innerHTML +=numero
document.getElementById("email").innerHTML +=email





if(qr.includes('tempoui')){
    document.getElementById('containerCH').innerHTML +='<p>Est-ce que votre température corporelle a dépassée 38° ?</p>'
}

if(qr.includes('fatigueoui')){
    document.getElementById('containerCH').innerHTML +='<p>Est-ce que vous vous sentez plus ou moins fatigué récemment</p>'
}

if(qr.includes('ouiseche')){
    document.getElementById('containerCH').innerHTML +='<p>Avez-vous de la toux ? Quelle sorte ? : Toux sèche</p>'
}else if(qr.includes('ouireguliere')){
    document.getElementById('containerCH').innerHTML +='<p>Avez-vous de la toux ? Quelle sorte ? : Toux régulière </p>'
}

if(qr.includes('respireroui')){
    document.getElementById('containerCH').innerHTML +='<p>Avez-vous eu des difficultés à respirer ou un essoufflement ?</p>'
}

if(qr.includes('pressionsoui')){
    document.getElementById('containerCH').innerHTML +='<p>Avez-vous eu des douleurs ou pressions thoraciques ?</p>'
}

if(qr.includes('paroleoui')){
    document.getElementById('containerCH').innerHTML +='<p>Avez-vous eu une perte de la parole ou du mouvement  ?</p>'
}

if(qr.includes('goutoui')){
    document.getElementById('containerCH').innerHTML +='<p>Avez-vous eu une perte du goût de l’odorat ?</p>'
}

if(qr.includes('gorgeoui')){
    document.getElementById('containerCH').innerHTML +='<p>Avez-vous des maux de gorge ?</p>'
}

if(qr.includes('mauxoui')){
    document.getElementById('containerCH').innerHTML +='<p>Avez-vous des maux de tête ?</p>'
}


document.getElementById('bilan').innerHTML += res