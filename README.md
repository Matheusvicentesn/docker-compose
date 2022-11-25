<p align="center">
  <img src="https://miro.medium.com/proxy/0*lQHBTNViWBhPsTtF." width="200" alt="Nest Logo" />
</p>



## Docker-Compose NESTJS PostgresSQL PGADMIN 4 

<br>

## Descrição
Criado compose para facilitar a execução dos projetos durante as aulas do DEVInHouse - Intelbras. Aplicação já vem totalmente configurada para o desenvolvimento.

Nest está praticamente zerado apenas configurado TypeORM com endpoint de usuários, com criação e busca de todos cadastrados.

PGADMIN é acessado atráves do endereço: `localhost:8000`

POSTGRES está com permanência de dados e a base de dados está localizada na pasta docker/database


## Rodando projeto
Antes de rodar independente do sistema operacional é necessário já ter instalado Docker Docker Compose e Node.
### Clonando repositório

```bash
git clone https://github.com/Matheusvicentesn/docker-compose.git
```

## Rodando projeto
Basta entrar na pasta raiz do projeto e dar o comando:

```bash
docker-compose up
```

## Credênciais
Vocês pode mudar as portas através do `docker-compose.yml`

```bash
POSTGRES
'banco': 'db'
'usuário do banco': 'postgres'
'senha do banco':  'postgres'
'porta': ['docker': 5432, 'local': 3333]

PGADMIN
'usuário': 'admin@admin.com'
'senha':  'admin'
'porta': ['docker': 80, 'local': 8000]

NESTJS
'porta': ['docker': 3000, 'local': 3000]
```

### Contato
Qualquer pessoa pode contribuir com o projeto! 
Projeto desenvolvido com intuito de ajudar todos que estão cursando DEVinHouse.
Qualquer dúvida ou sugestão estou disponível no e-mail:
<a href="mailto:contato@matheusvicente.dev.br?subject=Questions" title=""> contato@matheusvicente.dev.br</a>