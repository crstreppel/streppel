let element = document.getElementsByClassName('interagindo-com-javascript')[0]
element.addEventListener("animationstart", listener, false)
element.addEventListener("animationend", listener, false)
element.addEventListener("animationiteration", listener, false)

function listener(e){
    switch(e.type) {
        case "animationstart":
            console.log("Animacao Iniciada");
            break;
        case "animationend":
            console.log("Animação encerrada");
            break;
        case "animationiteration":
            console.log("Repetindo a Animação")
            break;
    }
}
