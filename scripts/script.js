function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    msg.textContent = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'public/images/manha.jpg'
        document.body.style.background = '#EECBA7'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'public/images/tarde.jpg'
        document.body.style.background = '#DC630C'
    } else {
        //Boa noite
        img.src = 'public/images/noite.jpg'
        document.body.style.background = '#1B353C'
    }
}

