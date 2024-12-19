const readline = require('readline');
const fs = require('fs');

// Criação da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let alunos = [];

// Função para carregar os alunos do arquivo
function carregarAlunos() {
    if (fs.existsSync('alunos.json')) {
        const data = fs.readFileSync('alunos.json', 'utf8');
        try {
            alunos = JSON.parse(data);
        } catch (error) {
            console.log("Erro ao carregar os dados. Iniciando com uma lista vazia.");
            alunos = [];
        }
    } else {
        alunos = [];
        fs.writeFileSync('alunos.json', JSON.stringify(alunos));
        console.log("Arquivo alunos.json criado.");
    }
}

// Função para salvar os alunos no arquivo
function salvarAlunos() {
    fs.writeFileSync('alunos.json', JSON.stringify(alunos, null, 2));
    console.log("✔️ Dados salvos com sucesso!");
}

// Função para exibir o menu
function mostrarMenu() {
    console.log("\nEscolha uma das opções abaixo:");
    console.log("1. Cadastrar um novo aluno");
    console.log("2. Editar dados de um aluno");
    console.log("3. Excluir um aluno");
    console.log("4. Mostrar lista de alunos cadastrados");
    console.log("5. Exibir créditos");
    console.log("6. Sair do sistema");
}

// Função para mostrar a mensagem de boas-vindas
function mostrarBoasVindas() {
    console.log("\nBem-vindo ao sistema de cadastro de alunos.");
    console.log("Vamos começar a registrar um novo aluno!\n");
}

// Função para validar CPF (apenas uma validação simples para formato)
function validarCPF(cpf) {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
}

