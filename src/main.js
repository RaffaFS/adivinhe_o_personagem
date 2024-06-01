import {charsModule, tipsModule} from './personagens.js';
import {imgSources} from './imagens.js';

const btnS = document.querySelector('#btnS')
btnS.addEventListener('click', start)

let rodadas = 0
let vazios = 0
let erros = 0
const acertos = []

function start(){
    const btnAll = document.querySelectorAll('.btn')
    const interfaceBox = document.querySelector('#interface_box')
    interfaceBox.classList.remove('interface_box_none')
    btnAll.forEach((btn) => {btn.classList.toggle('btnH')})

    const chars = [...charsModule]
    let nome = ''
    let tips = []
    let imagem = []
    let randomN = 0


    const btn1 = document.querySelector('#btn1')
    const imgChar = document.querySelector('#img_personagens')
    const textTip = document.querySelector('#text_tip')
    const inputV = document.querySelector('#userInput')
    const form = document.querySelector('#form')

    btn1.addEventListener('click', rodada)
    form.addEventListener('submit', analisar)

    function rodada(){
        const number = Math.floor(Math.random() * chars.length)
        randomN = number

        if(rodadas < 25){    
            nome = chars[randomN]
            imgChar.src = 'https://placehold.co/240x240'
            tips = [...tipsModule[randomN]]

            randomTip()
            rodadas++
        }
        else{
            textTip.innerHTML = `<p>Você acertou ${acertos.length} personagens, errou ${erros} e pulou ${25-(acertos.length+erros)}</p>`
        }
    }

    function randomTip(){
        const randomT = Math.floor(Math.random() * tips.length)
        textTip.innerHTML = `<p>${tips[randomT]}</p>`
    }

    function analisar(e){
        e.preventDefault()
        const inputUp = inputV.value.toUpperCase()

        if(inputUp != ''){
            if(inputUp == nome){
                imagem = imgSources[randomN]
                imgChar.src = imagem
                textTip.innerHTML = `<p class='acerto'>Isso aí, você acertou!</p>`
                acertos.push(inputUp)
            }
            else{
                textTip.innerHTML = `<p class='acerto'>Que pena, você errou</p>`
                erros++
            }
        }
        inputV.value = ''
        nome = ''
    }
}

// 2. buscar imagem de placeholder para o momento de adivinhação
// 3. inserir os sources das imagens para cada personagem
// 4. construir tela final pós 25 rodadas
// 5. na tela final trazer botão para reiniciar o jogo ou recarregar pagina

// existe um personagem faltando na lista com relação as imagens