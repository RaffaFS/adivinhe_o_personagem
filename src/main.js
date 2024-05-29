// A lógica inicial está salva e explicada em outro arquivo, vamos aqui fazer
// esse código ser executado através do front-end, basicamente vou apenas
// fazer algum uso do DOM para colocar toda a lógica dentro de uma função
// e trabalhar com eventos (além disso mudei a function star lá pra baixo)

const chars = ['NARUTO', 'VEGETA']
let nome = ''
let tips = []

const btn1 = document.querySelector('#btn1')
btn1.addEventListener('click', start)

function start(){
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

// Aqui começamos o desenvolvimento da segunda etapa que, no caso,
// diz respeito à captação e análise da resposta do usuário

        const form = document.querySelector('#form')
        form.addEventListener('submit', analisar)

        function analisar(e){
            e.preventDefault()
            const inputV = document.querySelector('#userInput')
            const inputUp = inputV.value.toUpperCase()

            if(inputUp == nome){
                resBox.innerHTML = 'acertou'
            }
            else{
                resBox.innerHTML = 'errou'
            }
        }
        
        const inputV = document.querySelector('#userInput')
        inputV.value = ''
    }
}

// Ainda há de ser melhorada, mas já está funcional, a próxima parte
// será o desenvolvimento do armazenamento de pontos e depois dessa
// um sistema de rodadas máximas e retorno visual dos pontos obtidos