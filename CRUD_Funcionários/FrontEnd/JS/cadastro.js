let form = document.getElementById("formulario");
let nomeF = document.getElementById("nome");
let BIF = document.getElementById("bi");
let dataNascimentoF = document.getElementById("dataNascimento");
let generoF = document.getElementById("genero");
let estadoCivilF = document.getElementById("estadoCivil");
let telefoneF = document.getElementById("telefone");
let emailF = document.getElementById("email");
let cidadeF = document.getElementById("cidade");
let enderecoF = document.getElementById("endereco");
let departamentosF = document.getElementById("departamento");
let cargoF = document.getElementById("cargo");
let salarioF = document.getElementById("salario");
let bairroF = document.getElementById("bairro")
let confirmar1 = 0;
let confirmar2 = 0;
let confirmar3 = 0;
let confirmar4 = 0;

console.log(form)
const URL = "http://localhost:8080/funcionarios";

window.addEventListener("DOMContentLoaded", function () {
    let parametrosUrl = new URLSearchParams(window.location.search);
    let id = parametrosUrl.get("id");
    if (id) {
        carregarEdicao(id);
    }
})

function carregarCargo() {
    let depart = departamentosF.value;
    console.log(depart)
    if (depart == "Suporte Técnico") {
        cargoF.innerHTML = `
            <option value="" disabled selected>Seleciona o Cargo</option>
            <option value="Técnico de Suporte">Técnico de Suporte</option>
            <option value="Supervisor de Suporte">Supervisor de Suporte</option>
       `
    } else if (depart == "Segurança Informática") {
        cargoF.innerHTML = `
            <option value="" disabled selected>Seleciona o Cargo</option>
            <option value="Analista de dados">Analista de Dados</option>
            <option value="Técnico de Segurança Informática">Técnico de Segurança Informática</option>
       `
    } else if (depart == "Telecomunicações") {
        cargoF.innerHTML = `
            <option value="" disabled selected>Seleciona o Cargo</option>
            <option value="Engenheiro de Telecomunicações">Engenheiro de Telecomunicações</option>
            <option value="Operador de Sistemas">Operador de Sistemas</option>
       `
    } else if (depart == "Administração de Finanças") {
        cargoF.innerHTML = `
            <option value="" disabled selected>Seleciona o Cargo</option>
            <option value="Contabilista">Contabilista</option>
            <option value="Analista Financeiro">Analista Financeiro</option>
       `
    } else if (depart == "Recursos Humanos") {
        cargoF.innerHTML = `
            <option value="" disabled selected>Seleciona o Cargo</option>
            <option value="Gestor de Recursos Humanos">Gestor de Recursos Humanos</option>
            <option value="Coordernador de Pessoal">Coordernador de Pessoal</option>
       `
    }
}


async function carregarEdicao(id) {
    let resposta;
    let funcionario;
    try {
        carregarCargo()
        resposta = await fetch(URL + "/" + id);
        funcionario = await resposta.json();
        console.log(funcionario)
        document.getElementById("tituloCadastro").textContent = "Editar Funcionário";
        document.getElementById("id").value = funcionario.id;
        document.getElementById("nome").value = funcionario.nome;
        document.getElementById("bi").value = funcionario.cpf;
        document.getElementById("dataNascimento").value = funcionario.dataNascimento;
        document.getElementById("genero").value = funcionario.genero;
        document.getElementById("estadoCivil").value = funcionario.estadoCivil;
        document.getElementById("telefone").value = funcionario.telefone;
        document.getElementById("email").value = funcionario.email;
        document.getElementById("cidade").value = funcionario.cidade;
        document.getElementById("bairro").value = funcionario.bairro;
        document.getElementById("endereco").value = funcionario.endereco;
        document.getElementById("departamento").value = funcionario.departamentos;
        document.getElementById("cargo").value = funcionario.cargo;
        document.getElementById("salario").value = funcionario.salario;
        document.getElementById("save").textContent = "Editar";
    } catch (erro) {
        alert("Erro:" + erro);
    }
}

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let resposta;
    let id = document.getElementById("id").value;
    try {
        const funcionario = {
            nome: String(nomeF.value),
            cpf: String(BIF.value),
            dataNascimento: String(dataNascimentoF.value),
            genero: String(generoF.value),
            estadoCivil: String(estadoCivilF.value),
            telefone: String(telefoneF.value),
            email: String(emailF.value),
            cidade: String(cidadeF.value),
            bairro: String(bairroF.value),
            endereco: String(enderecoF.value),
            departamentos: String(departamentosF.value),
            cargo: String(cargoF.value),
            salario: parseInt(salarioF.value)
        }
        try {
            if (id) {
                resposta = await fetch(URL + "/" + id, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(funcionario)
                });
                if (resposta.ok) {
                    alert("Dados enviados com sucesso")
                } else {
                    alert("Erro ao enviar os dados")
                }
            } else {
                resposta = await fetch(URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(funcionario)
                });
                if (resposta.ok) {
                    alert("Dados enviados com sucesso")
                } else {
                    alert("Erro ao enviar os dados")
                }
            }
        } catch (erro) {
            alert(erro)
        }
    } catch (erro) {
        alert("Erro:" + erro);
    }
    limpar();

})
function limpar() {
    nomeF.value = "";
    BIF.value = "";
    dataNascimentoF.value = "";
    generoF.value = "";
    estadoCivilF.value = "";
    telefoneF.value = "";
    emailF.value = "";
    cidadeF.value = "";
    bairroF.value = ""
    enderecoF.value = "";
    departamentosF.value = "";
    cargoF.value = "";
    salarioF.value = "";
}

