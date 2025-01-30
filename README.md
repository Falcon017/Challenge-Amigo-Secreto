Meu projeto é uma aplicação simples para gerenciar um sorteio de "amigo secreto", solicitada no Desafo da Alura.
Abaixo estão os principais pontos que descrevem o que ele faz:
1. Adicionar Amigos
* Entrada de Nomes: O programa permite que o usuário insira nomes de amigos através de um campo de entrada (input).

* Validação:
- Verifica se o campo está vazio e exibe um alerta caso esteja.
- Verifica se o nome já foi adicionado anteriormente e exibe um alerta caso já exista na lista.

* Atualização da Lista:
- Adiciona o nome à lista de amigos (amigos).
- Atualiza a exibição da lista de amigos na interface, mostrando todos os nomes separados por vírgulas.

2. Sortear Amigo
* Validação:
-Verifica se há pelo menos 3 nomes na lista para realizar o sorteio.
- Verifica se todos os amigos já foram sorteados e, caso afirmativo, reinicia o sorteio.

*Sorteio:
- Embaralha a lista de amigos.
- Seleciona um nome aleatório da lista, garantindo que ele não tenha sido sorteado anteriormente.
- Exibe o nome do amigo sorteado na interface.
- Adiciona o nome sorteado à lista de sorteados (sorteados).

3. Embaralhar Lista
* Função de Embaralhamento:
- Implementa um algoritmo para embaralhar a lista de amigos, garantindo que a ordem dos nomes seja aleatória.

4. Resetar Sorteio
* Limpeza de Dados:
- Reinicia as listas de amigos e sorteados.
- Limpa a exibição da lista de amigos e o resultado do sorteio na interface.
- Exibe um alerta informando que o sorteio foi resetado e que novos amigos podem ser adicionados.

5. Interface do Usuário
*Interação:
- O usuário pode adicionar nomes, sortear um amigo e resetar o sorteio através de ações na interface.

* Feedback:
- O programa fornece feedback visual (alertas e atualizações na interface) para informar o usuário sobre o status das operações.
