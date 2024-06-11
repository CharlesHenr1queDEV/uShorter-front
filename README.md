# uShorter Front-end

## Visão geral
O projeto uShorter é um aplicativo de encurtamento de URL que permite aos usuários converter URLs longas em versões encurtadas. Ele oferece uma solução eficaz para compartilhar links longos de forma mais conveniente e fácil de lembrar. Além disso, o sistema fornece estatísticas detalhadas sobre o uso de cada URL encurtada, incluindo contagem de cliques.

## Características
- Gerar URL curta
- Mostrar URL encuratada
- Mostrar quantidade de cliques em uma URL

## Começando

### Requisitos

- Node: 18.19.1
- Angular CLI: 18.0.2
- Sua IDE (IntelliJ IDEA, STS, etc.)
- Docker e Docker Compose

### Instalação

#### 1) Utilizando Docker e Docker Compose

 - Pegar o repositório do git e extrair em uma pasta local
     ```bash
    git clone https://github.com/CharlesHenr1queDEV/uShorter-front.git
    ```
- Navegar até a pasta 
    ```bash
    cd uShorter-front
    ```
- Builda o projeto:
    ```bash
    npm install
    ```
- Gerar uma imagem docker
     ```bash
     docker build --tag=ushorter-front:latest .
    ```
- Execute o docker-compose 
     ```bash
    docker-compose up ou docker-compose up -d
    ```

##### 2) Utilizando terminal

- Pegar o repositório do git e extrair em uma pasta local
     ```bash
    git clone https://github.com/CharlesHenr1queDEV/uShorter-front.git 
    ```
- Navegar até a pasta 
    ```bash
    cd uShorter-front
    ```
- Atualizar as dependências
    ```bash
    npm install
    ```
- Iniciar a aplicação
    - ng serve
