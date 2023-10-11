// Criando um a função de acionamento do botão:
// Nome da função "toggleMode"
function toggleMode() {
    // Criando a variavel 'html' que irá acessar o arquivo html 'document.documentElement'
    const html = document.documentElement
    
    // Criando uma condição para que se na lista de classe do html conter 'ligth'
    if(html.classList.contains('light')) {
        // A condição para que se houver a classe 'light' que ela seja removida.
        html.classList.remove('light')

    // Condição senão (else) caso não haja a classe 'light' ela seja adicionada.
    } else {
        // A condição para que se não houver a classe 'light' que ela seja adicionada.
        html.classList.add('light')
    }

    // Substituindo a imagem da página ao clicar no botão.
    // Pegando a imagem:
    const img = document.querySelector("#profile img")

    // Condicional para a troca das imagens:
    if(html.classList.contains('light')) {
        // A condição para que se tiver a classe 'light', adicionar a imagem 'avatar-light-jhonatan':
        img.setAttribute('src', './assets/avatar-light-jhonatan.png')
    
    // Condição senão (else) caso não haja a classe 'light':
    } else {
        // Condição senão tiver a classe 'light', adicione a imagem 'avatar-jhonatan':
        img.setAttribute('src', './assets/avatar-jhonatan.png')       
    }
}