import {charsModule, tipsModule} from './personagens.js';

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
    let imagem = 0

    const btn1 = document.querySelector('#btn1')
    const imgChar = document.querySelector('#img_personagens')
    const textTip = document.querySelector('#text_tip')
    const inputV = document.querySelector('#userInput')
    const form = document.querySelector('#form')

    btn1.addEventListener('click', rodada)
    form.addEventListener('submit', analisar)

    function rodada(){
        const randomN = Math.floor(Math.random() * chars.length)
        imagem = randomN

        if(rodadas < 25){    
            nome = chars[randomN]
            imgChar.src = 'https://placehold.co/240x240'

            switch(randomN){
                case 0:
                    tips = [...tipsModule[0]]
                    break
                case 1:
                    tips = [...tipsModule[1]]
                    break
            }
            randomTip()
            rodadas++
        }
        else{
            textTip.innerHTML = `<p>Você acertou ${acertos.length} tantas, errou tantas e pulou tantas</p>`
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
                switch(imagem){
                    case 0:
                        imgChar.src = 'https://placehold.co/280x280'
                        break
                    case 1:
                        imgChar.src = 'https://placehold.co/200x200'
                        break
                }
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

// Ainda há de ser melhorada, mas já está funcional, a próxima parte
// será o desenvolvimento do armazenamento de pontos e depois dessa
// um sistema de rodadas máximas e retorno visual dos pontos obtidos

// 1. mudar sistema de erro e acerto (innerHTML) e mensagens
// 2. trazer ao clicar em iniciar jogo, uma imagem placeholder de personagem em vetor
// 3. na tela de acerto substituir a img placeholder pela img do personagem quando acertar
// 4. construir tela final pós 25 rodadas
// 5. na tela final trazer botão para reiniciar o jogo ou recarregar pagina