// Função para validar Email
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Função para cadastrar aluno
function cadastrarAluno() {
    console.log("\n--- Cadastro de Aluno ---");

    rl.question("Digite o nome completo do aluno: ", (nome) => {
        rl.question("Digite a idade do aluno: ", (idade) => {
            rl.question("Digite o email do aluno: ", (email) => {
                if (!validarEmail(email)) {
                    console.log("❌ E-mail inválido! Tente novamente.");
                    return cadastrarAluno(); // Chama novamente o cadastro
                }

                rl.question("Digite a série do aluno (ex: 1º ano, 2º ano): ", (serie) => {
                    rl.question("Digite o CPF do aluno: ", (cpf) => {
                        if (!validarCPF(cpf)) {
                            console.log("❌ CPF inválido! Tente novamente.");
                            return cadastrarAluno(); // Chama novamente o cadastro
                        }

                        rl.question("Digite o endereço completo do aluno: ", (endereco) => {
                            rl.question("Digite a cidade onde o aluno reside: ", (cidade) => {
                                rl.question("Digite o estado do aluno (ex: SP, RJ): ", (estado) => {
                                    rl.question("Digite o bairro do aluno: ", (bairro) => {
                                        rl.question("Digite o código postal (CEP) do aluno: ", (codigoPostal) => {
                                            const aluno = { nome, idade, email, serie, cpf, endereco, cidade, estado, bairro, codigoPostal };
                                            alunos.push(aluno);
                                            salvarAlunos();
                                            console.log(`✔️ Aluno ${nome} cadastrado com sucesso!`);
                                            mostrarMenu();
                                            selecionarOpcao();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

// Função para buscar aluno por nome
function buscarAlunoPorNome(nome) {
    return alunos.filter(aluno => aluno.nome.toLowerCase().includes(nome.toLowerCase()));
}

// Função para editar aluno
function editarAluno() {
    rl.question("Digite o nome do aluno que deseja editar: ", (nome) => {
        const alunosEncontrados = buscarAlunoPorNome(nome);

        if (alunosEncontrados.length === 0) {
            console.log("❌ Nenhum aluno encontrado com esse nome.");
            mostrarMenu();
            selecionarOpcao();
        } else {
            console.log("\n--- Alunos encontrados ---");
            alunosEncontrados.forEach((aluno, index) => {
                console.log(`${index + 1}. Nome: ${aluno.nome}, CPF: ${aluno.cpf}, Email: ${aluno.email}`);
            });

            rl.question("Digite o número do aluno que deseja editar: ", (numero) => {
                const alunoSelecionado = alunosEncontrados[parseInt(numero) - 1];
                const index = alunos.indexOf(alunoSelecionado);

                rl.question("Digite o novo nome do aluno: ", (nome) => {
                    rl.question("Digite a nova idade do aluno: ", (idade) => {
                        rl.question("Digite o novo email do aluno: ", (email) => {
                            if (!validarEmail(email)) {
                                console.log("❌ E-mail inválido! Tente novamente.");
                                return editarAluno(); // Tenta editar novamente
                            }

                            rl.question("Digite a nova série do aluno: ", (serie) => {
                                rl.question("Digite o novo CPF do aluno: ", (cpf) => {
                                    if (!validarCPF(cpf)) {
                                        console.log("❌ CPF inválido! Tente novamente.");
                                        return editarAluno(); // Tenta editar novamente
                                    }

                                    rl.question("Digite o novo endereço do aluno: ", (endereco) => {
                                        rl.question("Digite a nova cidade do aluno: ", (cidade) => {
                                            rl.question("Digite o novo estado do aluno: ", (estado) => {
                                                rl.question("Digite o novo bairro do aluno: ", (bairro) => {
                                                    rl.question("Digite o novo código postal (CEP) do aluno: ", (codigoPostal) => {
                                                        alunos[index] = { nome, idade, email, serie, cpf, endereco, cidade, estado, bairro, codigoPostal };
                                                        salvarAlunos();
                                                        console.log("✔️ Aluno editado com sucesso!");
                                                        mostrarMenu();
                                                        selecionarOpcao();
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
    });
}

// Função para excluir aluno
function excluirAluno() {
    rl.question("Digite o nome do aluno que deseja excluir: ", (nome) => {
        const alunosEncontrados = buscarAlunoPorNome(nome);

        if (alunosEncontrados.length === 0) {
            console.log("❌ Nenhum aluno encontrado com esse nome.");
            mostrarMenu();
            selecionarOpcao();
        } else {
            console.log("\n--- Alunos encontrados ---");
            alunosEncontrados.forEach((aluno, index) => {
                console.log(`${index + 1}. Nome: ${aluno.nome}, CPF: ${aluno.cpf}`);
            });

            rl.question("Digite o número do aluno que deseja excluir: ", (numero) => {
                const alunoSelecionado = alunosEncontrados[parseInt(numero) - 1];
                const index = alunos.indexOf(alunoSelecionado);
                alunos.splice(index, 1);
                salvarAlunos();
                console.log("✔️ Aluno excluído com sucesso!");
                mostrarMenu();
                selecionarOpcao();
            });
        }
    });
}

// Função para mostrar a lista de alunos
function mostrarListaAlunos() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
    } else {
        console.log("Lista de Alunos:");
        alunos.forEach((aluno, index) => {
            console.log(`${index + 1}. Nome: ${aluno.nome}, Idade: ${aluno.idade}, Email: ${aluno.email}, Série: ${aluno.serie}, CPF: ${aluno.cpf}, Endereço: ${aluno.endereco}, Cidade: ${aluno.cidade}, Estado: ${aluno.estado}, Bairro: ${aluno.bairro}, Código Postal: ${aluno.codigoPostal}`);
        });
    }
}

// Função para selecionar a opção do menu
function selecionarOpcao() {
    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case '1':
                cadastrarAluno();
                break;
            case '2':
                editarAluno();
                break;
            case '3':
                excluirAluno();
                break;
            case '4':
                mostrarListaAlunos();
                mostrarMenu();
                selecionarOpcao();
                break;
            case '5':
                mostrarCreditos(); // Exibe os créditos
                mostrarMenu();
                selecionarOpcao();
                break;
            case '6':
                rl.close();
                console.log("Saindo do sistema...");
                break;
            default:
                console.log("❌ Opção inválida! Tente novamente.");
                mostrarMenu();
                selecionarOpcao();
        }
    });
}

// Função para exibir créditos
function mostrarCreditos() {
    console.log("\n--- Créditos ---");
    console.log("Desenvolvido por: snipermaskdev");
    console.log("Este sistema permite o cadastro, edição, exclusão e visualização de alunos.");
    console.log("Os dados são armazenados em um arquivo JSON para persistência.");
    console.log("Obrigado por utilizar o sistema!");
}

// Início do programa
carregarAlunos();
mostrarBoasVindas();
mostrarMenu();
selecionarOpcao();