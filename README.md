# Challenge Amigo Secreto
![{2343B616-4701-4DFF-B5FD-4B1431C90F7A}](https://github.com/user-attachments/assets/64086c6d-fc80-4a58-84e1-8f67d39b2c95)


Este projeto é uma aplicação simples em JavaScript para realizar sorteios de amigo secreto. O usuário pode adicionar nomes à lista de amigos e realizar o sorteio para descobrir quem é o seu amigo secreto.

## Funcionalidades

- **Adicionar Amigos**: Insira nomes na lista de amigos. A aplicação verifica se o nome já foi adicionado ou se o campo de entrada está vazio.
- **Exibir Mensagens**: Mensagens de erro ou sucesso são exibidas para o usuário de forma temporária.
- **Sortear Amigo Secreto**: Um sorteio aleatório é feito, e o resultado é exibido. Cada amigo só pode ser sorteado uma vez.
  
## Como Usar

1. **Adicionar Amigos**: 
    - Digite um nome no campo de input e clique para adicionar à lista de amigos.
    - A lista de amigos será atualizada dinamicamente.
  
2. **Sortear Amigo Secreto**:
    - Clique no botão para sortear um amigo secreto.
    - O nome do amigo sorteado será exibido.
    - Caso todos os amigos já tenham sido sorteados, ou se não houver amigos suficientes, uma mensagem de erro será exibida.


## Como Funciona o Código

- **adicionarAmigo**: Esta função adiciona um nome à lista de amigos, verificando se o nome já existe ou se o campo está vazio.
- **mostrarMensagem**: Exibe mensagens de feedback para o usuário (como erros ou sucesso).
- **atualizarLista**: Atualiza a lista de amigos exibida na página sempre que um novo nome é adicionado.
- **sortearAmigo**: Realiza o sorteio aleatório de um amigo secreto e exibe o resultado.

## Melhorias Futuras

- **Desfazer sorteio**: Implementar a possibilidade de desfazer o sorteio e restaurar o estado anterior.
- **Evitar sorteio de amigo para si mesmo**: Garantir que um amigo não seja sorteado para si mesmo.
