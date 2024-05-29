const chars = ['Naruto', 'Vegeta']
let tips = []

// Criação dos arrays para personagens e dicas
// Para personagens uma const por ser fixa e para dicas uma let (e vazia), para
// ser redefinida na chamada de cada personagem

const randomN = Math.floor(Math.random() * chars.length)

function randomTip(){
    const randomT = Math.floor(Math.random() * tips.length)
    console.log(tips[randomT])
}

// Geração de um número pseudoaleatório com base no comprimento do array acima
// Esse número será usado pelo Switch-case mais abaixo. Além disso temos
// também a criação da função que será chamada dentro de cada caso quando em
// execução. Ela gera um número aleatório que corresponderá à um índice de "tips"
// que atualmente tem valor nulo, mas a cada chamada, terá seu valor sobreescrito
// para o personagem correspondente


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

