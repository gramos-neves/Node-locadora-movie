
<h3 align="center">
  Desafio Node Locadora de Filmes
</h3>


## :rocket: Sobre o desafio

um aplicativo de um sistema de uma locadora de filmes.

### Utilizando API Node Spotify 

- **`Instalar as dependecias`**:  Para instalar as dependecias do Node executar o seguinte comando

```js
  yarn 
```

- **`Iniciar o Node`**:  Para iniciar o Node executar o seguinte comando, vai estar rodando na porta 8888  

```js
  yarn dev:server
```




### Funcionalidades da aplicação


- **`Criar Novo usuario`**:  Para criar novo usuario http://localhost:3333/users

```js
  {
		"name": "Guilherme",
		"email": "gui@gui.com.br",
		"password": "1234"

	}
```


- **`Autenticação de Sessão `**:  Para validação da sessão  http://localhost:3333/sessions

```js
  {
		"email": "gui@gui.com",
		"password": "1234"
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



- **`Criar Novo usuario`**:  Para criação de novos filmes http://localhost:3333/movie
     A Autenticação do token vai no headers da aplicação         
```js
    
 [
		{
			"title": "A espera de um milagre",
			"director": "diretor x"
		},
		{
			"title": "A espera de um milagre",
			"director": "diretor x"
		}

	]
```

