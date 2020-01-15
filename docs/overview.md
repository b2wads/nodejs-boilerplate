# NodeJS Boilerplate

Esse repositório representa a estrutura padrão para projetos NodeJS. Aqui estarão descritas as regras para escrita e estruturação do código dentro do projeto.


# Nomenclatura

A nomenclatura segue as seguintes regras:

 - Arquivos: Nome minpusculo separado por `-`. `nome-de-arquivo.js`.
 - Código: [CamelCase](https://pt.wikipedia.org/wiki/CamelCase). `minhaVariavel`.
 - Objetos JSON: Nome das chaves em [snake_case](https://en.wikipedia.org/wiki/Snake_case).
    ```
      {
        "campo_com_multiplas_palavras": "valor"
      }
    ```

# Versão do Node

Usaremos sempre a versão _major_ mais atual e que seja [Active LTS](https://nodejs.org/en/about/releases/).
Nosso pipeline de CI roda testes usando a versão _patch_ atual do projeto, a versão _Active LTS_ e a versão _latest_.
O objetivo é manter o código sempre compatível com as versões mais atuais, possibilitando uma migração o mais transparente possível.


# O que está incluído nesse boilerplate

 - Formatter, usando o [Prettier](https://prettier.io/)
 - `.gitignore` para NodeJS
 - Config para CircleCI
 - Bootstrap do newrelic (futuro)
 - Ativação de endpoint de métricas básicas para Prometheus (futuro)
 - `package.json` ja pré populado com alguns pacotes e scripts.

# CircleCI

A configuração do Circle já faz o seguinte:

 - Roda os testes;
 - Gera o relatório de cobertura;
 - Checa a formatação do código;
 - Faz upload doa dados de cobertura para o codecov;
 - Roda os testes em uma versão futura do NodeJS;

# Package.json

## Pacotes já incluídos

 - nyc
 - codecov
 - express

## Scripts já configurados

 - test
 - test:unit
 - test:integration
 - test:acceptance
 - codecov
 - start:web
 - start:worker-*


# Estrutura de pastas do projeto

```
.circleci/
  config.yml
  codecov.yml
.github/
  CODEOWNERS
  PULL_REQUEST_TEMPLATE.md
bin/
  www
clients/
  rabbitmq/
    README.md
    index.js
  redis.js
  mysql.js
  bff-data-own.js
config/
    mysql.js
    mongo.js
    index.js
controllers/
coverage/ (ignorada)
docs/
errors/
helpers/
middlewares/
models/ (opcional)
routes/
  index.js
services/
scripts/ (opcional)
  cron-*.js
  fix-*.js
test/
  unit/
  integration/
  acceptance/
workers/ (opcional)
app.js
```


## Propósito de cada uma das pastas escolhidas

### bin/

O `bin/` serve para guardar todos os scripts que serão usados no `package.json`. Mesmo não tendo nenhum binário dentro escolhemos esse nome (em vez de `run/`) pois achamos que nome `bin` é uma convenção mais difundida do que o `run` no mundo NodeJS.

### controllers/

Aqui estão os handlers do framework web que efetivamente recebem os requests. Ainda não é aqui que juntamos `Request PATH` com o handler. Aqui está apenas a definição dos handlers.

### routes/

Essa pasta é onde fazemos a junção dos controllers (handlers de requests) com o Path HTTP que onde esse request vai chegar.

o `index.js` junta toda essa informação (Path HTTP + handler) e exporta para que isso seja entregue para o framework web escolhido.

### app.js

Aqui é onde entregamos as rotas para o framework web. A função `app.js` é:

 - Startar o newrelic (futuro)
 - Startar as rotas do prometheus (futuro)
 - Importar o objeto exportado pelo `routes/index.js`
 - Entregar essas rotas para o framework web
 - Startar a aplicação

Idealmente nenhum projeto precisará mexer no código do `app.js`.

### errors/

Aqui ficam todas as Exceptions customizadas que o projeto quiser usar.

### services/

Aqui estão as implementações da lógica de negócio da aplicação. O ideal é que o controller receba uma request, extraia os dados necessários e passe para o service.

### clients/

Aqui estão os códigos de quaisquer clientes externos que a aplicação precisar usar. tanto para clients onde usamos a lib diretamente quando para clients que são wrappers mais ricos em cima de libs low-level, o código fica aqui.

A ideia é podermos importar nessa linha:

```js
import MysqlClient from "clients/mysql"
```

### config/

Aqui focam os objetos com todas as configs do projeto. A ideia é que o index.js junte todas as "sub-configs" e exponha objetos para que sejam importados.

```js
const MysqlConfig = require("config")
```

ou

```js
const MysqlConfig = require("config/mysql")
```

também seria válido.

Essas configs serão usadas, na maioria das vezes, pelos `clients/*` para poderem se configurarem e poderem ser importados e usados.

### scripts/

Essa pasta é usada para scripts de fix e scripts que não são daemons, ou seja, scripts que rodam, fazem o seu trabalho e terminam normalmente.

Geralmente esses scripts são usados em tarefas agendadas.

Escolhemos dois prefixos para diferenciar esses scripts:

 - `fix-*.js` Para scripts que precisam fazer algum fix emergencial;
 - `cron-*.js` São scripts feitos para tarefas agendadas.

### test/

Aqui dividimos nossos testes em 3 categorias:

 - `unit/` para testes unitários
 - `integration/` para teste de integração
 - `acceptance/` para testes de aceitação

A ideia o `unit/` é que esses testes possam ser rodados **sem depender** de nada externo: Banco, Cache, Rabbit, etc.
