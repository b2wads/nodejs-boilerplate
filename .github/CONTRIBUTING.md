# Guia de Contribuição

### Pesquisa rápida

- [Começando](#começando)
  - [Idioma](#idioma)
    - [Falantes nativos em Português e Inglês](#falantes-nativos-em-português-e-inglês)
- [Como contribuir](#como-contribuir)
    - [Issues](#issues)
    - [Documentação](#documentação)
    - [Melhoria/Modificação](#melhoria/modificação)
    - [Bug](#bug)
- [Ambiente de desenvolvimento](#ambiente-de-desenvolvimento)
  - [Scripts](#scripts)

### *Also available in English:*

[Clique aqui](./CONTRIBUTING_en-US.md)

---

## Começando

Obrigado por considerar contribuir como nosso projeto :D

Aqui, vamos ajudar com instruções e orientações para reduzir mal entendimentos, e fazer o processo de contribuição ser o mais simples possível

**Observação**: Se você tiver qualquer pergunta sobre o projeto, mande uma mensagem ;)

### Idioma

Em nosso repositório nós usamos **Português**, mas se você fala outra língua, nós gostaríamos que você usasse **Inglês** para ajudar com a comunicação

#### Falantes nativos em Português e Inglês

Se você é um falante nativo de Inglês ou Português, por favor, tente usar palavras e frases simples.

---

## Como contribuir

Aqui há quatro formas de contribuir com o projeto, e não se preocupe se você é um desenvolvedor iniciante ou expert, **todos podem contribuir!**

#### Issues

Se você estiver interessado em criar uma issue, você pode fazer isso! Mas antes de criar veja as seguintes informações, talvez ajude você

  - Antes de criar sua issue, pesquise por alguma igual ou similiar
  - Usar títulos descrivos
  - ínclua informações claras, para ajudar os outros contribuidores

#### Documentação

Se você é um usuário do `boilerplate`, você é perfeito para ajudar a encrementar a documentação

Através de erros de digitação, exemplos e formatações,  são exemplos que podem ser implementados em nossa documentação

Enquanto documenta, tente mantes as coisas simples a claras

#### Melhoria/Modificação

Com a melhoria ou modificação do código você pode fazer coisas incríveis e bons testes para nos ajudar nosso projeto crescer, isso é possivel se você ajudar alguém com alguma feature, fazendo uma boa implementação ou trazendo ideias

É extremamente importante a formatação de código, e boas práticas (código limpo é um bom exemplo), e sempre teste seu código :D

#### Bug

Achou algum bug? Reporte para nós com uma issue

Achar bugs e reportar para nós é muito importante para manter a integridade do projeto. Você pode mandar onde está o bug para nos ajudar também, erros/trackings que aparecem no console, imagens e gifs

Se você tem uma implementação para resolver um bug, abra uma issue e mande para nós :D

---

## Ambiente de desenvolvimento

Durante o desenvolvimento, prefirimos usar  **Node** >= 10.x

### Scripts

Durante o desenvolvimento você precisará de alguns scripts

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