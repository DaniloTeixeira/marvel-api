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

## Tecnologias utilizadas para os testes unitários

Jasmine e Karma

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
        - _character-description_ <span style="color:purple">
          - **Descrição**: exibição de detalhes do personagem (Foto, nome e descrição)
          - **Principais métodos**:
            - _onOpenInfoModal_ → abertura de modal de mais informações
            - _componente stateless_
        - _character-details-info_ <span style="color:purple">
          - **Descrição**: listagem de participação em quadrinhos e séries
          - **Principais métodos**: componente stateless
        - _character-details-modal_ <span style="color:purple">
          - **Descrição**: modal para exibição da lista de detalhes (quadrinhos e séries)
          - **Principais métodos**:
            - _onCloseModal_ → fechamento do modal
        - _footer_ <span style="color:purple">→ rodapé da aplicação
        - _infinity-sones_ <span style="color:purple">→ monta a animação de loader
        - _loader_ <span style="color:purple">→ recebe o loader e mostra/esconde
      - **data** <span style="color:green">→ arquivos de informação para conexão com a API
      - **interceptors** <span style="color:green">
        - _http_ <span style="color:purple">→ intercepta requisição http e gerencia exibição do loader
      - **models** <span style="color:green">→ interfaces da aplicação
      - **pages** <span style="color:green">
        - _home_ <span style="color:purple">
          - **Descrição**: exibição da página inicial, com logo da Marvel, input para busca e recebe o componente para exibir a descrição do personagem
          - **Principais métodos**:
            - _onSubmit_ → submit do nome do personagem a API, para a busca
            - _getCharacterByName_ → chama o método de busca de personagem do serviço
      - **services** <span style="color:green">
        - _loader_ <span style="color:purple">
          - **Descrição**: serviço para lógica de gerenciamento do loader da aplicação
          - **Principais métodos**:
            - _showLoader_ → mostra o loader
            - _hideLoader_ → esconde o loader
        - _local-storage_ <span style="color:purple">
          - **Descrição**: serviço para gerenciamento do localstorage
          - **Principais métodos**:
            - _getStoredCharacters_ → recuperar dados do localstorage
            - _saveCharacter_ → salvar dados no localstorage
        - _marvel_ <span style="color:purple">
          - **Descrição**: serviço que busca dados na API
          - **Principais métodos**:
            - _getCharacterByName_ → chama uma função que verifica se o personagem está salvo offline, caso sim, busca informações no localstorage, senão busca na API
            - _getLocalStoradeCharacter_ → recupera informações do personagem do localstorage
            - _findSavedCharacterByName_ → verifica se o personagem digitado existe no localstorage
        - _notification_ <span style="color:purple">
          - **Descrição**: serviço para exibição de aviso de perda de internet durante a requisição http
          - **Principais métodos**:
            - _info_ → exibe o dialog de notificação
      - **tests** <span style="color:green">
        - _mocks_ <span style="color:purple">→ possui arquivo mock para testes unitários
      - **utils** <span style="color:green">→ possui métodos genéricos que podem ser reaproveitados
  - **assets** <span style="color:purple">
    - **images**: imagens da aplicação
