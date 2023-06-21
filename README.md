# acade-backend

O projeto Acade é um aplicativo voltado para academias, que permite o cadastro de alunos, personal trainers e serve como uma ponte de ligação entre eles. O app possibilita que os personal trainers registrem informações de avaliação física dos usuários, assim como publiquem suas séries de exercícios. Os usuários, por sua vez, podem visualizar suas séries, dados de avaliação física e outros registros. O cadastro da academia atua como administrador de registro de personais e usuários.

## Regras de Negocio 

### Academia se registrar 

- [x] Requisitar um registro no sistema por meio da rota **/register**.
- [x] Poder se logar no sistema e receber um JWT para autenticar as rotas.
- [ ] Receber no email registrado um link de confirmação do email , para validação do cadastro.

### Controle de Personal [Auth : Admin] 

- [ ] Cadastrar um Personal.
- [ ] Cadastrar um Personal por meio de uma rota autenticada com JWT.
- [ ] CRUD para um Personal por meio de uma rota autenticada com JWT.

### Controles de dados de um Personal 

- [ ] Criar um grupo com Alunos existentes. 