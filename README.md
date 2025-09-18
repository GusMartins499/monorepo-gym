# 📌 Requisitos Funcionais

- [x] O sistema deve permitir o **cadastro de usuários** com os perfis:
  - Administrador
  - Aluno
  - Professor
- [x] Deve ser possível **ativar ou inativar** um usuário.
- [x] O sistema deve permitir o **cadastro de avaliações de IMC** dos alunos, calculadas com base na **altura e peso**.
- [x] O sistema deve gravar a **classificação do IMC** com base na seguinte tabela:

| **IMC**        | **Classificação**  |
| -------------- | ------------------ |
| Menor que 18.5 | Abaixo do peso     |
| 18.5 - 24.9    | Peso normal        |
| 25 - 29.9      | Sobrepeso          |
| 30 - 34.9      | Obesidade grau I   |
| 35 - 39.9      | Obesidade grau II  |
| Acima de 40    | Obesidade grau III |

- [x] Deve ser possível **consultar avaliações de IMC**, com **filtro por aluno ou professor**.
- [x] O sistema deve possuir **autenticação com usuário e senha**, acessível por **administradores, professores e alunos**.


# ⚖️ Regras de Negócio

## 👨‍💼 Usuário Administrador
> - Pode **cadastrar, editar e excluir** usuários de qualquer perfil (exceto exclusão se houver avaliações vinculadas).  
> - Pode **cadastrar, editar e excluir** avaliações de IMC.  
> - Pode **consultar avaliações de qualquer aluno**.  

---

## 👨‍🏫 Usuário Professor
> - Pode **cadastrar e editar alunos**.  
> - Pode **cadastrar e editar avaliações de IMC**.  
> - Pode **consultar avaliações de seus alunos**.  

---

## 👨‍🎓 Usuário Aluno
> - Pode **consultar apenas suas próprias avaliações**.  

---

## 🚫 Usuário Inativo
> - **Não pode acessar** o sistema.  
> - **Não pode ter novas avaliações cadastradas**.  

# ▶️ Executando o projeto

### 1. Instalar dependências
Na raiz do monorepo, execute:
```bash
pnpm install
```

---

### 2. Subir o banco de dados (Docker)
Baixe a imagem do SQL Server 2022:
```bash
docker pull mcr.microsoft.com/mssql/server:2022-latest
```

Depois, inicie o container usando o `docker-compose.yml` que já está na raiz:
```bash
docker-compose up -d
```

⚠️ Observações:  
- O container leva cerca de **30 segundos** para criar o banco.  
- Você pode verificar os logs com:
  ```bash
  docker logs -f monorepo-gym-mssql
  ```
  Quando aparecer a mensagem abaixo, significa que o banco foi criado com sucesso:  
  ```
  Starting up database 'docker'
  ```

---

### 3. Configurar variáveis de ambiente
Crie um arquivo **.env** na **raiz**, em `apps/server` e em `apps/web` com o seguinte conteúdo:

```env
MSSQL_SA_PASSWORD=Docker@123
JWT_SECRET=secret
```

---

### 4. Rodar os serviços
- **Servidor (API):**
  ```bash
  pnpm migration:run
  ```
- **Servidor (API):**
  ```bash
  pnpm --filter server dev
  ```
- **Aplicação Web:**
  ```bash
  pnpm --filter web dev
  ```