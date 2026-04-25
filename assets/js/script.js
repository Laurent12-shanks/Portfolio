//les verifications

function verifier_nom(nom){
    if(nom.length<4){
        throw new Error(`Your name ${nom} is short`)
    }
}

function verifier_subject(subject){
    if(subject.length<5){
        throw new Error(`Your subject ${subject} is short`)
    }
}

function verifier_message(message){
    if(message.length<5){
        throw new Error(`Your message ${nom} is short`)
    }
} 

function verifier_Email(email){
    let regex=new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if(!regex.test(email)){
        throw new Error(`Your email ${email} is incorrect` )
    }
}



function envoyer_mail(nom, subject, email, message) {
    const url = 
        "https://mail.google.com/mail/?view=cm&fs=1" +
        "&to=" + encodeURIComponent(email) +
        "&su=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(
        `Salut,\nJe suis ${nom}.\nJe te contacte à propos de ${subject}.\n\n Détails:\n${message}`
        );

    window.open(url, "_blank");
}


function afficher_message_erreur(message){
    let erreur_message=document.getElementById("erreur_message")

    if(!erreur_message)    
    {
        let popup=document.querySelector(".popup")
        erreur_message=document.createElement("span")
        erreur_message.id="erreur_message"
        popup.append(erreur_message)
    }
        erreur_message.innerHTML=message
}

function gerer_formulaire(){

    try{
        let nom=document.querySelector("#name").value
        let subject=document.querySelector("#subject").value
        let email=document.querySelector("#email").value
        let message=document.querySelector("#message").value

        verifier_nom(nom)
        verifier_subject(subject)
        verifier_message(message)
        verifier_Email(email)
        envoyer_mail(nom,subject,email,message)

    }catch(error){
            afficher_message_erreur(error.message)
    }
}

const form=document.querySelector("form")

form.addEventListener("submit",(event)=>{
        event.preventDefault();
        gerer_formulaire()
    })