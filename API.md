# API Endpoints

Este documento descreve os endpoints da API utilizados no projeto de monitoramento de culturas de mariscos, incluindo exemplos de requisição e retorno.

## Endpoints

### 1. Listar Todas as Culturas

**Endpoint**: `/plantations`

**Método**: `GET`

**Descrição**: Retorna todas as culturas de mariscos cadastradas.

#### Exemplo de Requisição

```sh
  GET http://localhost:3000/plantations
```
**Retorno**

```json
[
  {
    "id": 1,
    "producerName": "John Doe",
    "location": "Praia Azul",
    "quantity": 1000,
    "species": "Ostra",
    "intruderSpecies": false
  },
  {
    "id": 2,
    "producerName": "Jane Smith",
    "location": "Praia Verde",
    "quantity": 1500,
    "species": "Mexilhão",
    "intruderSpecies": true
  }
]
```
### 2. Criar um nova Cultura

**Endpoint**: `/plantations`

**Método**: `POST`

**Descrição**: Cadastra uma nova cultura de marisco no sistema.

#### Exemplo de Requisição

```sh
  POST http://localhost:3000/plantations
  Content-Type: application/json

  {  
    "producerName": "Alice Johnson",
    "location": "Praia Vermelha",
    "quantity": 1200,
    "species": "Vieira",
    "intruderSpecies": false
  }

````
**Retorno**

``` json
  {  
    "producerName": "Alice Johnson",
    "location": "Praia Vermelha",
    "quantity": 1200,
    "species": "Vieira",
    "intruderSpecies": false
  }
```
### 3. Atualizar uma Cultura

**Endpoint**: `/plantations`

**Método**: `PUT`

**Descrição**: Atualiza uma cultura já existente.

#### Exemplo de Requisição

```sh
  PUT http://localhost:3000/plantations/1
  Content-Type: application/json

  {
  "id": 1,
  "producerName": "John Doe",
  "location": "Praia Azul",
  "quantity": 1100,
  "species": "Ostra",
  "intruderSpecies": false
}

````
**Retorno**

``` json
  {
  "id": 1,
  "producerName": "John Doe",
  "location": "Praia Azul",
  "quantity": 1100,
  "species": "Ostra",
  "intruderSpecies": false
}
```

### 4. Excluir uma Cultura

**Endpoint**: `/plantations`

**Método**: `DELETE`

**Descrição**: Exclui uma cultura do sistema.

#### Exemplo de Requisição

```sh
  DELETE http://localhost:3000/plantations/1
````
**Retorno**

``` json
  { }
```
