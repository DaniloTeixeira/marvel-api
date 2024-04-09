# Projeto Marvel API

Projeto para consumo de API da Marvel, utilizando Angular 17.

## Como faço para baixar o projeto em minha máquina?

Acesse o link https://github.com/DaniloTeixeira/marvel-api e clique na opção "Code" e depois "Download ZIP". Após isso extraia a pasta do arquivo principal para o seu computador

## Como faço para rodar o projeto?

Abra a pasta do projeto em um editor de código de sua preferência, e rode o comando "npm install". Isso irá instalar todas as dependencias necessárias para rodar o projeto

## Bibliotecas utilizadas no projeto

- Angualar Material
- TailwindCSS
- Crypto-JS

## Deploy da aplicação (Vercel)

Aplicação rodando em produção: https://marvel-api-angular-17.vercel.app/home

## Perfil LinkedIn

Meu perfil do LinkedIn: https://www.linkedin.com/in/danilorodriguesteixeira

## Contatos

- Email: danilo.rt@outlook.com
- Celular (WhatsApp): (11) 96416-0074

## Arquitetura de pastas com descrição

- **src**
  - **app** <span style="color:blue">
    - **core** <span style="color:red">
      - **components** <span style="color:green">
        - *character-description* <span style="color:purple">
          - **Descrição**: exibição de detalhes do personagem (Foto, nome e descrição)
          - **Principais métodos**:
            - *onOpenInfoModal* → abertura de modal de mais informações
            - *componente stateless*
        - *character-details-info* <span style="color:purple">
          - **Descrição**: listagem de participação em quadrinhos e séries
          - **Principais métodos**: componente stateless
        - *character-details-modal* <span style="color:purple">
          - **Descrição**: modal para exibição da lista de detalhes (quadrinhos e séries)
          - **Principais métodos**:
            - *onCloseModal* → fechamento do modal
        - *footer* <span style="color:purple">→ rodapé da aplicação
        - *infinity-sones* <span style="color:purple">→ monta a animação de loader
        - *loader* <span style="color:purple">→ recebe o loader e mostra/esconde
      - **data** <span style="color:green">→ arquivos de informação para conexão com a API
      - **interceptors** <span style="color:green">
        - *http* <span style="color:purple">→ intercepta requisição http e gerencia exibição do loader
      - **models** <span style="color:green">→ interfaces da aplicação
      - **pages** <span style="color:green">
        - *home* <span style="color:purple">
          - **Descrição**: exibição da página inicial, com logo da Marvel, input para busca e recebe o componente para exibir a descrição do personagem
          - **Principais métodos**:
            - *onSubmit* → submit do nome do personagem a API, para a busca
            - *getCharacterByName* → chama o método de busca de personagem do serviço
      - **services** <span style="color:green">
        - *loader* <span style="color:purple">
          - **Descrição**: serviço para lógica de gerenciamento do loader da aplicação
          - **Principais métodos**:
            - *showLoader* → mostra o loader
            - *hideLoader* → esconde o loader
        - *local-storage* <span style="color:purple">
          - **Descrição**: serviço para gerenciamento do localstorage
          - **Principais métodos**:
            - *getStoredCharacters* → recuperar dados do localstorage
            - *saveCharacter* → salvar dados no localstorage
        - *marvel* <span style="color:purple">
          - **Descrição**: serviço que busca dados na API
          - **Principais métodos**:
            - *getCharacterByName* → chama uma função que verifica se o personagem está salvo offline, caso sim, busca informações no localstorage, senão busca na API
            - *getLocalStoradeCharacter* → recupera informações do personagem do localstorage
            - *findSavedCharacterByName* → verifica se o personagem digitado existe no localstorage
        - *notification* <span style="color:purple">
          - **Descrição**: serviço para exibição de aviso de perda de internet durante a requisição http
          - **Principais métodos**:
            - *info* → exibe o dialog de notificação
      - **tests** <span style="color:green">
        - *mocks* <span style="color:purple">→ possui arquivo mock para testes unitários
      - **utils** <span style="color:green">→ possui métodos genéricos que podem ser reaproveitados
