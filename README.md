
<h3 align="center">
  Desafio Node Locadora de Filmes
</h3>


## :rocket: Sobre o desafio

um aplicativo de um sistema de uma locadora de filmes.

### Utilizando API Node Locodora de Filmes

- **`Instalar as dependecias`**:  Para instalar as dependecias do Node executar o seguinte comando

```js
  yarn 
```


### Criação do banco de dados Mysql


Caso estive usando docker pode usar esse comando para criar o banco de dados

```js
  docker run --name locadora-mysql -e MYSQL_ROOT_PASSWORD=myqlloc  -p 3306:3306 -d mysql 
```


Criar o schema com nome <Strong>locadora</Strong> antes de executar o comando a baixo<br>
Criar o Usuario no Mysql para o acesso externo 
<br>
<br>
<Strong>Usuario:</Strong> locadora<br>
<Strong>Senha:</Strong> Myqlloc100<br>
 

Executar o comando para criação das tabelas.
```js
  yarn typeorm migration:run
```


- **`Iniciar o Node`**:  Para iniciar o Node executar o seguinte comando, vai estar rodando na porta 3333  

```js
  yarn dev:server
```


### Funcionalidades da aplicação


- **`Criar Novo usuario`**:  Para criar novo usuario Método Post: http://localhost:3333/users<br>
 Enviar no corpo <Strong>name</Strong>, <Strong>email</Strong>, <Strong>password </Strong> <br>
 Exemplo
```js
  {
   "name":"Guilherme",
   "email":"gui@gui.com",
   "password":"1234"
  }
```


- **`Autenticação de Sessão `**:  Para validação da sessão Método Post:  http://localhost:3333/sessions<br>
 Enviar no corpo <Strong>name</Strong>, <Strong>email</Strong> <br>
 Exemplo

```js
{
   "email":"gui@gui.com",
   "password":"1234"
}

  Resposta

  {
		"user": {
			"id": 4,
			"name": "Guilherme",
			"email": "gui@gui.com",
			"created_at": "2020-12-04T22:22:53.708Z",
			"updated_at": "2020-12-04T22:22:53.708Z"
		},
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDc1MzEwNDMsImV4cCI6MTYwNzYxNzQ0Mywic3ViIjoiNCJ9._iCbrEEAMJpulRINUgNcgWZUHzgf3t_Np8Q7hK73Ozg"
	}

```


- **`Criar Novo Filme`**:  Para criação de novos filmes Método Post: http://localhost:3333/movie <br>
     Enviar no corpo <Strong>title</Strong>, <Strong>director</Strong> <br>
     para acessar precisa da validação do token, o mesmo vai no headers da chamada.<br>
     Authorization token <br>
     Exemplo
```js
  [
    {
        "title":"A espera de um milagre",
        "director":"Frank Darabont"
    },
    {
        "title":"Deadpool",
        "director":"David Leitch"
    }
  ]
```


- **`Lista filmes disponiveis`**:  Para acessar lista de filmes disponiveis Método Get: http://localhost:3333/movie <br>
     para acessar precisa da validação do token, o mesmo vai no headers da chamada.<br>
     Authorization token
```js
    Resposta
    [
        {
            "id": 15,
            "title": "A espera de um milagre",
            "director": "Frank Darabont",
            "created_at": "2020-12-09T08:02:22.385Z",
            "updated_at": "2020-12-09T08:02:22.385Z"
        },
        {
            "id": 16,
            "title": "Deadpool",
            "director": "Tim Miller",
            "created_at": "2020-12-09T08:02:22.398Z",
            "updated_at": "2020-12-09T08:02:22.398Z"
        },
        {
            "id": 17,
            "title": "Deadpool 2",
            "director": "David Leitch",
            "created_at": "2020-12-09T08:02:22.403Z",
            "updated_at": "2020-12-09T08:02:22.403Z"
        }
    ]
```


- **`Buscar filmes`**:  Para buscar de filmes disponiveis por titulo Método Post: http://localhost:3333/movie <br>
     Enviar como parametro <Strong>title</Strong>.<br>
     para acessar precisa da validação do token, o mesmo vai no headers da chamada.<br>
     Authorization token
```js
       params title
```



- **`Alugar filmes`**:  Para alugar um filmes disponiveis Método Post: http://localhost:3333/rents <br>
     Enviar no corpo <Strong>id_movie</Strong>. que é o id da tabela movie  <br>
     para acessar precisa da validação do token, o mesmo vai no headers da chamada.<br>
     Authorization token
```js
   [
      {
          "id_movie":1
      },
      {
          "id_movie":2
      }
   ]

    Resposta

    [
      {
          "id_movie": 1,
          "id_user": 4,
          "id": 13,
          "created_at": "2020-12-09T22:24:24.693Z",
          "updated_at": "2020-12-09T22:24:24.693Z"
      },
      {
          "id_movie": 2,
          "id_user": 4,
          "id": 14,
          "created_at": "2020-12-09T22:24:24.712Z",
          "updated_at": "2020-12-09T22:24:24.712Z"
      }
   ]
```



- **`Listar filmes alugados`**:  Para Listar filmes alugados Método Get: http://localhost:3333/rents <br>
     para acessar precisa da validação do token, o mesmo vai no headers da chamada. <br>
     Authorization token
```js
   Resposta
  [
    {
        "id": 13,
        "id_movie": 1,
        "id_user": 4,
        "created_at": "2020-12-09T22:24:24.693Z",
        "updated_at": "2020-12-09T22:24:24.693Z"
    },
    {
        "id": 14,
        "id_movie": 2,
        "id_user": 4,
        "created_at": "2020-12-09T22:24:24.712Z",
        "updated_at": "2020-12-09T22:24:24.712Z"
    }
  ]
```



- **`Devolver filmes`**:  Para devolver um ou mais filmes Método Post: http://localhost:3333/rents/devolution <br>
     Enviar no corpo <Strong>id</Strong>. que é o id da tabela rent.  <br>
     para acessar precisa da validação do token, o mesmo vai no headers da chamada.<br>
     Authorization token
```js
   [
      {
          "id":13
      },
      {
          "id":14
      }
   ]
```
