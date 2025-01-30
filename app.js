let amigos = [];
let sorteados = [];

function adicionarAmigo(){
    let nomeDoAmigo = document.getElementById('amigo');
        if(nomeDoAmigo.value == ''){
        alert('Por favor, insira um nome.');
        return;
        }
        if(amigos.includes(nomeDoAmigo.value)){
        alert('Nome do amigo já adicionado!');
        return;  
        }
        
    let lista = document.getElementById('listaAmigos');
    amigos.push(nomeDoAmigo.value);
        if (lista.innerHTML == ''){
        lista.textContent = nomeDoAmigo.value;
        }else{
        lista.textContent = lista.textContent + ', ' + nomeDoAmigo.value;
        }
    nomeDoAmigo.value = '';
}
function sortearAmigo(){
        if (amigos.length < 3){
        alert('O minimo para sorteio é 3 nomes!');
        return;
        }

        if (amigos.length === sorteados.length) {
            alert('Todos os amigos já foram sorteados!');
            resetarSorteio();
            return;
        }

    embaralhar(amigos);

    let nomeSorteado;
    do {
        nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (sorteados.includes(nomeSorteado));

    let sorteio = document.getElementById('resultado');
    sorteio.innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;

        sorteados.push(nomeSorteado);
    }

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function resetarSorteio() {
    amigos = [];
    sorteados = [];
    let lista = document.getElementById('listaAmigos');
    lista.textContent = '';
    let sorteio = document.getElementById('resultado');
    sorteio.innerHTML = '';
            
    alert("O sorteio será resetado. Pode adicionar novos amigos!");
    }