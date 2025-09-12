# 📌 Requisitos Funcionais

- [ ] O sistema deve permitir o **cadastro de usuários** com os perfis:
  - Administrador
  - Aluno
  - Professor
- [ ] Deve ser possível **ativar ou inativar** um usuário.
- [ ] O sistema deve permitir o **cadastro de avaliações de IMC** dos alunos, calculadas com base na **altura e peso**.
- [ ] O sistema deve gravar a **classificação do IMC** com base na seguinte tabela:

| **IMC**        | **Classificação**  |
| -------------- | ------------------ |
| Menor que 18.5 | Abaixo do peso     |
| 18.5 - 24.9    | Peso normal        |
| 25 - 29.9      | Sobrepeso          |
| 30 - 34.9      | Obesidade grau I   |
| 35 - 39.9      | Obesidade grau II  |
| Acima de 40    | Obesidade grau III |

- [ ] Deve ser possível **consultar avaliações de IMC**, com **filtro por aluno ou professor**.
- [ ] O sistema deve possuir **autenticação com usuário e senha**, acessível por **administradores, professores e alunos**.


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