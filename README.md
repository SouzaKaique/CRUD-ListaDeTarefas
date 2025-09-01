
# 📝 Lista de Tarefas (Fullstack)

Este projeto é uma aplicação **fullstack** que permite criar, listar, marcar como concluídas e excluir tarefas.  
A aplicação também mostra um contador de tarefas para acompanhar seu progresso.

## 🧑‍💻 Informações Técnicas

* **Backend:** Java (Spring Boot)
* **Frontend:** Angular
* **Outras:** Node.js, npm, Maven

---

## 🚀 Como Rodar o Projeto

### 1. Clonar o repositório

Abra seu terminal e execute os seguintes comandos:

```bash
git clone https://github.com/SouzaKaique/ListaDeTarefas
cd ListaDeTarefas
```
### 2. Rodar o Backend (Java + Spring Boot)

O backend foi desenvolvido com Java 24, Spring Boot e Maven.
Certifique-se de ter o Java 24 ou uma versão superior instalada.

Abra a pasta do backend em sua IDE de preferência (como o IntelliJ IDEA) e execute:

```bash
mvn spring-boot:run
```
O backend estará disponível em: http://localhost:8080.

## 🚩Principais Endpoints:
GET /tarefas - Lista todas as tarefas

POST /tarefas - Cria uma nova tarefa

PUT /tarefas/{id} - Atualiza uma tarefa existente

DELETE /tarefas/{id} - Exclui uma tarefa

### 3. Rodar o Frontend (Angular)

O frontend foi desenvolvido com Angular 19, TypeScript, Node.js e npm.

Certifique-se de ter o Node.js e o npm instalados.

Navegue até a pasta do frontend no seu terminal e instale as dependências:

```bash
npm install
```
Em seguida, inicie o servidor de desenvolvimento:
```bash
ng serve --open 
```
O frontend estará disponível em: http://localhost:4200.

## 📝 Funcionalidades

Adicionar, marcar como concluída e excluir tarefas

Contador de tarefas totais, pendentes e concluídas

Opção para limpar todas as tarefas concluídas

Botão de Dark/Light mode

## ⚠️ Observações

Para que o frontend funcione corretamente, o backend deve estar rodando em http://localhost:8080.

Se precisar alterar a URL da API, edite o arquivo frontend/src/app/services/tarefa.service.ts e ajuste a variável apiUrl.

---

Feito com 💻 e 🧠, por Kaique.

--- 
