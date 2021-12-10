![image](https://media.giphy.com/media/3o7btUrUUiljkVzDBS/giphy.gif)

# 🚀 CRUD - quero ser dev

E aeeee! Este é um repositório consolidando os meus estudos de NodeJs e MongoDB ao fazer a criação de um CRUD.

> ⚠️ O CRUD é um acrônimo para Create, Read, Update e Delete(criação, consulta, atualização e remoção de dados). São as 4 operações principais em um banco de dados. No MongoDB, usando o Mongoose aqui estão algumas formas de fazer:


| OPERAÇÃO | MONGODB | MONGOOSE |
| --- | --- | --- |
| `C`REATE | insertOne() | save() |
| `R`EAD | find() | find() |
| `U`PDATE | updateOne() | save() |
| `D`ELETE | deleteOne() | remove() |

---

- 🧠 Contexto
  - Como rodar o projeto localmente 
  - Tecnologias
  - Arquitetura
  - Requisitos, endpoints e operações
  - Dados
  - Próximos passos para estudar
  - Saudações, Simara!

---

# 🧠 Contexto

O objetivo era criar uma API onde fosse possível gerenciar vagas e candidatas. 

URLs em produção:

 **[Vagas](http://quero-ser-dev-api.herokuapp.com/vagas) (http://quero-ser-dev-api.herokuapp.com/vagas)** 

**[Candidatas](http://quero-ser-dev-api.herokuapp.com/candidatas) (http://quero-ser-dev-api.herokuapp.com/candidatas)** 

### Como rodar o projeto localmente
Siga os passos e inclua as informações abaixo:

| Passo | Comando/informação       |
| --------- | ----------- |
| Faça o fork  | `botão de forkar` |
| Faça o clone  | `git clone` |
| Instale as dependências   | `npm i` |
| Crie seu .env e inclua as variáveis e os valores     | `MONGODB_URI, NODE_ENV, API_URL` |
| utilize o script de dev    | `npm dev` |

### Tecnologias

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
| `MongoDb Atlas` | Banco de dados orientado a documentos e interface na nuvem para verificar se os dados foram persistidos|
|`Insomnia` | Interface gráfica para realizar os testes manuais das chamadas|
|`Heroku` | Servidor para deploy automático da aplicação via github|
  
### Arquitetura

#### 📂Routes
>  Cria as rotas apenas com a responsabilidade dos metodos HTTP
#### 📂Controllers
> Cria a lógica e salva as informações no db.
#### 📂Models
> Modela o esquema de dados para o banco.
#### 📂Data
> Cria a configuração de conexão com o banco.

```
 📁 QueroSerDev
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 vagaController.js
   |         |- 📄 candidataController.js
   |
   |    |- 📁 models
   |         |- 📄 vaga.js
   |         |- 📄 candidata.js
   |
   |    |- 📁 routes
   |         |- 📄 vagas.routes.js 
   |         |- 📄 candidatas.routes.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js

```

### Requisitos, endpoints e operações

GET
- [x]  **"/vagas"** Deverá retornar todas as vagas cadastradas
- [x]  **"/candidatas"** Deverá retornar todas as candidatas cadastradas

POST
- [x]  "**/vagas**" Deverá criar uma vaga e retornar o objeto criado
- [x]  "**/candidatas**"  Deverá criar uma candidata e retornar o objeto criado

DELETE
- [x]  "**/vagas/[ID]**" Deverá deletar uma vaga e retornar uma mensagem de sucesso
- [x]  "**/candidatas/[ID]**" Deverá deletar uma candidata e retornar uma mensagem de sucesso

PATCH
- [x]  "**/vagas/[ID]**" Deverá alterar informação específica dentro de uma vaga por id específico e retorna o objeto alterado
- [x]  "**/candidatas/[ID]**" Deverá alterar informação específica dentro de uma vaga por id específico e retorna o objeto alterado

REGRAS
- [x]  Não deverá ser possível criar uma candidata ou uma vaga com o mesmo nome


## Dados

CANDIDATA
- id: autogerado e obrigatório
- nome: texto e obrigatório
- github: texto e obrigatório
- linkedin: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

RETORNO DA API
```
[
  {
    "_id": "61b14ed6747faec5f4191678",
    "nome": "Simara",
    "github": "github.com/simaraconceicao",
    "linkedin": "linkedin.com/in/simaraconceicao",
    "criadoEm": "2021-12-09T00:33:20.140Z",
    "__v": 0
  },
  {
    "_id": "61b14eed747faec5f419167b",
    "nome": "Maria",
    "github": "github.com/mareamaciel",
    "linkedin": "linkedin.com/in/mareamaciel",
    "criadoEm": "2021-12-09T00:33:20.140Z",
    "__v": 0
  },
  {
    "_id": "61b1eece152c48438db77c26",
    "nome": "Maria Clara",
    "github": "github.com/mareamaciel",
    "linkedin": "linkedin.com/in/mareamaciel",
    "criadoEm": "2021-12-09T11:54:33.147Z",
    "__v": 0
  },
  {
    "_id": "61b1eedd152c48438db77c29",
    "nome": "Lucas",
    "github": "github.com/lucas",
    "linkedin": "linkedin.com/in/lucas",
    "criadoEm": "2021-12-09T11:54:33.147Z",
    "__v": 0
  }
]
```

VAGA
- id: autogerado e obrigatório
- salario: texto e obrigatório
- link: texto e obrigatório
- empresa: texto e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

RETORNO DA API
```
[
  {
    "_id": "61b14ff93feb843b76d8fa4f",
    "salario": "3500",
    "link": "queroserdev.com",
    "empresa": "quero ser",
    "nome": "Front-end Jr.",
    "criadoEm": "2021-12-09T00:38:14.033Z",
    "__v": 0
  },
  {
    "_id": "61b150203feb843b76d8fa54",
    "salario": "4000",
    "link": "simaraconceicao.com",
    "empresa": "simara conceicao servicos",
    "nome": "Front end Jr.",
    "criadoEm": "2021-12-09T00:38:14.033Z",
    "__v": 0
  }
]
```

### 😎 Próximos passos para estudar

- Arquitetura (DDD, Clean Architecture)
- Documentação (swagger)
- Código limpo (utilização de princípios como DRY, KISS, SOLID)
- Testes (unitários, e2e, etc)

---

_Foi incrível compartilhar essa jornada com você! Qualquer dúvida ou sugestão, chama no contatinho!_


### Saudações, Simara!

 <img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="Gif Yeah" width="200">

Professora na {reprograma}, desenvolvedora na ThoughtWorks e criadora do Podcast Quero Ser Dev.

Vamos nos conectar!

- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)

<br>
Feito com 💜 por Simara Conceição