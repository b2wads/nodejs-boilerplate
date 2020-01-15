# Configurações

- Editar o `.github/CODEOWNERS` e deixar apenas os times relevantes para o projeto
- Entrar no CircleCi e ativar os builds para esse projeto
- Conferir que os dados foram enviados ao codecov.io


#  << Nome do Projeto >>

[![CircleCI](https://circleci.com/gh/b2wads/nodejs-boilerplate/tree/master.svg?style=svg)](https://circleci.com/gh/b2wads/nodejs-boilerplate/tree/master)
[![codecov](https://codecov.io/gh/b2wads/nodejs-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/b2wads/nodejs-boilerplate)

<< Descrição do projeto >>
  
#  Variáveis de ambiente

| Variável | Descrição | Valor padrão |
|:-----------:|:--------------------------|:------------:|
| `NODE_PORT` | Porta padrão da aplicação | `3000` |


#  Como rodar
```sh
npm start
```
  

#  Como rodar os testes
```sh
npm test
```  
  

#  Scripts

- `npm run cron:<cron-name>`: Inicia script de tarefa agendada
- `npm run codecov`: Envia métricas de code coverage para o [codecov.io](codecov.io)
- `npm run deps`: Inicializa as dependências de desenvolvimento do projeto
- `npm run fix:<fix-name>`: Executa script de correção
- `npm run fmt`: Formata código segundo estilo definido em [.prettierrc](.prettierrc) e [.eslintrc](.eslintrc)
- `npm run fmt:check`: Verifica se o código segue o padrão de estilo
- `npm run start`: Inicia a aplicação
- `npm run test`: Executa todos os testes
- `npm run test:acceptance`: Executa testes de aceitação
- `npm run test:integration`: Executa testes de integração
- `npm run test:unit`: Execute testes unitários
- `npm run worker:<worker-name>`: Inicia worker
