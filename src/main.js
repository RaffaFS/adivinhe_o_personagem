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

        const resBox = document.querySelector('#results_box')
        const inputV = document.querySelector('#userInput')
        const form = document.querySelector('#form')

        function rodada(){
            if(rodadas < 25){
                const randomN = Math.floor(Math.random() * chars.length)
                nome = chars[randomN]

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
                    resBox.innerHTML = `<p>${tips[randomT]}</p>`
                }
                rodadas++
            }

            else{
                const resBox = document.querySelector('#results_box')
                resBox.innerHTML = `<p>Você acertou tantas, errou tantas e pulou tantas</p>`
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
        }
    }

// Ainda há de ser melhorada, mas já está funcional, a próxima parte
// será o desenvolvimento do armazenamento de pontos e depois dessa
// um sistema de rodadas máximas e retorno visual dos pontos obtidos

