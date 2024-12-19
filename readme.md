# Sistema de Cadastro de Alunos

Este é um sistema simples desenvolvido com Node.js para cadastro, edição, exclusão e exibição de alunos. O sistema armazena os dados dos alunos em um arquivo JSON (`alunos.json`), garantindo persistência das informações entre as execuções.

## Funcionalidades

- **Cadastrar Aluno**: Permite cadastrar um novo aluno, informando as seguintes informações:
  - Nome
  - Idade
  - Email
  - Série
  - CPF
  - Endereço
  - Cidade
  - Estado
  - Bairro
  - Código Postal

- **Editar Aluno**: Permite editar os dados de um aluno já cadastrado, alterando qualquer uma das informações mencionadas acima.

- **Excluir Aluno**: Permite excluir um aluno do sistema, removendo suas informações do arquivo.

- **Mostrar Lista de Alunos**: Exibe todos os alunos cadastrados com suas informações completas.


Você pode atualizar a seção Persistência de Dados do seu README.md para incluir a descrição de que o arquivo alunos.json será criado automaticamente caso não exista. Aqui está a modificação:

markdown
Copiar código
## Funcionalidades

- **Cadastrar Aluno**: Permite cadastrar um novo aluno, informando as seguintes informações:
  - Nome
  - Idade
  - Email
  - Série
  - CPF
  - Endereço
  - Cidade
  - Estado
  - Bairro
  - Código Postal

- **Editar Aluno**: Permite editar os dados de um aluno já cadastrado, alterando qualquer uma das informações mencionadas acima.

- **Excluir Aluno**: Permite excluir um aluno do sistema, removendo suas informações do arquivo.

- **Mostrar Lista de Alunos**: Exibe todos os alunos cadastrados com suas informações completas.

- **Persistência de Dados**: Todos os dados dos alunos são armazenados de forma permanente em um arquivo `alunos.json`. Caso o arquivo não exista, ele será criado automaticamente na primeira execução do sistema, garantindo que as informações não sejam perdidas ao fechar o programa.


- **Exibir Créditos**: Exibe informações sobre os desenvolvedores e a funcionalidade do sistema quando o usuário seleciona a opção correspondente no menu.

## Menu
Escolha uma opção:
1. Cadastrar Aluno
2. Editar Aluno
3. Excluir Aluno
4. Mostrar Lista de Alunos
5. Exibir Créditos
6. Sair

## Requisitos

- **Node.js**: O sistema requer a instalação do Node.js. Se você ainda não tem o Node.js instalado, pode baixá-lo [aqui](https://nodejs.org/).

- **Editor de Código**: Recomendamos o uso de um editor como o [Visual Studio Code](https://code.visualstudio.com/) para facilitar o desenvolvimento e manutenção do código.

## Como Usar

### 1. Clonar o Repositório

Clone o repositório ou baixe os arquivos diretamente:

```bash
git clone https://github.com/snipermaskdevs/cadastrar-alunos-javascripts.git
```

### 2. Rodar o Sistema
Para iniciar o sistema, execute o seguinte comando:

```bash
node cadastro_alunos.js
```

