import {wrongCharsModule, charsModule, tipsModule} from './personagens.js';

const btnS = document.querySelector('#btnS')
btnS.addEventListener('click', start)

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

        if(rodadas < 10){
            btn2.classList.remove('none')
            imgChar.src = 'src/imgs/1placeholder_360x360.jpg'
            nome = chars[randomN]
            tips = [...tipsModule[randomN]]

            randomTip()
            rodadas++
        }
        else{
            textTip.innerText = `Você acertou ${acertos.length} personagens, errou ${erros} e pulou ${10-(acertos.length+erros)}`
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