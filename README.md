Link do vídeo: https://www.youtube.com/watch?v=Z93b_639_Z4
Desafios realizados: R e B.

-Descrição do projeto: O projeto consiste em uma api de to do list, ou seja, uma lista de afazeres. Cada tarefa tem 3 propriedades, id, título e completude, com essa última podendo assumir true or false. O sistema permimite diferentes tipos de requisições, como: POST, para a criação de tarefas; PUT, para a alteração das propriedades das tarefas, no caso título e completude; DEL, para a exclusão de tarefas e GET para a busca de tarefas, podendo buscar tarefas por um id específico.

-Tecnologias utilizadas: Node.js; HTTP module; JavaScript.

-Instalação: A instalação do projeto é dividida em 2 partes:
1 - Clonagem do projeto: Faça o comando git clone https://github.com/Nicolas-Cavalheiro/API_To_Do_List.git em seu terminal.
2 - Acesse a pasta do projeto: Faça o comando cd API_To_Do_List em seu terminal.

-Execução: A execução é dividida em duas partes:
1 - Acessar a pasta dos códigos: Dentro da pasta API_To_Do-List execute o comando cd src em seu terminal.
2 - Executar o projeto: Dentro da pasta src execute o comando node app.js para executar o projeto.
3 - Utilização do projeto: Para utilizá-lo podem ser usados diferentes ambientes, como Postman, Insomnia, cURL e Thunder Client.

-Explicação da solução: O projeto tem diversas partes com diversas funções, sendo elas:
1 - Routes: Define os endpoints da api, recebe as requisições e a direciona para o controller correto.
2 - Controller: Recebe os dados da requisição, extrai informações, chama o service e retorna uma resposta.
3 - Services: Essa parte contém a lógica principal do sistema, além de também processar regras e manipular dados.
4 - Model: Define a estrutura das tarefas.
5 - App.js: O app.js inicia o servidor, define a porta onde a api funcionará, recebe as requisições e as encaminha para o routes.
As tarefas são armazendas em memória por meio do uso de um array, podendo ser criadas, alteradas e removidas durante a execução do servidor. Em caso de desligamento, por não conter a persistência de dados, as informações são perdidas.