departamentosF.addEventListener("change", function colocarCargos(e) {
    e.preventDefault();
    if (departamentosF.value == "Suporte Técnico") {
        cargoF.innerHTML = `
            <option value="" disabled selected>Seleciona o Cargo</option>
            <option value="Técnico de Suporte">Técnico de Suporte</option>
            <option value="Supervisor de Suporte">Supervisor de Suporte</option>
       `
    } else if (departamentosF.value == "Segurança Informática") {
        cargoF.innerHTML = `
            <option value="" disabled selected>Seleciona o Cargo</option>
            <option value="Analista de dados">Analista de Dados</option>
            <option value="Técnico de Segurança Informática">Técnico de Segurança Informática</option>
       `
    } else if (departamentosF.value == "Telecomunicações") {
        cargoF.innerHTML = `
            <option value="" disabled selected>Seleciona o Cargo</option>
            <option value="Engenheiro de Telecomunicações">Engenheiro de Telecomunicações</option>
            <option value="Operador de Sistemas">Operador de Sistemas</option>
       `
    } else if (departamentosF.value == "Administração de Finanças") {
        cargoF.innerHTML = `
            <option value="" disabled selected>Seleciona o Cargo</option>
            <option value="Contabilista">Contabilista</option>
            <option value="Analista Financeiro">Analista Financeiro</option>
       `
    } else if (departamentosF.value == "Recursos Humanos") {
        cargoF.innerHTML = `
            <option value="" disabled selected>Seleciona o Cargo</option>
            <option value="Gestor de Recursos Humanos">Gestor de Recursos Humanos</option>
            <option value="Coordernador de Pessoal">Coordernador de Pessoal</option>
       `
    }
})

let maximo = "2008-12-31";
dataNascimentoF.addEventListener("input", function () {
    if (dataNascimentoF.value > maximo) {
        confirmar1 = 1;
        document.getElementById("erroNascimento").textContent = "A idade deve ser no minímo 18 anos";
    } else {
        confirmar1 = 0;
        document.getElementById("erroNascimento").textContent = "";
    }

})
BIF.addEventListener("input", async function () {
    let resposta = await fetch(URL);
    let funcionarios = await resposta.json();
    funcionarios.map(f => {
        if (f.cpf == BIF.value) {
            confirmar2 = 1;
            document.getElementById("erroBi").textContent = "Este BI já pertence a um funcionário";
        } else {
            confirmar2 = 0;
            document.getElementById("erroBi").textContent = "";
        }
    })

})
telefoneF.addEventListener("input", async function () {
    let resposta = await fetch(URL);
    let funcionarios = await resposta.json();
    funcionarios.map(f => {
        if (f.telefone == telefoneF.value) {
            confirmar3 = 1;
            document.getElementById("erroTelf").textContent = "Este contacto já pertence a um funcionário";
        } else {
            confirmar3 = 0;
            document.getElementById("erroTelf").textContent = "";
        }
    })

})
emailF.addEventListener("input", async function () {
    let resposta = await fetch(URL);
    let funcionarios = await resposta.json();
    funcionarios.map(f => {
        if (f.email == emailF.value) {
            confirmar4 = 1;
            document.getElementById("erroEmail").textContent = "Este email já pertence a um funcionário";
        } else {
            confirmar4 = 0;
            document.getElementById("erroEmail").textContent = "";
        }
    })

})
let saveButton = document.getElementById("save");
if(confirmar1 == 1 || confirmar2 == 1 || confirmar3 == 1 || confirmar4 == 1){
    saveButton.disabled = true;
}else{
    save.disabled = false;
}