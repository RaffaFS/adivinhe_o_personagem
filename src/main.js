import {charsModule, tipsModule} from './personagens.js';

const btnS = document.querySelector('#btnS')
btnS.addEventListener('click', start)

let rodadas = 0
let vazios = 0
let erros = 0
const acertos = []

function start(){
        const chars = [...charsModule]
        let nome = ''
        let tips = []

        const btn1 = document.querySelector('#btn1')
        btn1.addEventListener('click', rodada)

        const imgChar = document.querySelector('#img_personagens')
        const textTip = document.querySelector('#text_tip')
        const inputV = document.querySelector('#userInput')
        const form = document.querySelector('#form')
        const img = document.querySelector('#imgPlaceholder')

        function rodada(){
            if(rodadas < 25){
                const randomN = Math.floor(Math.random() * chars.length)
                nome = chars[randomN]
                imgChar.src = 'https://placehold.co/240x240'

                switch(randomN){
                    case 0:
                        tips = [...tipsModule[0]]
                        randomTip()
                        break
                
                    case 1:
                        tips = [...tipsModule[1]]      
                        randomTip()
                        break
                }

                function randomTip(){
                    const randomT = Math.floor(Math.random() * tips.length)
                    textTip.innerHTML = `<p>${tips[randomT]}</p>`
                }
                rodadas++
            }

            else{
                textTip.innerHTML = `<p>Você acertou ${acertos.length} tantas, errou tantas e pulou tantas</p>`
            }
        }

        form.addEventListener('submit', analisar)
        function analisar(e){
            e.preventDefault()
            const inputUp = inputV.value.toUpperCase()

            if(inputUp != ''){
                if(inputUp == nome){
                    resBox.innerHTML += '<p>acertou</p>'
                    acertos.push(inputUp)
                }
                else{
                    resBox.innerHTML = '<p>errou</p>'
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

// 6. se a pessoa não clica uma segunda vez em abrir rodada, e insere e envia varias
//    vezes o nome do personagem certo na mesma rodada, isso continua inserindo o nome