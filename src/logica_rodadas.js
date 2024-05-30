const btnS = document.querySelector('#btnS')
btnS.addEventListener('click', start)

let rodadas = 0
const acertos = []
const erros = []
const vazios = 0

function start(){
    const chars = ['NARUTO', 'VEGETA']
    let nome = ''
    let tips = []

    const btn1 = document.querySelector('#btn1')
    btn1.addEventListener('click', rodada)

    function rodada(){
        const randomN = Math.floor(Math.random() * chars.length)
        nome = chars[randomN]

        switch(randomN){
            case 0:
                tips = [
                    'O mais famoso portador das nove caudas',
                    '"Esse é o meu jeito ninja de ser"',
                    'Usuário do Rasengan'
                ]        
                randomTip()
                break
        
            case 1:
                tips = [
                    'Maior rival do Goku',
                    'Príncipe dos Sayajins',
                    'Marido da Bulma'
                ]        
                randomTip()
                break
        }

        function randomTip(){
            const randomT = Math.floor(Math.random() * tips.length)
            const resBox = document.querySelector('#results_box')
            resBox.innerHTML = `<p>${tips[randomT]}</p>`

            const form = document.querySelector('#form')
            form.addEventListener('submit', analisar)

            function analisar(e){
                e.preventDefault()
                const inputV = document.querySelector('#userInput')
                const inputUp = inputV.value.toUpperCase()

                if(inputUp == nome){
                    resBox.innerHTML = 'acertou'
                    acertos.push(nome)                      // adicionando o nome atual à acertos em caso de acerto
                }
                else{
                    resBox.innerHTML = 'errou'
                    erros.push(nome)                        // adicionando o nome atual à erros em caso de erro
                }
            }
            
            const inputV = document.querySelector('#userInput')
            inputV.value = ''
        }
        rodadas++                   // contando rodadas para no futuro fazer um algoritmo que traga os resultados e
                                    // resete o algoritmo atual após certa rodada
    }
}

// Ainda há de ser melhorada, mas já está funcional, a próxima parte
// será o desenvolvimento do armazenamento de pontos e depois dessa
// um sistema de rodadas máximas e retorno visual dos pontos obtidos

