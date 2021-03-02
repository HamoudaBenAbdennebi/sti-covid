const alphanumerique = (ch) =>{
		ch=ch.toUpperCase();
		i=0;
		verife=true;
		do
		  {
			if (     ((ch.charAt(i)>="A")&& (ch.charAt(i)<="Z")) ||  ((ch.charAt(i)>="0")&& (ch.charAt(i)<="9"))      )
			   {i++;}
			else
			   { verife=false;}
		  }
		while (   (verife) && (i<ch.length)   );
		return verife;
}


const alphabetique =(ch) =>{
		ch=ch.toUpperCase();
		i=0;
		verife=true;
		do
		  {
			if (     (ch.charAt(i)>="A")&& (ch.charAt(i)<="Z")      )
			   {i++;}
			else
			   { verife=false;}
		  }
		while (   (verife) && (i<ch.length)   );
		return verife;
}


const verif = () => {
  localStorage.clear()
  let name = document.getElementById("name").value;
  if (name.length < 3 ||alphanumerique(name)==false) {
    alert("verifier le nom");
    return false;
  }
  let prenom = document.getElementById("prenom").value;
  if (prenom.length < 3 ||alphanumerique(prenom)==false) {
    alert("verifier le prenom");
    return false;
  }
  let Bdate = document.getElementById("date").value;
  let Bday = +new Date(Bdate);
  let age = Math.round((Date.now() - Bday) / 31557600000);

  if (Bdate == "") {
    alert("verifier vote date de naissance");
    return false;
  }
  let adresse = document.getElementById("adresse").value;
  if (adresse.length < 10) {
    alert("verifier votre adresse");
    return false;
  }
  let pays = document.getElementById("pays").value;
  if (pays.length < 3) {
    alert("verifier votre pays");
    return false;
  }
  let numero = document.getElementById("numero").value;
  if (numero.toString().length != 8 || parseInt(numero[0]) < 2) {
    alert("verifier votre numero");
    return false;
  }

  let email = document.getElementById("email").value;
  if (email.length > 50) {
    alert("l'adresse email ne doit pas depasser 50 caractere");
    return false;
  }
  let ch1 = email.slice(0, email.indexOf("@"));
  let ch2 = email.slice(email.indexOf("@") + 1, email.lastIndexOf("."));
  let ch3 = email.slice(email.lastIndexOf(".") + 1, email.length - 1);

  var letterNumber = /^[0-9a-zA-Z]+$/;
  if (
    ch1.match(letterNumber) == false ||
    ch2.match(letterNumber) == false ||
    ch1.length < 3 ||
    ch1.length < 3 ||
    ch3.length < 2 ||
    ch3.length > 4
  ) {
    alert("verifier votre email");
    return false;
  }
  let score = 0;
  let tempoui = document.getElementById("tempoui");
  if (tempoui.checked) {
    score += 3;
  }

  let fatiguéoui = document.getElementById("fatiguéoui");
  if (fatiguéoui.checked) {
    score += 2;
  }
  let ouisèche = document.getElementById("ouisèche");
  if (ouisèche.checked) {
    score += 3;
  }
  let ouirégulière = document.getElementById("ouirégulière");
  if (ouirégulière.checked) {
    score += 2;
  }

  let hard = document.querySelectorAll("#hard");
  for (let i = 0; i < hard.length; i++) {
    if (hard[i].checked) {
      score += 5;
    }
  }
  let goûtoui = document.getElementById("goûtoui");
  if (goûtoui.checked) {
    score += 2;
  }

  let gorgeoui = document.getElementById("gorgeoui");
  if (gorgeoui.checked) {
    score += 2;
  }

  let mauxoui = document.getElementById("mauxoui");
  if (mauxoui.checked) {
    score += 1;
  }


  let ls = window.localStorage
  if (score < 7 && age < 65) {
    ls.setItem('msg',"Vous devirez aller bien, mais faites attention à vous, et n’oubliez pas de respecter les gestes barrières.")
  } else if (score < 7 && age < 65) {
    ls.setItem('msg',"Vous devirez aller bien, mais vous devriez rester confiné chez vous.")
  }
  let v = false;
  let ck = document.querySelectorAll("#ck");
  for (let i = 0; i < ck.length; i++) {
    if (ck.checked) {
      v = true;
    }
  }
  if (score >= 7 && score <= 18 && v == false) {
    ls.setItem('msg',"Vous avez des majeurs symptômes du COVID-19. Vous devriez vous confiner au plus vite, et faire un test de dépistage")
  } else if (score > 7 && score < 18 && v == true) {
    ls.setItem('msg',"Précipitez-vous au centre COVID le plus proche pour être pris en charge.")
  }
  if (score > 18) {
    ls.setItem('msg',"Précipitez-vous au centre COVID le plus proche pour être pris en charge.")
  }
  ls.setItem('nom',name)
  ls.setItem('prenom',prenom)
  ls.setItem('age',age)
  ls.setItem('adresse',adresse)
  ls.setItem('pays',pays)
  ls.setItem('numero',numero)
  ls.setItem('email',email)
};
