import {charsModule, tipsModule} from './personagens.js';

const btnS = document.querySelector('#btnS')
btnS.addEventListener('click', start)

let rodadas = 0
let vazios = 0
let erros = 0
const acertos = []

function start(){
    const btn1 = document.querySelector('#btn1')
    const btn2 = document.querySelector('#btn2')
    const interfaceBox = document.querySelector('#interface_box')
    interfaceBox.classList.remove('none')
    btnS.classList.add('btnH')
    btn1.classList.remove('btnH')

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
        btn1.classList.add('btnH')
        btn2.classList.remove('btnH')
        inputB.classList.remove('none')
        const number = Math.floor(Math.random() * chars.length)
        randomN = number

        if(rodadas < 25){
            imgChar.src = 'src/imgs/1placeholder_360x360.jpg'
            nome = chars[randomN]
            tips = [...tipsModule[randomN]]

            randomTip()
            rodadas++
        }
        else{
            textTip.innerText = `Você acertou ${acertos.length} personagens, errou ${erros} e pulou ${25-(acertos.length+erros)}`
        }
    }

    function randomTip(){
        const randomT = Math.floor(Math.random() * tips.length)
        textTip.innerText = `${tips[randomT]}`
    }

    function analisar(e){
        e.preventDefault()
        btn1.classList.remove('btnH')
        btn2.classList.add('btnH')
        const inputUp = inputV.value.toUpperCase()

        if(inputUp != ''){
            if(inputUp == nome){
                imgChar.src = `src/imgs/${nome}_360x360.jpg`
                textTip.innerText = `Isso aí, você acertou!`
                acertos.push(inputUp)
            }
            else{
                textTip.innerText = `Que pena, você errou`
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

// recortando e redimensionando imagens e, melhorando lógica de exibição por acerto