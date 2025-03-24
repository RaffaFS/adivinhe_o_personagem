import {wrongCharsModule, charsModule, tipsModule} from './personagens.js';

const btnS = document.querySelector('#btnS')
btnS.addEventListener('click', start)

const rodadasMax = 2
let rodadas = 0
let vazios = 0
let erros = 0
const acertos = []

function start(){
    const btn1 = document.querySelector('#btn1')
    const btn2 = document.querySelector('#btn2')
    const newGame = document.querySelector('#newGame_box')
    const interfaceBox = document.querySelector('#interface_box')
    newGame.classList.add('none')
    interfaceBox.classList.remove('none')
    btn1.classList.remove('none')

    const chars = [...charsModule]
    let nome = ''
    let tips = []
    let randomN = 0

    const imgChar = document.querySelector('#img_personagens')
    const textTip = document.querySelector('#text_tip')
    const inputV = document.querySelector('#userInput')
    const inputB = document.querySelector('#input_box')
    const form = document.querySelector('#form')

    imgChar.src = 'src/imgs/1placeholder_360x360.jpg'

    btn1.addEventListener('click', rodada)
    form.addEventListener('submit', analisar)

    function rodada(){
        btn1.classList.add('none')
        inputB.classList.remove('none')
        const number = Math.floor(Math.random() * chars.length)
        randomN = number

        if(rodadas < rodadasMax){
            btn2.classList.remove('none')
            imgChar.src = 'src/imgs/1placeholder_360x360.jpg'
            nome = chars[randomN]
            tips = [...tipsModule[randomN]]

            randomTip()
            rodadas++
        }
        else{
            const perCent10 = rodadasMax/10
            const perCent25 = rodadasMax/4
            const perCent50 = rodadasMax/2
            const perCent70 = rodadasMax/1.4
            const perCent90 = rodadasMax/1.1
            const perCent100 = rodadasMax

            textTip.innerHTML = `<p>Você acertou ${acertos.length} personagens, errou ${erros} e pulou ${rodadasMax-(acertos.length+erros)}</p>`
            inputB.classList.add('none')
            if(acertos.length == perCent100){
                imgChar.src = 'src/imgsFinal/percent7.jpg'
                textTip.innerHTML += `<p class="finalText">Oh meu amigo, tu tá legal? Tá comendo bem, tomando banho certinho? Tu poderia sair um pouco mais, sabe, encontrar uns amigos, uma namorada talvez... Só sugestão mesmo.</p>`
            }
            else if(acertos.length >= perCent90 && acertos.length != perCent100){
                imgChar.src = 'src/imgsFinal/percent6.jpg'
                textTip.innerHTML += `<p class="finalText">"O MISERÁVEL É UM GÊNIO!</p>`
            }
            else if(acertos.length >= perCent70 && acertos.length < perCent90){
                imgChar.src = 'src/imgsFinal/percent5.jpg'
                textTip.innerHTML += `<p class="finalText">"O seu poder de otaku é de 7000! E agora é de 8000, e continua aumentando!"</p>`
            }
            else if(acertos.length >= perCent50 && acertos.length < perCent70){
                imgChar.src = 'src/imgsFinal/percent4.jpg'
                textTip.innerHTML += `<p class="finalText">"Calma lá Kakarotto, tu tem que treinar mais um pouco"</p>`
            }
            else if(acertos.length >= perCent25 && acertos.length < perCent50){
                imgChar.src = 'src/imgsFinal/percent3.jpg'
                textTip.innerHTML += `<p class="finalText">"Nada mal, mas você pode mais que isso"</p>`
            }
            else if(acertos.length >= perCent10 && acertos.length < perCent25){
                imgChar.src = 'src/imgsFinal/percent2.jpg'
                textTip.innerHTML += `<p class="finalText">"Você não é tão bom assim, é um fracassado."</p>`
            }
            else{
                imgChar.src = 'src/imgsFinal/percent1.jpg'
                textTip.innerHTML += `<p class="finalText">"Tudo bem, o importante é ter saúde!"</p>`
            }

            textTip.innerHTML += `<button type="button" class="btn" id="btnReset">Tentar novamente</button>`
            const reset = document.querySelector('#btnReset')
            reset.addEventListener('click', recarregar)
            function recarregar(){location.reload()}
        }
    }

    function randomTip(){
        const randomT = Math.floor(Math.random() * tips.length)
        textTip.innerText = `${tips[randomT]}`
    }

    function analisar(e){
        e.preventDefault()
        btn1.classList.remove('none')
        btn2.classList.add('none')
        inputB.classList.add('none')
        const inputTrim = inputV.value.trim()
        const inputUp = inputTrim.toUpperCase()

        if(inputUp != ''){
            if(inputUp == nome){
                imgChar.src = `src/imgs/${nome}_360x360.jpg`
                textTip.innerText = `Isso aí, você acertou!`
                acertos.push(inputUp)
            }
            else{
                const wrongChars = [...wrongCharsModule]
                const randomW = Math.floor(Math.random() * wrongChars.length)
                const wrong = wrongChars[randomW]
                imgChar.src = `src/imgsWrongChar/${wrong}.jpg`

                textTip.innerText = `Oops, parece que você errou (:`
                erros++
            }
        }
        inputV.value = ''
        nome = ''
        
    }
}

// 1. construir tela final pós 10 rodadas
// 2. criar tela final com:
// 2.1 botão para reiniciar ou recarregar a página
// 2.2 estrutura if/else para exibir diferentes imagens e frases a depender do número de acertos

