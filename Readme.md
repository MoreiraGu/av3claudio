# Portfólio Dinâmico – Node.js + Express + EJS + MySQL

## Descrição do Projeto
Este projeto é um portfólio dinâmico desenvolvido para apresentar informações pessoais, acadêmicas e profissionais de forma organizada e interativa.

Ele permite que cursos, projetos, competências e redes sociais sejam atualizados de forma simples, **sem necessidade de reiniciar o servidor**.

O portfólio é construído utilizando:

- **Node.js + Express** para servidor web e gerenciamento de rotas  
- **EJS (Embedded JavaScript)** para renderização dinâmica do conteúdo  
- **MySQL** como banco de dados para armazenamento persistente  
- **Middlewares** para processar formulários, lidar com métodos HTTP avançados e servir arquivos estáticos  

---

## Estrutura do Projeto

O projeto possui uma organização modular:

- **Banco de Dados:** cada seção do portfólio possui sua própria tabela no MySQL (dados pessoais, cursos, projetos, competências, redes sociais).  
- **Views (EJS):** templates responsáveis pela renderização das páginas.  
- **Public:** contém arquivos estáticos como CSS, imagens e JavaScript.  
- **Servidor (Node.js):** gerencia rotas, controla a lógica de negócio e permite operações de CRUD em todas as seções.

Essa estrutura facilita a manutenção, atualização e escalabilidade do portfólio.

---

## Funcionalidades

- **Atualização dinâmica:** todas as informações podem ser alteradas via API ou banco de dados.  
- **CRUD completo:** disponível para cursos, projetos e competências.  
- **Renderização automática:** páginas refletem automaticamente os dados armazenados no MySQL.  
- **Organização modular:** cada seção funciona de forma independente e é facilmente expansível.  

---

## Seções do Portfólio

### Apresentação
- Foto  
- Nome  
- Cargo  
- Biografia  
- Contato  

### Formação Acadêmica
- Cursos técnicos  
- Cursos superiores  

### Cursos Complementares
- Certificados  
- Tags  
- Links  

### Projetos
- Descrição  
- Tecnologias utilizadas  
- Repositório / Deploy  

### Competências
- Técnicas  
- Interpessoais  

### Redes Sociais
- LinkedIn  
- GitHub  

---

## Conceitos Principais

### **Dinamicidade**
O conteúdo é atualizado automaticamente sem alterações no HTML.

### **Flexibilidade**
Novos cursos, projetos e competências podem ser adicionados facilmente.

### **Persistência**
Uso do MySQL para um armazenamento estruturado e confiável.

### **HTTP Básico**
Utilização dos métodos **GET, POST, PUT e DELETE** no fluxo do sistema.

---

## Objetivo do Projeto
Criar um portfólio funcional, modular e fácil de manter, que sirva como **apresentação profissional** e **demonstração prática de habilidades** em:

- Node.js  
- Express  
- EJS  
- MySQL  

### Você pode testar o projeto na sua máquina!!
## ⚙️ Como Rodar o Projeto Localmente

Você pode testar o projeto na sua máquina! Siga os passos abaixo:

### Pré-requisitos
Certifique-se de ter os seguintes programas instalados na sua máquina:
* [**Node.js**](https://nodejs.org/en/)
* [**MySQL Workbench**](https://www.mysql.com/products/workbench/)
* **Git Bash**

### Passos
1.  **Clone o Projeto:** Abra o terminal na área de trabalho e execute o comando:
    ```bash
    git clone [https://github.com/MoreiraGu/aai3_esii](https://github.com/MoreiraGu/aai3_esii)
    ```
2.  **Instale as Dependências:** Navegue até a pasta do projeto no terminal e rode o comando:
    ```bash
    npm i
    ```
3.  **Configure o Banco de Dados:**
    * Copie o conteúdo do arquivo `querycreatedb.sql`.
    * Cole e execute o conteúdo no seu servidor MySQL .( Isso irá criar a database `portfolio` com os dados iniciais. )
4.  **Ajuste as Credenciais:**
    * Edite o arquivo `db.js` e altere as credenciais (usuário e senha) para corresponderem às configurações do seu servidor MySQL local.
5.  **Inicie o Servidor:** Volte ao terminal, execute o comando para rodar o projeto e acesse-o no seu navegador:
    ```bash
    npm run dev
    ```
    * Abra o navegador web no link: `http://localhost:3000/`
