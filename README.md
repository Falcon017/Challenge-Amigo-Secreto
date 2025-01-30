Meu projeto é uma aplicação simples para gerenciar um sorteio de "amigo secreto", solicitada no Desafo da Alura.
Abaixo estão os principais pontos que descrevem o que ele faz:
1. Adicionar Amigos
* Entrada de Nomes: O programa permite que o usuário insira nomes de amigos através de um campo de entrada (input).
  ![image](https://github.com/user-attachments/assets/09f5bf21-eb57-4bd3-bfd1-27f65d177d5c)
  ![image](https://github.com/user-attachments/assets/30eb870b-186f-4556-98bc-cda32b3a5437)
  
* Validação:
- Verifica se o campo está vazio e exibe um alerta caso esteja.
- Verifica se o nome já foi adicionado anteriormente e exibe um alerta caso já exista na lista.
  ![image](https://github.com/user-attachments/assets/13935c35-513a-4cd3-8eea-b598c4ae6a87)
  ![image](https://github.com/user-attachments/assets/6280e888-892a-4913-a6fc-5e8ebd137f03)

* Atualização da Lista:
- Adiciona o nome à lista de amigos (amigos).
- Atualiza a exibição da lista de amigos na interface, mostrando todos os nomes separados por vírgulas.
  ![image](https://github.com/user-attachments/assets/4373edbf-179f-4214-a52e-9eee3b945091)

2. Sortear Amigo
* Validação:
-Verifica se há pelo menos 3 nomes na lista para realizar o sorteio.
- Verifica se todos os amigos já foram sorteados e, caso afirmativo, reinicia o sorteio.
![image](https://github.com/user-attachments/assets/4cd9a6db-b8c5-4a7a-a3ac-8e736544afa9)

*Sorteio:
- Embaralha a lista de amigos.
- Seleciona um nome aleatório da lista, garantindo que ele não tenha sido sorteado anteriormente.
- Exibe o nome do amigo sorteado na interface.
- Adiciona o nome sorteado à lista de sorteados (sorteados).
![image](https://github.com/user-attachments/assets/0f9b1377-8b3f-4940-bd1f-743417169471)

3. Embaralhar Lista
* Função de Embaralhamento:
- Implementa um algoritmo para embaralhar a lista de amigos, garantindo que a ordem dos nomes seja aleatória.

4. Resetar Sorteio
* Limpeza de Dados:
- Reinicia as listas de amigos e sorteados.
- Limpa a exibição da lista de amigos e o resultado do sorteio na interface.
- Exibe um alerta informando que o sorteio foi resetado e que novos amigos podem ser adicionados.
![image](https://github.com/user-attachments/assets/b6d5e25a-8448-4b1e-9766-2e3325837c56)
![image](https://github.com/user-attachments/assets/5497a14b-0705-4b8e-9d48-80d2ca47f1e1)

5. Interface do Usuário
*Interação:
- O usuário pode adicionar nomes, sortear um amigo e resetar o sorteio através de ações na interface.

* Feedback:
- O programa fornece feedback visual (alertas e atualizações na interface) para informar o usuário sobre o status das operações.
